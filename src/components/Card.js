import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
      <div className="elements__container">
        <img className="elements__item" alt={card.name} src={card.link} onClick={handleClick} />
        <div className="elements__context">
          <h2 className="elements__title">{card.name}</h2>
          <div className="element__like">
            <button type="button" className="elements__button-like"></button>
            <span className="element__number">{card.likes.length}</span>
          </div>
          <button type="button" className="elements__button-delete"></button>
        </div>
      </div>
  );
};

export default Card;