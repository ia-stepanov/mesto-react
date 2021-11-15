import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return(
    <figure className="element">
      <img className="element__image" src={props.link} alt={props.name} title="Посмотреть в полном размере" onClick={handleClick}/>
      <button className="element__btn-trash" type="button" title="Удалить"/>
      <figcaption className="element__info">
        <h2 className="element__caption">{props.name}</h2>
        <div className="element__like-container">
          <button className="element__btn-like" type="button" title="Нравится"/>
          <p className="element__like-count">{props.likes}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;