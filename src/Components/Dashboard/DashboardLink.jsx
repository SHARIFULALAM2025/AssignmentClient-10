import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { MdHomeWork } from 'react-icons/md'
const dashLink = [
  {
    path: 'dashboard/AddProperty',
    role: ['Admin'],
    name: 'AddProperty',
    icon: <AiOutlinePlusCircle></AiOutlinePlusCircle>,
  },
  {
    path: 'dashboard/MyProperty',
    role: ['Admin', 'user'],
    name: 'MyProperty',
    icon: <MdHomeWork></MdHomeWork>,
  },
  {
    path: 'dashboard/MyRating',
    role: ['Admin', 'user'],
    name: 'MyRating',
    icon: <FaStar></FaStar>,
  },
  {
    path: 'dashboard/allUser',
    role: ['Admin'],
    name: 'AllUser',
    icon: <SupervisedUserCircleIcon></SupervisedUserCircleIcon>,
  },
]
export { dashLink }
