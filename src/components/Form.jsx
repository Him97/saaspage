import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NotesForm({ addNote }) {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [buttonVariant, setButtonVariant] = useState('danger');
    const [buttonContent, setButtonContent] = useState('Write something');
    const [buttonState, setButtonState] = useState(true);
    const textRef = React.useRef();

    const buttonEnabled = () => {
        setButtonVariant('primary');
        setButtonContent('Add note');
        setButtonState(false);
    }

    const buttonDisabled = () => {
        setButtonVariant('danger');
        setButtonContent('Write something');
        setButtonState(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(noteTitle, noteText);
        setNoteTitle('');
        setNoteText('');
        buttonDisabled();
    }

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value)
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        setNoteText(text);

        if (text.trim() === '') {
            buttonDisabled();
        } else {
            buttonEnabled();
        }
    };

    React.useEffect(() => {
        if (textRef && textRef.current) {
            textRef.current.style.height = '0px';
            const taHeight = textRef.current.scrollHeight;
            textRef.current.style.height = taHeight + 'px';
        }
    }, [noteText]);

    return (
        <Form className='p-3 w-100 bg-light rounded' onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='noteTitle'>
                <Form.Control
                    type='text'
                    name='noteTitle'
                    className='bg-light'
                    placeholder='Your title (optional)'
                    value={noteTitle}
                    onChange={handleTitleChange}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='noteText'>
                <Form.Control
                    as='textarea'
                    rows={2}
                    ref={textRef}
                    style={{ resize: 'none' }}
                    name='noteText'
                    className='bg-light'
                    placeholder='Your note...'
                    value={noteText}
                    onChange={handleTextChange}
                />
            </Form.Group>
            <Button
                variant={buttonVariant}
                type='submit'
                className='w-25'
                disabled={buttonState}>{buttonContent}</Button>
        </Form>
    )
}

export default NotesForm;