import { useEffect, useContext, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onChanging }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="edit"
      title="Редактировать профиль"
      buttonText={onChanging ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <input
          className="popup__input popup__input_type_name"
          name="name"
          type="text"
          minLength="2"
          maxLength="40"
          required
          id="name"
          placeholder="Имя"
          onChange={handleChangeName}
        />
        <span
          id="name-error"
          className="popup__error popup__error_visible"
        ></span>
      </fieldset>
      <fieldset className="popup__fieldset">
        <input
          className="popup__input popup__input_type_job"
          name="about"
          type="text"
          minLength="2"
          maxLength="200"
          required
          id="about"
          placeholder="Вид деятельности"
          onChange={handleChangeDescription}
        />
        <span
          id="job-error"
          className="popup__error popup__error_visible"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
