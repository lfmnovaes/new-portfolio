import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
import { Project, Service, Skill } from './types';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a nice and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'I can handle with <b>PostgreSQL</b>, <b>Ruby on Rails</b>, and other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust REST API using <b>Ruby on Rails</b> & <b>Next.JS</b>',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'Solved many challenges at <b>HackerRank</b> and <b>Codewars</b>',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'Learner',
    about: 'Daily technology article reader',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '30',
  },
  {
    Icon: BsCircleFill,
    name: 'Ruby on Rails',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Ruby',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'TailwindCSS',
    level: '55',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'PostgreSQL',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Shellscript',
    level: '35',
  },
  {
    Icon: BsCircleFill,
    name: 'Git',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Heroku',
    level: '35',
  },
];

export const my_projects: Project[] = [
  {
    id: 1,
    name: 'NextJS Pokedex',
    description:
      'A simple NextJS pokedex project using the Static Site Generation feature',
    image_path:
      'https://raw.githubusercontent.com/lfmnovaes/nextjs-pokedex/dev/preview.png',
    deployed_url: 'https://nextjs-pokedex-lfmn.vercel.app',
    github_url: 'https://github.com/lfmnovaes/nextjs-pokedex',
    category: ['nextjs'],
    techs: ['nextjs', 'react', 'javascript'],
  },
  {
    id: 2,
    name: 'Recipe App',
    description:
      'In this app you can organize your list of foods, recipes, and can create the related shopping list',
    image_path: 'https://raw.githubusercontent.com/lfmnovaes/recipe-app/dev/preview.png',
    deployed_url: 'https://recipe-app-lfmn.herokuapp.com',
    github_url: 'https://github.com/lfmnovaes/recipe-app',
    category: ['ruby on rails'],
    techs: ['ruby on rails', 'javascript'],
  },
  {
    id: 3,
    name: 'Popular Crypto Currencies',
    description:
      'Web app showing a list of some popular crypto currencies, with their current prices and past fluctuations',
    image_path: 'https://raw.githubusercontent.com/lfmnovaes/react-capstone/dev/preview.png',
    deployed_url: 'https://react-capstone-lfmn.herokuapp.com',
    github_url: 'https://github.com/lfmnovaes/react-capstone',
    category: ['react'],
    techs: ['react', 'javascript', 'react-redux', 'react-bootstrap', 'jestjs'],
  },
  {
    id: 4,
    name: 'Car Rental FrontEnd',
    description:
      'FrontEnd part of the Car Rental project, to make it easier to add/delete reservations and show available cars and cities. Data from the BackEnd RoR API project.',
    image_path:
      'https://raw.githubusercontent.com/lfmnovaes/car-rental-front-end/dev/preview.png',
    deployed_url: 'https://car-rental-frontend-lfmn.netlify.app',
    github_url: 'https://github.com/lfmnovaes/car-rental-front-end',
    category: ['react'],
    techs: ['react', 'javascript', 'tailwindcss'],
  },
  {
    id: 5,
    name: 'Car Rental BackEnd',
    description:
      'BackEnd part of the Car Rental project, to make it easier to add/delete reservations and show available cars and cities. Data from the BackEnd RoR API project.',
    image_path:
      'https://raw.githubusercontent.com/lfmnovaes/car-rental-back-end/dev/preview.png',
    deployed_url: 'https://final-capstone-project-lfmn.herokuapp.com/api/cars',
    github_url: 'https://github.com/lfmnovaes/car-rental-back-end',
    category: ['ruby on rails'],
    techs: ['ruby on rails', 'ruby'],
  },
  {
    id: 6,
    name: 'Popular TV Shows',
    description:
      'Web app that fetches data from TVmaze API of some popular TV Shows and connects to an Involvement API to register comments and likes.',
    image_path:
      'https://raw.githubusercontent.com/lfmnovaes/javascript-capstone-project/dev/preview.png',
    deployed_url: 'https://lfmnovaes.github.io/javascript-capstone-project',
    github_url: 'https://github.com/lfmnovaes/javascript-capstone-project',
    category: ['JS'],
    techs: ['javascript', 'bootstrap'],
  },
  {
    id: 7,
    name: 'To Do List',
    description:
      `To-Do Task List Project which can add/edit/remove (one or multiple) tasks with the browser's local storage interaction.`,
    image_path:
      'https://raw.githubusercontent.com/lfmnovaes/todo-list/main/preview.png',
    deployed_url: 'https://github.com/lfmnovaes/todo-list',
    github_url: 'https://lfmnovaes.github.io/todo-list',
    category: ['JS'],
    techs: ['javascript', 'CSS'],
  },
];
