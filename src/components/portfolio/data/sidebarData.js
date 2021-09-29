import { MdWork } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { GiAmericanFootballPlayer } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';

const sidebarNav = [
  {
    id: 1,
    title: 'Projects',
    icon: <MdWork />,
  },
  {
    id: 2,
    title: 'Stacks',
    icon: <FaLaptopCode />,
  },
  {
    id: 3,
    title: "When I'm not Coding",
    icon: <GiAmericanFootballPlayer />,
  },
  {
    id: 4,
    title: 'Education',
    icon: <MdSchool />,
  },
];
export default sidebarNav;
