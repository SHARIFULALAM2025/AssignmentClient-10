import { FaBuilding } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DashboardIcon from '@mui/icons-material/Dashboard'
const navData = [
  {
    id: 1,
    path: '/',
    Name: 'Home',
    icon: <IoHome className="w-5 h-5" />,
  },
  {
    id: 2,
    path: '/AllProperties',
    Name: 'All Properties',
    icon: <FaBuilding className="w-5 h-5" />,
  },
]
const settingLink = [
  {
    id: 1,
    path: '/account',
    Name: 'Profile',
    icon: <AccountCircleIcon></AccountCircleIcon>,
  },
  {
    id: 2,
    path: '/dashboard',
    Name: 'Dashboard',
    icon: <DashboardIcon></DashboardIcon>,
  },
  {
    id: 3,
    path: '/',
    Name: 'Home',
    icon: <HomeIcon></HomeIcon>,
  },
]
export { navData, settingLink }
