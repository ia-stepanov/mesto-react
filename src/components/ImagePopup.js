function ImagePopup(props) {
  return (
    <div className={`popup popup_viewer" ${props.card ? 'popup_opened' : ''}`} onClick={props.onCloseClick}>
      <div className="popup__content">
        <img className="popup__image" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''}/>
        <h2 className="popup__description">{props.card ? props.card.name : ''}</h2>
        <button className="popup__btn-close" type="button" title="Закрыть" onClick={props.onClose}/>
      </div>
    </div>
  )
}

export default ImagePopup;