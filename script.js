// hamburger menu to click and onclick dropdown menu items.

const hamburgers = document.querySelector('.hamburger');
const navItem = document.querySelector('.nav-item');

hamburgers.addEventListener('click', () => {
  hamburgers.classList.toggle('active');
  navItem.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgers.classList.remove('active');
  navItem.classList.remove('active');
}));

// fature speakers section.
const speakers = [
  {
    name: 'Yochai Benkler',
    img: './images/speaker_01.png',
    title: 'Berkman Professor of Entrepreneurial Legal Studies, Harvard Law School',
    description: 'Benkler studies commons-based peer production, the Internet, and the law. He is the author of The Wealth of Networks: How Social Production Transforms Markets and Freedom (Yale University Press, 2006).',
  },
  {
    name: 'SohYeong Noh',
    img: './images/speaker_02.png',
    title:
          'Director of Art Center Nabi, Seoul, Korea and Board Member of Creative Commons Korea',
    description:
          'As the main venue for new media art production in Korea, Nabi promotes cross-discliplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    name: 'Ryan Merkley',
    img: './images/speaker_03.png',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
          'Ryan had been leading open source and open data projects for over 15 years. He is the co-founder of the Open Source Initiative, the Open Source Hardware Association, and the Open Data Institute.',
  },
  {
    name: 'Lila Tretikov',
    img: './images/speaker_04.png',
    title:
      'Executive Director of Creative Commons, Former Executive Director of the Wikimedia Foundation',
    description:
      'Lila Tretikov is the Executive Director of Creative Commons, a nonprofit organization that enables the sharing and use of creativity and knowledge through free legal tools. She is also a member of the Board of Directors of the Open Technology Institute at New America.',
  },
  {
    name: 'Julia Leda',
    img: './images/speaker_05.png',
    title:
          'President of Young Pirates of Europe, Member of the European Parliament',
    description:
          'European ingetration, political democracy, and participation of youth through online as her major condemn, Redia’s report outlines the need for a new European political culture, based on the principles of openness, transparency, and participation.',
  },
  {
    name: 'Kilnam Chon',
    img: './images/speaker_06.png',
    title: 'Data science. Data visualization ; Python. Tim Cook. UX design ; Arduino. Cloud platforms. Raspberry Pi ; Clubhouse. Linux. Web development',
    description:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society’s Internet Hall of Fame. He is currently the CEO of the Internet Society.',
  },
];
// script to make tags and display
const show = document.getElementById('speakersGrid');
speakers.forEach((speaker) => {
  show.innerHTML += `
 <div class="mesir speadiv">
      <div class="">
        <div class="">
          <img class="imgjs" src="${speaker.img}" 
            alt="${speaker.name}"
          />
        </div>
      </div>
      <div class="speaker-tittleDiv">
        <span class="speakername">
          ${speaker.name}
        </span>
        <p class="speakertittle">
          ${speaker.title}
        </p>
        <div class=""></div>
        <p class="speakerdescr">
          ${speaker.description}
        </p>
      </div>
    </div>`;
});

// see more btn
const span = document.createElement('button');
span.className = 'load';
span.innerHTML = 'More';
show.appendChild(span);

// see more funtion
const elementList = document.querySelectorAll('.mesir');
const loading = document.querySelector('.load');
let curent = 2;
loading.addEventListener('click', (e) => {
  for (let i = curent; i < curent + 2; i += 1) {
    if (elementList[i]) {
      elementList[i].style.display = 'block';
    }
  }
  curent += 2;
  if (curent >= elementList.length) {
    e.target.style.display = 'none';
  }
});
