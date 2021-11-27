import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit({
      name: name,
      link: link
    });
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName('');
      setLink('');
    }
  }, [props.isOpen]);

  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
      onClose={props.onClose}
      name={'add'}
      form={'placeData'}
      title={'Новое место'}
      buttonText={'Создать'}
      onSubmit={handleSubmit}
    >
      <input className="popup__input" id="place_name" name="name" type="text" placeholder="Название" minLength="2" maxLength="30" value={name} onChange={handleNameChange} required/>
      <span className="popup__input-error" id="place_name-error"/>
      <input className="popup__input" id="place_link" name="link" type="url" placeholder="Ссылка на картинку" value={link} onChange={handleLinkChange} required/>
      <span className="popup__input-error" id="place_link-error"/>
    </PopupWithForm>
  )
}

export default AddPlacePopup;