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
        <form className='formThought' onSubmit={handleSubmit}>
            <div>
                <h1>Passing Thoughts</h1>
                <button type='submit'>ADD</button>
                <span className='buttonSpan1'></span>
                <span className='buttonSpan2'></span>
            </div>
            <textarea
                aria-label="What's on your mind?"
                autoFocus
                placeholder="What's on your mind?"
                type='text'
                value={text}
                onChange={handleTextChange}
            />
        </form>
    );
};

export default FormThought;