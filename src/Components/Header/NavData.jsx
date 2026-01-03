import { FaBuilding } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'

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
    Name: 'Account',
    icon: <AccountCircleIcon></AccountCircleIcon>,
  },
  {
    id: 1,
    path: '/dashboard',
    Name: 'Dashboard',
    icon: <DashboardIcon></DashboardIcon>,
  },
]
export { navData, settingLink }
