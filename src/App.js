import './App.css';
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notesList, setNotesList] = useState([]);
  const [sortByDueDate, setSortByDueDate] = useState(false);

  function addNote(newNote, dueDate = null) {
    if (newNote.title === "" && newNote.content === "") {
      alert("Can't add an empty note!");
      return;
    }
    const noteWithDueDate = { ...newNote, dueDate };
    setNotesList((prev) => {
      return [...prev, noteWithDueDate];
    });
  }
  

  function deleteNote(idOfNote) {
    setNotesList((prev) => {
      return prev.filter((val, index) => {
        return index !== idOfNote;
      });
    });
  }

  function editNote(id, editedTitle, editedContent) {
    const updatedNotesList = [...notesList];
    const noteToEdit = updatedNotesList[id];
    noteToEdit.title = editedTitle;
    noteToEdit.content = editedContent;
    setNotesList(updatedNotesList);
  }

  function removeAll() {
    setNotesList([]);
  }

  // Sort notes based on the sorting order (by due date)
  const sortedNotes = [...notesList].sort((a, b) => {
    if (sortByDueDate) {
      // Sort by due date in ascending order
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else {
      // Sort by due date in descending order
      return new Date(b.dueDate) - new Date(a.dueDate);
    }
  });

  return (
    <div className="container">
      <Header />
      <div className="app-content">
        <CreateArea onAdd={addNote} />
        <p id="para">Here is your list of activity</p>
        <div className="left-column">
          <button onClick={() => setSortByDueDate(!sortByDueDate)}>
            {sortByDueDate ? "Sort by Due Date (Ascending)" : "Sort by Due Date (Descending)"}
          </button>
        </div>
        <div className="right-column">
          {sortedNotes.map((note, index) => {
            return (
              <Note
  key={index}
  id={index}
  title={note.title}
  content={note.content}
  dueDate={note.dueDate}
  isEditing={false} // Make sure isEditing is false if you want to display the due date
  onDelete={deleteNote}
  onEdit={editNote}
/>
            );
          })}
          {notesList.length >= 1 && <button onClick={removeAll}>Remove All</button>}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;