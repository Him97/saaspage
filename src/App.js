import React, { useState } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Stack from 'react-bootstrap/Stack';

import NotesForm from './components/Form.jsx'
import Notes from './components/Notes.jsx';
import NotesModal from './components/Modal.jsx';

function App() {
  const [notes, setNotes] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalDate, setModalDate] = useState('');

  const addNote = (noteTitle, noteText) => {
    const newNote = {
      title: noteTitle,
      text: noteText,
      date: new moment().format('MMMM Do, hh:mm A'),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const clickNote = (title, text, date) => {
    setModalTitle(title);
    setModalText(text);
    setModalDate(date);
    setModalShow(true);
  };

  return (
    <Stack className='App vh-100 vw-100 p-5' gap={4}>
      <NotesForm addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        clickNote={clickNote} />
      <NotesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalTitle}
        text={modalText}
        date={modalDate} />
    </Stack>
  );
}

export default App;