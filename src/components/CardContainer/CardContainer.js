import React from 'react';
import './CardContainer.css';
import IdeaCard from '../IdeaCard/IdeaCard';

const CardContainer = (ideas) => {
  let allIdeaCards = ideas.map(idea => {
    return <IdeaCard idea={idea} />
  })

  return (
    <section>
      {allIdeaCards}
    </section>
  )
}

export default CardContainer;