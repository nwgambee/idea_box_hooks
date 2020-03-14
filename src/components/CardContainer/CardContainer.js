import React from 'react';
import './CardContainer.css';
import IdeaCard from '../IdeaCard/IdeaCard';

const CardContainer = ({ideas, deleteIdea}) => {
  let allIdeaCards = ideas.map(idea => {
    return <IdeaCard idea={idea} deleteIdea={deleteIdea} />
  })

  return (
    <section>
      {allIdeaCards}
    </section>
  )
}

export default CardContainer;