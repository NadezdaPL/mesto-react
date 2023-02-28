import React from "react";
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} name='avatar' title='Обновить аватар' buttonText='Сохранить'>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_type_avatar" name="avatar" type="url" 
          placeholder="Ссылка на картинку" required id="avatar" />
        <span id="avatar-error" className="popup__error popup__error_visible"></span>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;