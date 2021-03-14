import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
  }

  render() {
    this.elem = createElement(
      `<div class="ribbon">
                <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
                    <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
                </button>

                <nav class="ribbon__inner">
                     ${this.categories.map((item) => `
                        <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
                     `).join('')}
                </nav>

                <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
                    <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
                </button>
            </div>`);

    const ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    const ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    const ribbonInner = this.elem.querySelector('.ribbon__inner');

    ribbonArrowRight.addEventListener(`click`,
      () => this.arrowRight(ribbonInner));
    ribbonArrowLeft.addEventListener(`click`,
      () => this.arrowLeft(ribbonInner));
  }

  arrowRight(ribbonInner) {
    ribbonInner.scrollBy(350, 0);
  }

  arrowLeft(ribbonInner) {
    ribbonInner.scrollBy(-350, 0);
  }

}
