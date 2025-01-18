const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal__btn--open');
const modalBtnClose = document.querySelector('.modal__btn--close');
const modalBtnHeroSectionOpen = document.querySelector(
  '.modal__btn-hero-section--open',
);

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnHeroSectionOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
