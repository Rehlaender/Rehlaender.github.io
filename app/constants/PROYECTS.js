import {KEYS} from './keys';

export const PROYECTS = [
  {
    id: 1,
    name: 'whalecoma',
    text: 'an emo band i made with berny and adrián',
    links: ['https://whalecoma.bandcamp.com/'],
    main_image: './assets/profile_whalecoma.jpg',
    type: KEYS.BAND,
  },
  {
    id: 2,
    name: 'perdidos en el mar',
    text: 'my personal project, hope this could be a full band tho',
    links: [''],
    main_image: './assets/profile_perdidos.jpg',
    type: KEYS.BAND,
  },
  {
    id: 3,
    name: 'basura que se cree poesía',
    text: 'a bummer poetry zine',
    links: [''],
    main_image: './assets/profile_basura.jpg',
    type: KEYS.BOOK
  },
  {
    id: 4,
    name: 'redux/thunk app',
    text: 'an example app using redux/thunk',
    main_image: './assets/profile_reactstuff.jpg',
    links: ['https://github.com/Rehlaender/react-portfolio', 'https://rehlaender.github.io/react-portfolio/'],
    type: KEYS.CODE
  },
  {
    id: 5,
    name: 'sassy-pokedex',
    text: 'just showing css animations and promises by consuming the pokemon api',
    main_image: './assets/profile_sassypokedex.jpg',
    links: ['https://github.com/Rehlaender/sassy-pokedex', 'https://rehlaender.github.io/sassy-pokedex/'],
    type: KEYS.CODE
  }
];