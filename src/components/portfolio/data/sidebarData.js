import { MdWork } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { GiAmericanFootballPlayer } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';

const sidebarNav = [
  {
    id: 1,
    title: 'Projects',
    icon: <MdWork />,
    link: 'projects',
  },
  {
    id: 2,
    title: 'Tool Box',
    icon: <FaLaptopCode />,
    link: 'stacks',
  },
  {
    id: 4,
    title: 'Education',
    icon: <MdSchool />,
    link: 'education',
  },
  {
    id: 3,
    title: "When I'm not Coding",
    icon: <GiAmericanFootballPlayer />,
    link: 'hobbies',
  },
];
export default sidebarNav;
