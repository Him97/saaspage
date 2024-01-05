import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Stack from 'react-bootstrap/Stack';
import { ReactComponent as DeleteButton } from '../img/icons8-delete-button.svg';


function Notes({ notes, deleteNote, clickNote }) {

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete your note?');
        if (confirmDelete) {
            deleteNote(index);
        }
    };

    return (
        <CardGroup className='notes-grid w-100 rounded'>
            {notes.map((note, index) => {
                const titleVisibility = note.title.trim() === '' ? 'none' : 'flex';

                return (
                    <Card
                        key={index}
                        style={{ width: 'auto' }}
                        className='bg-light rounded'>
                        <Card.Body>
                            <Stack
                                direction='horizontal'
                                className='d-flex justify-content-around p-2'>
                                <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
                                <DeleteButton
                                    onClick={() => handleDelete(index)}
                                    fill='currentColor'
                                    as='input'
                                    type='button' />
                            </Stack>
                            <Stack
                                gap={1}
                                role='button'
                                onClick={() => clickNote(note.title, note.text, note.date)}>
                                <Card.Title
                                    className='bg-light rounded p-2'
                                    style={{ display: titleVisibility, justifyContent: 'center' }}>
                                    {note.title}</Card.Title>
                                <Card.Text className='bg-light rounded p-2'>{note.text}</Card.Text>
                            </Stack>
                        </Card.Body>
                    </Card>
                );
            })}
        </CardGroup>
    );
}

export default Notes;