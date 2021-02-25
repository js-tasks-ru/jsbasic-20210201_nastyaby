function initCarousel() {

  const buttonNextSlide = document.querySelector(`.carousel__arrow_right`);
  const buttonPastSlide = document.querySelector(`.carousel__arrow_left`);
  const carousel = document.querySelector(`.carousel__inner`);

  const carouselWidth = carousel.clientWidth;
  let width = 0;

  const buttonsDisabling = (width) => {
    if (width === 0) {
      buttonPastSlide.style.display = 'none';
    } else if (width === (carousel.children.length - 1) * carouselWidth) {
      buttonNextSlide.style.display = 'none';
    } else {
      buttonPastSlide.style.display = 'flex';
      buttonNextSlide.style.display = 'flex';
    }
  };

  const nextSlide = () => {

    width = width + carouselWidth;
    carousel.style.transform = 'translateX(-' + width + 'px)';
    buttonsDisabling(width);
    return width;
  };

  const pastSlide = () => {

    width = width - carouselWidth;
    carousel.style.transform = 'translateX(-' + width + 'px)';
    buttonsDisabling(width);
    return width;
  };

  buttonsDisabling(width);
  buttonNextSlide.addEventListener(`click`, nextSlide);
  buttonPastSlide.addEventListener(`click`, pastSlide);

}
