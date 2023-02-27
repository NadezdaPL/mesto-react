import React from "react";

function PopupWithForm(props) {
  return (
    <section className={`popup popup__${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}`} noValidate>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;