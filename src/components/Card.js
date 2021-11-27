import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `element__btn-trash ${isOwn ? 'element__btn-trash_visible' : ''}`
  );

  const cardLikeButtonClassName = (
    `element__btn-like ${isLiked ? 'element__btn-like_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return(
    <figure className="element">
      <img className="element__image" src={props.link} alt={props.name} title="Посмотреть в полном размере" onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} type="button" title="Удалить" onClick={handleDeleteClick}/>
      <figcaption className="element__info">
        <h2 className="element__caption">{props.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" title="Нравится" onClick={handleLikeClick}/>
          <p className="element__like-count">{props.likes}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;