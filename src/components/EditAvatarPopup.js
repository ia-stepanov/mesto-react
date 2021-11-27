import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const ref = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit({
      avatar_link: ref.current.value
    });
  }

  React.useEffect(() => {
    ref.current.value = '';
  }, [props.isOpen]);

  return(
    <PopupWithForm 
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
      onClose={props.onClose}
      name={'avatar'}
      form={'placeData'}
      title={'Обновить аватар'}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input ref={ref} className="popup__input" id="avatar_link" name="avatar_link" type="url" placeholder="Ссылка на аватар" required/>
      <span className="popup__input-error" id="avatar_link-error"/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;