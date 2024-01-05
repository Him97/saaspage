import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NotesModal({ show, onHide, title, text, date }) {
  return (
    <Modal show={show} onHide={onHide} size='lg' aria-labelledby='contained-modal-title-vcenter' centered contentClassName='bg-light'>
      <Modal.Header closeButton className='bg-light'>
        <Modal.Title id='contained-modal-title-vcenter' className='fs-5'>{date}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-light'>
        <h1 className='fs-2'>{title}</h1>
        <p>{text}</p>
      </Modal.Body>
      <Modal.Footer className='bg-light'>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NotesModal;