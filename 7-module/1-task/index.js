import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
  }

  render() {
    this.elem = createElement(
      `<div class="ribbon">
                <button class="ribbon__arrow ribbon__arrow_left">
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
    const ribbinItems = this.elem.querySelectorAll('.ribbon__item');

    ribbonArrowRight.addEventListener(`click`,
      () => this.arrowRight(ribbonInner));
    ribbonArrowLeft.addEventListener(`click`,
      () => this.arrowLeft(ribbonInner));
    ribbonInner.addEventListener('scroll', () =>
      this.hideButtons(ribbonInner, ribbonArrowRight, ribbonArrowLeft));

    ribbinItems.forEach((item, index) => {
      item.addEventListener(`click`, () =>
        this.categoryProduct(index));
    });
  }

  arrowRight(ribbonInner) {
    ribbonInner.scrollBy(350, 0);
  }

  arrowLeft(ribbonInner) {
    ribbonInner.scrollBy(-350, 0);
  }

  hideButtons(ribbonInner, ribbonArrowRight, ribbonArrowLeft) {
    const scrollWidth = ribbonInner.scrollWidth;
    const scrollLeft = ribbonInner.scrollLeft;
    const clientWidth = ribbonInner.clientWidth;

    const scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (scrollLeft > 0) {
      ribbonArrowLeft.classList.add('ribbon__arrow_visible');
    } else {
      ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
    }

    if (scrollRight < 1) {
      ribbonArrowRight.classList.remove('ribbon__arrow_visible');
    } else {
      ribbonArrowRight.classList.add('ribbon__arrow_visible');
    }
  }

  categoryProduct(i) {
    const categoryProduct = new CustomEvent('ribbon-select', {
      detail: this.categories[i].id,
      bubbles: true,
    });

    this.elem.dispatchEvent(categoryProduct);
  }
}
