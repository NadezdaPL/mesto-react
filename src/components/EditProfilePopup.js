import React from "react";
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name='edit' title='Редактировать профиль'>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_type_name" name="name" type="text" 
          minLength="2" maxLength="40" required id="name" placeholder="Имя" />
        <span id="name-error" className="popup__error popup__error_visible"></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_type_job" name="job" type="text" 
          minLength="2" maxLength="200" required id="job" placeholder="Вид деятельности" />
        <span id="job-error" className="popup__error popup__error_visible"></span>
      </fieldset>
      <button type="submit" className="popup__button">Сохранить</button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;