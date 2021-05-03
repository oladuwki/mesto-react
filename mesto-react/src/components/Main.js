
import React from "react";
import Card from './Card';
import {api} from '../utils/Api'; 

function Main(props) {
  const [userName, setUserName] = React.useState("");

    const [userDescription, setUserDescription] = React.useState("");
  
    const [userAvatar, setUserAvatar] = React.useState("");
  
    const [cards, setCards] = React.useState([]);

    React.useEffect( () => {
      Promise.all([
          api.getInitialCards(),
          api.getProfileInfo()
      ])
         .then((result ) => {
             const [cardData, userData] = result;
          setUserName(userData.name);
          setUserDescription(userData.about);
          setUserAvatar(userData.avatar);
          setCards(cardData);
         })
          .catch((err) => {
              console.log(err)
          })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" type = "button" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="Фото профиля" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type='button' className="profile__info-btn" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button type='button' className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">

      {cards.map((card) => (
                            <Card card={card} onCardClick={props.onCardClick} key={card._id} />
                        ))}
                        
      </section>
    </main>
  );
}

export default Main;
