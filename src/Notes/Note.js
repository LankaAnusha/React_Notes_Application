import React, { useState } from "react";
import ReactDOM from "react-dom";
import './style.css';
import { MdDeleteForever } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editText: this.props.text
        };
        this.deletenote = this.deletenote.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }

    deletenote() {
        this.props.deletenote(this.props.id);
    }

    toggleEdit() {
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }));
    }

    handleChange(event) {
        this.setState({
            editText: event.target.value
        });
        console.log(this.state.editText)
        this.props.editText(this.props.id,this.state.editText)
    }

    saveEdit() {
        this.toggleEdit(); 
    }

    render() {
       
        return (
            <>
                <div className="notes">
                    {this.state.isEditing ? (
                        <textarea
                           className="edit-textarea"
                           rows="8.5" cols={37} value={this.state.editText}
                            onChange={this.handleChange}
                        />
                    ) : (
                        <span>{this.props.text}</span>
                    )}
                    <div className="footer">
                        {this.props.date}
                        {this.state.isEditing ? (<FontAwesomeIcon
                            onClick={this.toggleEdit}
                           
                        />):
                        <FontAwesomeIcon
                        onClick={this.toggleEdit}
                            icon={faEdit}
                            className="edit-icon"
                            size="1.2em"
                        />
                        }
                        {this.state.isEditing ? "":
                        <MdDeleteForever
                            onClick={this.deletenote}
                            className="delete-icon"
                            size='1.2em'
                        />}
                        {this.state.isEditing && (
                            <button onClick={this.saveEdit}>Save</button>
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default Note;
