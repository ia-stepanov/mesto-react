function PopupWithForm(props) {
  return (
    <div className={`popup popup_form_${props.name} ${props.isOpen ? `popup_opened`: ""}`}>
      <div className="popup__container">
        <form className="popup__form" name={props.form}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__btn-save" type="submit" title="Сохранить">{props.buttonText}</button>
        </form>
        <button className="popup__btn-close" type="button" title="Закрыть" onClick={props.onClose}/>
      </div>
    </div>
  )
}

export default PopupWithForm;