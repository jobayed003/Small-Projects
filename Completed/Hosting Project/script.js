'use strict';

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const btnTo = document.querySelectorAll('.plan button');
const modalClickOut = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta');

const openModal = function () {
  backdrop.classList.add('open');
  modal.classList.add('open');
  backdrop.style.display = 'block';
};

btnTo.forEach(e => e.addEventListener('click', openModal));

const closeModal = () => {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  setTimeout(function () {
    backdrop.style.display = 'none';
  }, 200);
};

if (modalClickOut) {
  modalClickOut.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function () {
  // backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
  closeModal();
});

toggleButton.addEventListener('click', function () {
  mobileNav.classList.add('open');

  backdrop.style.display = 'block';
  setTimeout(function () {
    backdrop.classList.add('open');
  }, 10);
});

ctaButton.addEventListener('animationstart', function (event) {
  console.log('aniamtion started', event);
});

ctaButton.addEventListener('animationend', function (event) {
  console.log('aniamtion ended', event);
});

ctaButton.addEventListener('animationiteration', function (event) {
  console.log('aniamtion iterated', event);
});
