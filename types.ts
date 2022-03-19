import { IconType } from 'react-icons';

export interface Service {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Skill {
  name: string;
  level: string;
  Icon: IconType;
}
