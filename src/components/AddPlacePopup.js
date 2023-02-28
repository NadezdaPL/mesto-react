import React from "react";
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name='add' title='Новое место' buttonText='Создать'>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_type_nickname" name="title" type="text" 
          placeholder="Название" required minLength="2" maxLength="30" id="nickname" />
        <span id="nickname-error" className="popup__error popup__error_visible"></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_type_link" name="link" type="url" 
          placeholder="Ссылка на картинку" required id="link" />
        <span id="link-error" className="popup__error popup__error_visible"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup;