import React from "react";
import ReactDOM from 'react-dom';
import './style.css';
import {nanoid} from 'nanoid'; 
class New_Note extends React.Component{
    constructor()
    {
        super()
        this.textlength=200
        this.state={savedata:""}
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleChange(event)
    {   
        if(this.textlength-event.target.value.length>=0)
        {this.setState({
            savedata:event.target.value
        })}
      
    }
    handleClick(){
        if (this.state.savedata !== "") {
            const newNote = {
                id: nanoid(),
                text: this.state.savedata,
                date:`${(new Date()).getDate()}/${(new Date()).getMonth()}/${(new Date()).getFullYear()} `
            };
            this.props.save(newNote)
            this.setState({savedata:""})

    }};
    render(){
    return(
        <div className="newnote">
            <textarea rows='8.5' cols='37' placeholder="Type to add your note..." value={this.state.savedata} onChange={this.handleChange}></textarea>
            <div className="footer">
            <small>{this.textlength-this.state.savedata.length} remaining</small>
            <button onClick={this.handleClick}>Save</button>
        </div>
        </div>
    )
    }

}
export default New_Note;
