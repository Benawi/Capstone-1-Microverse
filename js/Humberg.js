// Data for "Speakers" Section
const meskelsData = [
    {
      img: './img/posters/fight_club_poster.jpg',
      title: 'Fight Club',
      author: 'David Fincher - 1999',
      'meskel sinopsis':
        '"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more." — Imdb',
    },
    {
      img: './img/posters/old_boy_poster.jpg',
      title: 'Old Boy',
      author: 'Park Chan-Wook - 2003',
      'meskel sinopsis':
        '"After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days." — Imdb',
    },
    {
      img: './img/posters/eternal_sunshine_poster.jpg',
      title: 'Eternal Sunshine of the Spotless Mind',
      author: 'Michel Gondry - 2004',
      'meskel sinopsis':
        '"When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories." — Sarah McAuley',
    },
    {
      img: './img/posters/truman_show.jpg',
      title: 'The Truman Show',
      author: 'Peter Weir - 1998',
      'meskel sinopsis':
        '"An insurance salesman discovers his whole life is actually a reality TV show." — BCDavis',
    },
    {
      img: './img/posters/arrival_poster.jpg',
      title: 'Arrival',
      author: 'Denis Villeneuve - 2016',
      'meskel sinopsis':
        '"A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world." — Noah Orent',
    },
    {
      img: './img/posters/prometheus_poster.jpg',
      title: 'Prometheus',
      author: 'Ridley Scott - 2012',
      'meskel sinopsis':
        '"Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone." - Imdb',
    },
    {
        img: './img/posters/the_lobster.jpg',
        title: 'The Lobster',
        author: 'Yorgos Lanthimos - 2015',
        'meskel sinopsis':
          '"In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods. —Wikipedia and Brian McInnis',
      },
      {
        img: './img/posters/the_lobster.jpg',
        title: 'The Lobster',
        author: 'Yorgos Lanthimos - 2015',
        'meskel sinopsis':
          '"benan a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods. —Wikipedia and Brian McInnis',
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
        <h3 class="meskel-title default-family fc-darkgrey fs-18 mb-1">
          ${meskelsData[i - 1].title}
        </h3>
        <h4 class="meskel-author default-family fc-orange fs-14 mb-1">
          ${meskelsData[i - 1].author}
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
    h2Tag.innerText = 'Featured meskels';
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
  