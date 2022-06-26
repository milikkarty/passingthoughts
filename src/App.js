import { useState } from 'react';

import Header from './components/Header';
import FormThought from './components/FormThought';
import Thought from './components/Thought';

import { generateId, expire } from './utilities/utilities';

function App() {

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: expire()
    },
    {
      id: generateId(),
      text: 'They\'ll be removed after 15 seconds.',
      expiresAt: expire()
    }
  ]);

  const addThought = thought => {
    setThoughts(thoughts => [
      thought,
      ...thoughts
    ]);
  };

  const removeThought = thoughtIdToRemove => {
    setThoughts(thoughts =>
      thoughts.filter(thought => thought.id !== thoughtIdToRemove)  
    );
  };

  return (
    <div className="App">
      <Header />
      <main>
        <FormThought addThought={addThought} />
        <ul className='thoughts'>
          {thoughts.map(thought => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
