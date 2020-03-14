import React, { useState } from 'react';
import './App.css';
import AddIdeaForm from '../AddIdeaForm/AddIdeaForm'
import CardContainer from '../CardContainer/CardContainer'

const App = () => {
  const [ideas, setIdea] = useState({ideas: []});

  const addIdea = () => {
    console.log('adding idea');
  }

  const deleteIdea = () => {
    console.log('deleting idea')
  }

  return (
    <main>
      <h1>IdeaBox... with Hooks!</h1>
      <AddIdeaForm addIdea={addIdea} />
      <CardContainer ideas={ideas.ideas} deleteIdea={deleteIdea} />
    </main>
  )
}

export default App;