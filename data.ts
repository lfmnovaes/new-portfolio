import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import Service from './types';

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
