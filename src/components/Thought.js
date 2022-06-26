import { useEffect } from 'react';

const Thought = props => {

    const { thought, removeThought } = props;

    useEffect(() => {
        const time = thought.expiresAt - Date.now();
        
        const timeoutID = setTimeout(() => {
            removeThought(thought.id);
        }, time);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [thought, removeThought]);

    const handleRemoveClick = () => {
        removeThought(thought.id);
    };

    return (
        <li className='thought'>
            <p className='text'>{thought.text}</p>
            <button
                aria-label='Remove thought'
                className='removeButton'
                onClick={handleRemoveClick}
            >&times;</button>
        </li>
    )
}

export default Thought;