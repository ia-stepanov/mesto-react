import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return(
    <figure class="element">
      <img class="element__image" src={props.link} alt={props.name} title="Посмотреть в полном размере" onClick={handleClick}/>
      <button class="element__btn-trash" type="button" title="Удалить"/>
      <figcaption class="element__info">
        <h2 class="element__caption">{props.name}</h2>
        <div class="element__like-container">
          <button class="element__btn-like" type="button" title="Нравится"/>
          <p class="element__like-count">{props.likes}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;