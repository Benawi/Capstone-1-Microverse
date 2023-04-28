// Main Program
const allPrograms = document.querySelectorAll("[id*='program-']");

// open-close menu popup;
const mobileMenuOpenBtn = document.getElementById('bars-menu');
const mobileMenuCloseBtn = document.getElementById('close-menu-btn');
const navSection = document.getElementById('nav-section');
const menuPopupSection = document.getElementById('menu-popup');
const allPopupItems = document.querySelectorAll('.popup-li-item');

function mediaResize() {
  if (window.innerWidth >= 992) {
    for (let i = 5; i < allPrograms.length; i += 1) {
      allPrograms[i].classList.toggle('d-none');
    }
  } else {
    for (let i = 5; i < allPrograms.length; i += 1) {
      if (allPrograms[i].classList.contains('d-none')) {
        allPrograms[i].classList.toggle('d-none');
      }
    }
  }
}

mediaResize();

// window Resize
window.addEventListener('resize', () => {
  mediaResize();
});

mobileMenuOpenBtn.addEventListener('click', () => {
  menuPopupSection.classList.toggle('d-none');
  navSection.classList.toggle('d-none');
  document.querySelector('html').style.overflowY = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', () => {
  menuPopupSection.classList.toggle('d-none');
  navSection.classList.toggle('d-none');
  document.querySelector('html').style.overflowY = 'auto';
});

allPopupItems.forEach((element) => {
  element.addEventListener('click', () => {
    menuPopupSection.classList.toggle('d-none');
    navSection.classList.toggle('d-none');
  });
});