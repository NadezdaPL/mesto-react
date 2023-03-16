import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, onChanging }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      title,
      link,
    });
  }

  useEffect(() => {
    setTitle("");
    setLink("");
  }, []);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      name="add"
      title="Новое место"
      buttonText={onChanging ? "Создание..." : "Создать"}
    >
      <fieldset className="popup__fieldset">
        <input
          className="popup__input popup__input_type_nickname"
          onChange={handleChangeTitle}
          name="title"
          type="text"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          id="nickname"
        />
        <span
          id="nickname-error"
          className="popup__error popup__error_visible"
        ></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <input
          className="popup__input popup__input_type_link"
          onChange={handleChangeLink}
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          id="link"
        />
        <span
          id="link-error"
          className="popup__error popup__error_visible"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
