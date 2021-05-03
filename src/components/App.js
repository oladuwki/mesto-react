import '../index.css';
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick}  
        onAddPlace={handleAddPlaceClick} 
        onCardClick={handleCardClick}
      />
      <PopupWithForm name="edit-avatar" title="Обновить аватар" submitText="Сохранить" isOpen={isEditAvatarPopupOpen && 'popup_opened'} onClose={closeAllPopups}>    
        <input type="url" id="input-avatar" className="popup__input popup__input_value-avatar_link" name="link" required placeholder="Ссылка на картинку" />
        <span className="popup__span input-avatar-error"></span>
      </PopupWithForm>

      <PopupWithForm name="edit-profile" title="Редактировать профиль" submitText="Сохранить" isOpen={isEditProfilePopupOpen && 'popup_opened'} onClose={closeAllPopups} >   
        <input type="text" id="input-name" className="popup__input popup__input_value_name" name="name" required minLength="2" maxLength="40" />
        <span className="popup__span input-name-error"></span>
        <input type="text" id="input-job" className="popup__input popup__input_value_job" name="job" required minLength="2" maxLength="200" />
        <span className="popup__span input-job-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add-cards" title="Новое место" submitText="Создать" isOpen={isAddPlacePopupOpen && 'popup_opened'} onClose={closeAllPopups}>
        <input type="text" id="input-place" className="popup__input popup__input_value_place" name="name" required minLength="2" maxLength="30" placeholder="Название" />
        <span className="popup__span input-place-error"></span>
        <input type="url" id="input-link" className="popup__input popup__input_value_link" name="link" required placeholder="Ссылка на картинку" />
        <span className="popup__span input-link-error"></span>      
      </PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard}/>

      <PopupWithForm name="remove-card" title="Вы уверены?" submitText="Да">
        <section className="popup popup_delete">
            <div className="popup__container" name="form-container">
            </div>
        </section>
      </PopupWithForm> 

      <Footer />
    </div>
  );
}

export default App;
