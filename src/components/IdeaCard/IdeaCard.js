import React from 'react';

const IdeaCard = ({idea, deleteIdea}) => {
  const removeButtonClick = () => {
    deleteIdea(idea.id)
  }

  return (
    <div>
      <h2>{idea.title}</h2>
      <p>{idea.body}</p>
      <button onClick={removeButtonClick} >Delete Idea</button>
    </div>
  )
}

export default IdeaCard;