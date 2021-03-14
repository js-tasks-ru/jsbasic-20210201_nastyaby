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
  }
}
