import { FaBuilding } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MessageIcon from '@mui/icons-material/Message'
import InfoIcon from '@mui/icons-material/Info'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
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
  {
    id: 3,
    path: '/contact',
    Name: 'Contact',
    icon: <MessageIcon className="w-5 h-5" />,
  },
  {
    id: 4,
    path: '/about',
    Name: 'About',
    icon: <InfoIcon className="w-5 h-5" />,
  },
  {
    id: 5,
    path: '/Privacy',
    Name: 'Privacy',
    icon: <PrivacyTipIcon className="w-5 h-5" />,
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
