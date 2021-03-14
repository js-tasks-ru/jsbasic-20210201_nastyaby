import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  _carousel = null;
  _carouselButtonNext = null;
  _carouselButtonPrev = null;
  _width = 0;

  constructor(slides) {
    this.slides = slides;

    this.render();
  }

  render() {
    this.elem = createElement(`
        <div class="carousel">
            <div class="carousel__arrow carousel__arrow_right">
                <img src="../../assets/images/icons/angle-icon.svg" alt="icon" />
            </div>
            <div class="carousel__arrow carousel__arrow_left">
                <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon" />
            </div>
            <div class="carousel__inner"></div>
        </div>
    `);

    const slides = this.slides.map(item => createElement(`
      <div class="carousel__slide" data-id="${item.id}">
        <img
          src="../../assets/images/carousel/${item.image}"
          class="carousel__img"
          alt="slide"
        />
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon" />
          </button>
        </div>
      </div>`));

    const carousel = this.elem.querySelector('.carousel__inner');

    slides.forEach((slide) => {
      carousel.appendChild(slide);
    });

    this._carousel = carousel;
    this._carouselButtonNext = this.elem.querySelector(`.carousel__arrow_right`);
    this._carouselButtonPrev = this.elem.querySelector(`.carousel__arrow_left`);
    const carouselButtonAdd = this.elem.querySelectorAll(`.carousel__button`);

    this.buttonsDisabling();

    this._carouselButtonNext.addEventListener(`click`, () =>
      this.nextSlide());
    this._carouselButtonPrev.addEventListener(`click`, () =>
      this.prevSlide());

    carouselButtonAdd.forEach((item, index) => {
      item.addEventListener(`click`, () =>
        this.onButtonAdd(index));
    });
  }

  buttonsDisabling() {
    if (this._width === 0) {
      this._carouselButtonPrev.style.display = 'none';
    } else if (this._width === (this._carousel.children.length - 1) *
      this._carousel.clientWidth) {
      this._carouselButtonNext.style.display = 'none';
    } else {
      this._carouselButtonPrev.style.display = 'flex';
      this._carouselButtonNext.style.display = 'flex';
    }
  }

  nextSlide() {
    this._width = this._width + this._carousel.clientWidth;
    this._carousel.style.transform = 'translateX(-' + this._width + 'px)';
    this.buttonsDisabling();

  }

  prevSlide() {
    this._width = this._width - this._carousel.clientWidth;
    this._carousel.style.transform = 'translateX(-' + this._width + 'px)';
    this.buttonsDisabling();
  }

  onButtonAdd(i) {
    const buttonAdd = new CustomEvent('product-add', {
      detail: this.slides[i].id,
      bubbles: true,
    });

    console.log(buttonAdd);
    this.elem.dispatchEvent(buttonAdd);
  }
}
