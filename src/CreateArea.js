import React, { useState } from "react";
import './CreateArea.css';

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
    dueDate: "",
  });

  function handleChange(event) {
    const inputField = event.target.name;
    const inputValue = event.target.value;
  
    setInputNote((prev) => {
      return {
        ...prev,
        [inputField]: inputValue,
      };
    });
  }
  

  return (
    <div className="create-area-container">
      <form>
        <input
          className="create-area-input"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          className="create-area-input"
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
        />
        <input
  className="create-area-input create-area-date" // Add the create-area-date class here
  type="date"
  name="dueDate"
  onChange={handleChange}
  value={inputNote.dueDate}
  placeholder="Due Date"
/>
        <button
          className="create-area-button"
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(inputNote);
            setInputNote({
              title: "",
              content: "",
              dueDate: "",
            });
          }}
        >
          <span className="plus">+</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;