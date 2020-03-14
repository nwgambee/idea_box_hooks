import React, { useState } from 'react';
import './App.css';
import AddIdeaForm from '../AddIdeaForm/AddIdeaForm'
import CardContainer from '../CardContainer/CardContainer'

const App = () => {
  const [ideas, addIdea] = useState({ideas: []});

  return (
    <main>
      <h1>IdeaBox... with Hooks!</h1>
      {/* <AddIdeaForm /> */}
      <CardContainer ideas={ideas.ideas} />
    </main>
  )
}

export default App;