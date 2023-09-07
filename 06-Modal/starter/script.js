'use strict';

const modalBtns = document.querySelectorAll(`.show-modal`);
const hidden = document.querySelector(`.hidden`);
const modal = document.querySelector(`.modal`);
const closeBtn = document.querySelector(`.close-modal`);
const overlay = document.querySelector(`.overlay`);

const modalOpen = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  // or
  // modal.style.display = `block`;
  // overlay.style.display = `block`;
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
  // or
  // modal.style.display = `none`;
  // overlay.style.display = `none`;
};

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener(`click`, modalOpen);
}

closeBtn.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  // e is just an object which contains all info about keydown and we use it as a parameter on the event handler to access it.
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    // key is just an object which contains all the keyborad types from the e(keydown this time) object info.
    // inaddition to add and remove we use cantains to check if a class is contained or not.
    closeModal();
  }
});
