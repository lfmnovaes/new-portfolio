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
    about: 'Solved many problems at <b>HackerRank</b> and <b>Codewars</b>',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'Whatever',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '50',
  },
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '35',
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
    level: '60',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'PostgreSQL',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Something else',
    level: '40',
  },
];

export const my_projects: Project[] = [
  {
    id: 1,
    name: 'Recipe App',
    description:
      'In this app you can organize your list of foods, recipes, and can create the related shopping list',
    image_path: '/images/recipe-app.png',
    deployed_url: 'https://recipe-app-lfmn.herokuapp.com/',
    github_url: 'https://github.com/lfmnovaes/recipe-app',
    category: ['ruby on rails'],
    techs: ['ruby on rails', 'javascript'],
  },
  {
    id: 2,
    name: 'Popular Crypto Currencies',
    description:
      'Web app showing a list of some popular crypto currencies, with their current prices and past fluctuations',
    image_path: '/images/crypto-app.png',
    deployed_url: 'https://react-capstone-lfmn.herokuapp.com/',
    github_url: 'https://github.com/lfmnovaes/react-capstone',
    category: ['react'],
    techs: ['react', 'javascript', 'react-redux', 'react-bootstrap', 'jestjs'],
  },
];
