import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaBuilding, FaStar } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const navData = [
  {
    id: 1,
    path: '/',
    Name: 'Home',
    icon: <IoHome className="w-5 h-5"/>,
  },
  {
    id: 2,
    path: '/AllProperties',
    Name: 'All Properties',
    icon: <FaBuilding className="w-5 h-5" />,
  },
  {
    id: 3,
    path: '/AddProperties',
    Name: 'Add Properties',
    icon: <AiOutlinePlusCircle className="w-6 h-6" />,
  },
  {
    id: 4,
    path: '/MyProperties',
    Name: 'My Properties',
    icon: <MdHomeWork className="w-5 h-5" />,
  },
  {
    id: 5,
    path: '/MyRatings',
    Name: 'My Ratings',
    icon: <FaStar className="w-5 h-5 text-yellow-800" />,
  },
]
const settingLink = [
  {
    id: 1,
    path: '/account',
    Name: 'Account',
    icon: <AccountCircleIcon></AccountCircleIcon>,
  },
]
export { navData, settingLink }