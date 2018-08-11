import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }
 
  events() {
    //clicking the open modal button
    //As the openModal method is calling by a event handler we have to use bind method 
    this.openModalButton.click(this.openModal.bind(this));
    //clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    //push the ESC key
    $(document).keyup(this.keyPressHandler.bind(this));
  }
  
  keyPressHandler(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }
  
  openModal() {
    this.modal.addClass('modal--is-visible');
    //To prevent browser default behaviour of a link element
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible')
  }


}

export default Modal;