import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.body = document.querySelector('body');
    this.render();
  }

  render() {
    this.elem = createElement(
      `<div class="modal">
                <div class="modal__overlay"></div>
                <div class="modal__inner">
                    <div class="modal__header">
                        <button type="button" class="modal__close">
                            <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
                        </button>
                        <h3 class="modal__title"></h3>
                    </div>
                    <div class="modal__body"></div>
                </div>
            </div>`);
  }

  open() {
    this.body.classList.add('is-modal-open');
    this.body.append(this.elem);
    this.body.querySelector('.modal__close').onclick = () => this.close();
    document.onkeydown = (evt) => {
      if (evt.code === 'Escape') {
        this.close();
      }
    };
  }

  setTitle(modalTitle) {
    this.elem.querySelector('.modal__title').textContent = modalTitle;
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').append(node);
  }

  close() {
    this.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}
