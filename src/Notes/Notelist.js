
import React from "react";
import Note from "./Note";
import './style.css';
import data from "./data.js";
import New_Note from "./New_Note";
class Notelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes_data: data,
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote=this.deleteNote.bind(this);
    this.edit=this.edit.bind(this)
  }
  
  deleteNote(id){
   const updatedData=this.state.notes_data.filter(note=>note.id!=id)
   this.setState({notes_data:updatedData}) 
   
    }
  addNote(text){
    this.setState(prevState => ({
      notes_data: [...prevState.notes_data, text],
    }));
   
  }
  edit(id, newText) {
    const updatedData = this.state.notes_data.map(note => {
      if (note.id === id) {
        return { ...note, text: newText};
    }
    return note;
    });
    this.setState({ notes_data: updatedData });
  }
  render() {
  console.log(this.props.searchtext)
    const filteredData = this.state.notes_data.filter(note =>
      note.text.toLowerCase().includes(this.props.searchtext?this.props.searchtext.toLowerCase():"")
    );

    const updatedData = filteredData.map(ele => (
      <Note key={ele.id} id={ele.id} text={ele.text} date={ele.date} editText={this.edit} deletenote={this.deleteNote} />
    ));
    return (
      <>
        <div className="notes-list">
          <New_Note save={this.addNote}/>
          {updatedData}
        </div>
      </>
    );
  }
}

export default Notelist;