import Cv from './CV';
import Foodstuff from './Foodstuff';
import LifeOfAnts from './LifeOfAnts';
import ApiWars from './ApiWars';
import Arkanoid from './Arkanoid';
import MemoryGame from './MemoryGame';
import FrontendChallenges from './FrontendChallenges';
import type { ReactElement } from 'react';

type Project = {
  key: string;
  title: string;
  date: string;
  description: string;
  stack: string[];
  img: string;
  alt: string;
  isLogo?: boolean;
  Content: () => ReactElement;
};

export const projects: Project[] = [
  {
    key: 'cv',
    title: 'CV',
    date: 'Aug 2020',
    description: 'Interactive resume site with animated sections.',
    stack: ['HTML', 'CSS', 'Angular'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/Web-CV/master/src/assets/Screenshot.png',
    alt: 'CV',
    Content: Cv,
  },
  {
    key: 'foodstuff',
    title: 'FoodStuff',
    date: 'Apr 2020',
    description: 'Recipe-sharing app with user accounts and search.',
    stack: ['Spring', 'Angular'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/ShoppingListDemo-UI/master/src/assets/screenshots/foodstuff1.png',
    alt: 'Foodstuff',
    Content: Foodstuff,
  },
  {
    key: 'lifeofants',
    title: 'Life of ants',
    date: 'Mar 2020',
    description: 'Desktop colony simulation exploring ant behaviour',
    stack: ['Java FX'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/LifeOfAnts/master/src/main/resources/Screenshot.png',
    alt: 'Life of ants',
    Content: LifeOfAnts,
  },
  {
    key: 'apiwars',
    title: 'API Wars',
    date: 'Oct 2019',
    description: 'Data table pulling from public APIs.',
    stack: ['Python', 'JavaScript', 'HTML', 'CSS'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/API-WARS/master/static/img/Screenshot.png',
    alt: 'API Wars',
    Content: ApiWars,
  },
  {
    key: 'arkanoid',
    title: 'Arkanoid',
    date: 'Oct 2019',
    description: 'A canvas-based Arkanoid clone with paddle physics and level progression.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/arkanoid/master/static/img/Screenshot.png',
    alt: 'Arkanoid',
    Content: Arkanoid,
  },
  {
    key: 'memorygame',
    title: 'Memory Game',
    date: 'Oct 2019',
    description: 'Classic card-matching game.',
    stack: ['JavaScript', 'Python'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/MemoryGame/master/MemoryGame.jpg',
    alt: 'Memory Game',
    Content: MemoryGame,
  },
  {
    key: 'frontend-challenges',
    title: 'Frontend Mentor Challenges',
    date: '2020',
    description:
      'A collection of Frontend Mentor challenge solutions — responsive layouts built pixel-precise from design specs',
    stack: ['JavaScript', 'SCSS', 'HTML'],
    img: 'https://www.frontendmentor.io/images/logo-desktop.svg',
    alt: 'Frontend Mentor logo',
    isLogo: true,
    Content: FrontendChallenges,
  },
];