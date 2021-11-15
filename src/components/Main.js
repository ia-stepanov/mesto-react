import React, {useEffect} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userInfo, setUserInfo] = React.useState({})
  const [cards, setCards] = React.useState([])
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setUserInfo(profileInfo)
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])
  
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit" type="button" title="Обновить аватар" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userInfo.avatar} alt={userInfo.name}/>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userInfo.name}</h1>
          <button className="profile__btn-edit" type="button" title="Редактировать профиль" onClick={props.onEditProfile}/>
          <p className="profile__about">{userInfo.about}</p>
        </div>
        <button className="profile__btn-add" type="button" title="Добавить новую фотографию" onClick={props.onAddPlace}/>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, id) => (
            <Card
              key={id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;
