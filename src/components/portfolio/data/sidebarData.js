import { MdWork } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { GiAmericanFootballPlayer } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import contact from '../../../assets/contact.jpg';
import swimmer from '../../../assets/swimmer.jpg';
import footballer from '../../../assets/football.jpg';

const sidebarNav = [
  {
    id: 1,
    title: 'Projects',
    icon: <MdWork />,
  },
  {
    id: 2,
    title: 'Tool Box',
    icon: <FaLaptopCode />,
  },
  {
    id: 4,
    title: 'Milestones',
    icon: <MdSchool />,
  },
  {
    id: 3,
    title: "When I'm not Coding",
    icon: <GiAmericanFootballPlayer />,
  },
];
export default sidebarNav;

export const hobbies = [
  {
    hobby: 'Coding',
  },
  {
    hobby: 'Swimming',
  },
  {
    hobby: 'Research',
  },
  {
    hobby: 'Music/ Playing Guitar',
  },
  {
    hobby: 'Football',
  },
];

export const hobbiesImages = [
  {
    image: contact,
  },
  {
    image: swimmer,
  },
  {
    image: footballer,
  },
];
