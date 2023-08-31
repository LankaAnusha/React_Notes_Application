import Notelist from './Notes/Notelist';
import './Notes/style.css';
import Header from './Notes/Header';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state={mode:false,searchtext:""}
    this.handleMode=this.handleMode.bind(this)
    this.searchText=this.searchText.bind(this)
  }
  handleMode()
  {
    this.setState({mode:!this.state.mode})
  }
  searchText(text)
  {
    this.setState({searchtext:text})
  }
  render() {
    console.log(this.state.searchtext)
    return (
      <>
      <div className={`${this.state.mode ? 'dark-mode':'light-mode'}`}>
        <div className="notes-container">
          <Header searchText={this.searchText}handleMode={this.handleMode} mode={this.state.mode}/>
          <Notelist searchtext={this.state.searchtext}/>
        </div>
        </div>
      </>
    );
  }
}

export default App;
