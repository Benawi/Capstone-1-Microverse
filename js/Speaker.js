const speakerData=[
    {
        img: './img/posters/.jpg',
        title: 'Fight Club',
        author: 'David Fincher - 1999',
        'film sinopsis':
          '"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more." — Imdb',
      },
]
const mainSection = document.getElementById('main-section');
// speaker container
const speakersList = document.createElement('ul');
speakersList.className = 'speakerslist';
speakers.appendChild(speakersList);

speakerdata.forEach((speaker) => {
    // speaker card
    const li = document.createElement('li');
    li.className = 'speaker';
    speakersList.appendChild(li);
  
    const speakerImage = document.createElement('div');
    speakerImage.className = 'speakerimg';
    speakerImage.innerHTML = `<img title='speaker' src=${speaker.image} alt="Featured speaker">`;
    li.appendChild(speakerImage);
  
    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'speakerinfo';
    li.appendChild(speakerInfo);
  
    const speakerName = document.createElement('h3');
    speakerName.className = 'speakername';
    speakerName.innerHTML = speaker.name;
    speakerInfo.appendChild(speakerName);
  
    const speakerTitle = document.createElement('p');
    speakerTitle.className = 'speakertitle';
    speakerTitle.innerHTML = speaker.title;
    speakerInfo.appendChild(speakerTitle);
  
    const speakerDesc = document.createElement('p');
    speakerDesc.className = 'speakerdesc';
    speakerDesc.innerHTML = speaker.desc;
    speakerInfo.appendChild(speakerDesc);
  });
  
  const morespeakers = document.createElement('button');
  morespeakers.className = 'morebtn';
  morespeakers.type = 'button';
  morespeakers.innerHTML = 'MORE <i class="chevron down icon"></i>';
  speakers.appendChild(morespeakers);
  
  const speakerCards = Array.from(document.querySelectorAll('.speaker'));
  
  speakerCards.forEach((card, index) => {
    if (index > 1) {
      card.classList.add('hide');
    }
  });