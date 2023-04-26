// Data for "Speakers" Section

const meskelsData = [
  {
    img: '../Resource/Images/posters/benaw.jpg',
    name: 'Habtamu Alemayehu',
    Postion: 'Software Developer - 2023',
    'meskel sinopsis':
        '"The meskel celebration in Gurage may have a span of 14days depending on the area. " ',
  },
  {
    img: '../Resource/Images/posters/benaw.jpg',
    name: 'Habtamu Alemayehu',
    Postion: 'Software Developer - 2023',
    'meskel sinopsis':
        '"During the slaughter ceremony the ox should fall on the right side or is flipped the other way around. " ',
  },
  {
    img: '../Resource/Images/posters/benaw.jpg',
    name: 'Habtamu Alemayehu',
    Postion: 'Software Developer - 2023',
    'meskel sinopsis':
        '"This is the day that the whole of Ethiopia celebrates meskel. On this day you might see people with crosses made of ashes" ',
  },
  {
    img: '../Resource/Images/posters/benaw.jpg',
    name: 'Habtamu Alemayehu',
    Postion: 'Software Developer - 2023',
    'meskel sinopsis':
        '"Meskel in Gurage is not only limited within the reigon but also the whole of Ethiopia."',
  },
  {
    img: '../Resource/Images/posters/benaw.jpg',
    name: 'Habtamu Alemayehu',
    Postion: 'Software Developer - 2023',
    'meskel sinopsis':
        '"The foods are not sereved on plates as we assume but is eaten on a leaf cut into shapes and is eaten with a spoon made of an ox’s horn."',
  },
  {
    img: '../Resource/Images/posters/benaw.jpg',
    name: 'Habtamu Alemayehu',
    Postion: 'Software Developer - 2023',
    'meskel sinopsis':
        '"The foods are not sereved on plates as we assume but is eaten on a leaf cut into shapes and is eaten with a spoon made of an ox’s horn."',
  },

];

const mainSection = document.getElementById('main-section');

function generatemeskels(meskelContainer) {
  for (let i = 1; i <= meskelsData.length; i += 1) {
    meskelContainer.innerHTML += `<div id="meskel-container-${i})" class="meskel-container d-flex mb-2">
      <img
        id="poster-${i}"
        class="poster"
        src="${meskelsData[i - 1].img}"
        alt=""
      />
      <div
        id="meskel-txt-container-${i}"
        class="meskel-text-container d-flex d-column d-justify-between"
      >
        <h3 class="meskel-name default-family fc-darkgrey fs-18 mb-1">
          ${meskelsData[i - 1].name}
        </h3>
        <h4 class="meskel-Postion default-family fc-orange fs-14 mb-1">
          ${meskelsData[i - 1].Postion}
        </h4>
        <span class="secundary-bdb mb-1"></span>
        <h4 class="meskel-p default-family fc-darkgrey fs-12 fw-300 mb-1">
          ${meskelsData[i - 1]['meskel sinopsis']}
        </h4>
      </div>
    </div>`;
  }
}

function createmeskelSection() {
  const newmeskelSection = document.createElement('section');
  newmeskelSection.setAttribute('class', 'main-meskels');
  newmeskelSection.id = 'main-meskels';

  const meskelsContainer = document.createElement('div');
  meskelsContainer.setAttribute(
    'class',
    'meskels-container d-flex d-column d-align-center desk-w',
  );
  meskelsContainer.id = 'meskels-container';
  const h2Tag = document.createElement('h2');
  h2Tag.setAttribute('class', 'default-family fc-darkgrey fw-900 fs-24');
  h2Tag.innerText = 'Featured Speakers';
  const spanTag = document.createElement('span');
  spanTag.setAttribute('class', 'primary-bdb mt-1 mb-2');
  const newmeskelsContainer = document.createElement('div');
  newmeskelsContainer.setAttribute(
    'class',
    'meskel-div-container d-wrap d-flex d-column d-align-center',
  );
  newmeskelsContainer.id = 'meskel-container';

  generatemeskels(newmeskelsContainer);

  meskelsContainer.appendChild(h2Tag);
  meskelsContainer.appendChild(spanTag);
  meskelsContainer.appendChild(newmeskelsContainer);

  newmeskelSection.appendChild(meskelsContainer);

  mainSection.appendChild(newmeskelSection);
}

createmeskelSection();

// Main Program
const allPrograms = document.querySelectorAll("[id*='program-']");
const allmeskels = document.querySelectorAll("[id*='meskel-container-']");

// open-close menu popup;
const mobileMenuOpenBtn = document.getElementById('bars-menu');
const mobileMenuCloseBtn = document.getElementById('close-menu-btn');
const navSection = document.getElementById('nav-section');
const menuPopupSection = document.getElementById('menu-popup');
const allPopupItems = document.querySelectorAll('.popup-li-item');

// see more mob
const seeMoreDiv = document.getElementById('see-more-mob');
const seeMoreHeader = document.getElementById('see-more-txt');

// see more desk
const seeMoreDeskHeader = document.getElementById('see-more-desk');

function mediaResize() {
  if (window.innerWidth >= 992) {
    for (let i = 6; i < allPrograms.length; i += 1) {
      if (!allPrograms[i].className.includes('d-none')) {
        allPrograms[i].classList.toggle('d-none');
      }
    }
    for (let i = 2; i < allmeskels.length; i += 1) {
      if (allmeskels[i].className.includes('d-none')) {
        allmeskels[i].classList.toggle('d-none');
      }
    }
  } else {
    for (let i = 5; i < allPrograms.length; i += 1) {
      if (allPrograms[i].className.includes('d-none')) {
        allPrograms[i].classList.toggle('d-none');
      }
    }
    for (let i = 2; i < allmeskels.length; i += 1) {
      if (!allmeskels[i].className.includes('d-none')) {
        allmeskels[i].classList.toggle('d-none');
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

seeMoreDiv.addEventListener('click', () => {
  document.getElementById('chevron-up').classList.toggle('d-none');
  document.getElementById('chevron-down').classList.toggle('d-none');

  if (seeMoreHeader.innerText === 'See More') {
    seeMoreHeader.innerText = 'See Less';
  } else {
    seeMoreHeader.innerText = 'See More';
  }

  for (let i = 2; i < allmeskels.length; i += 1) {
    allmeskels[i].classList.toggle('d-none');
  }
});

seeMoreDeskHeader.addEventListener('click', () => {
  for (let i = 5; i < allPrograms.length; i += 1) {
    allPrograms[i].classList.toggle('d-none');
  }

  if (seeMoreDeskHeader.innerText === 'See Less') {
    seeMoreDeskHeader.innerText = 'See The Whole Program';
  } else {
    seeMoreDeskHeader.innerText = 'See Less';
  }
});
