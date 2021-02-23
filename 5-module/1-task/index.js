function hideSelf() {

  const addHidden = () => {
    button.setAttribute('hidden', true);
  };

  const button = document.querySelector(`.hide-self-button`);
  button.addEventListener('click', addHidden);
}
