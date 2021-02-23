function toggleText() {

  const button = document.querySelector(`.toggle-text-button`);
  const text = document.querySelector(`#text`);

  const hidden = () => {
    const atributHidden = text.getAttribute(`hidden`);

    if (atributHidden === 'true') {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', true);
    }
  };

  button.addEventListener('click', hidden);
}
