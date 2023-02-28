import React, { useEffect, useState } from "react";
import api from "../utils/api.js";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   Promise.all([api.getInfo(), api.getInitialCards()])
  //     .then((data) => {
  //       setUserName(data[0].name);
  //       setUserDescription(data[0].about);
  //       setUserAvatar(data[0].avatar);
  //       setCards(data[1]);
  //     })
  //     .catch((error) => {
  //       console.log(error);      
  //     });
  // }, []);

  useEffect(() => {
    Promise.all([api.getInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__edit-avatar">
          <img
            src={`${userAvatar}`}
            className="profile__avatar"
            alt="Фото Аватара"
          />
          <button
            type="button"
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements content__elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              link={card.link}
              name={card.name}
              onCardClick={onCardClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
