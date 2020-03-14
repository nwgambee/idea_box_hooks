import React, { useState } from 'react';
import './AddIdeaForm.css'

const AddIdeaForm = ({addIdea}) => {
  const [idea, setIdea] = useState({title: '', body: '', id: Date.now()});

  const handleChange = e => {
    setIdea({...idea, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    addIdea(idea)
    setIdea({title: '', body: '', id: Date.now()})
  }

  return (
    <form>
      <input 
        name='title'
        placeholder='Title'
        value={idea.title}
        onChange={handleChange} 
      />
       <input 
        name='body'
        placeholder='Body'
        value={idea.body}
        onChange={handleChange} 
      />
      <button onClick={handleSubmit}>Add New Idea</button>
    </form>
  )
}

export default AddIdeaForm;