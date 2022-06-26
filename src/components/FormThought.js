import { useState } from 'react';
import { expire, generateId } from '../utilities/utilities';

const FormThought = props => {

    const [text, setText] = useState('');

    const handleTextChange = e => {
        setText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (text.length) {
            const thought = {
                id: generateId(),
                text: text,
                expiresAt: expire()
            };

            props.addThought(thought);
            setText('');
        };
    };

    return (
        <form className="formThought" onSubmit={handleSubmit}>
            <input
                aria-label="What's on your mind?"
                autoFocus
                placeholder="What's on your mind?"
                type="text"
                value={text}
                onChange={handleTextChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormThought;