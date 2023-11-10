import React,{ useState}from "react";

import './Note.css';

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the edited note and toggle off edit mode
    props.onEdit(props.id, editedTitle, editedContent);
    setIsEditing(false);
  };
  const [isDone, setIsDone] = useState(false);

  function handleCheckboxChange() {
    setIsDone((prevIsDone) => !prevIsDone);
  }
  return (
    <div className="note">
       {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <p>Due Date: {props.dueDate}</p>
          Done:
          <input type="checkbox" checked={props.isDone} onChange={props.onToggleDone} />
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => props.onDelete(props.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Note;