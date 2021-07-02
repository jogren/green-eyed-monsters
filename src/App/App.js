import React, { useState } from 'react'; 
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]);

  return (
    <div className="App">
      <h1>{ideas[0].title}</h1>
    </div>
  );
}

export default App;
