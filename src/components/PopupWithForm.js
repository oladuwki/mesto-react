import React from "react";

export default function PopupWithForm(props) {
    return (
      <section className="popups">
        <div className={`popup popup_${props.name} ${props.isOpen}`}>
        <div className="popup__container" id="container1">
          <button type='button' className="popup__close-button" onClick={props.onClose}></button>
          <form className="popup__form" name={props.name}>
            <h2 className="popup__title">{props.title}</h2>
              {props.children}
            <button type="submit" className="popup__button">{props.submitText}</button>
          </form>
        </div>
        </div>
    </section>
    )
}