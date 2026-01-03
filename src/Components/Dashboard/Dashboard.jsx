import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link, NavLink, Outlet, useNavigate } from 'react-router'
import Tooltip from '@mui/material/Tooltip'
import { dashLink } from './DashboardLink'
import Avatar from '@mui/material/Avatar'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { settingLink } from '../Header/NavData'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { toast } from 'react-toastify'

const drawerWidth = 240
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}))
const Dashboard = () => {
  const navigate = useNavigate()
  const { LogOut, setUser } = useContext(AuthContext)
  const handelLogout = () => {
    LogOut()
      .then(() => {
        toast.success('log out successfully')
        navigate('/', { state: true })

        setUser(null)
      })
      .catch((error) => {
        const ErrorMessage = error.message
        toast(ErrorMessage)
      })
  }
  /*  */
  const profileLinkData = settingLink.filter((item) => [1, 3].includes(item.id))
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  /*  */
  const drawerAnchor = 'right'
  const { user } = useContext(AuthContext)
  const [open, setOpen] = React.useState(false)
  // const [role] = useRole()
  // const filteredLink = dashboardLink.filter((item) => item.role.includes(role))
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <div className="">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          component="div"
          sx={{ backgroundColor: '#ffffff' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <IconButton
                color="primary"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                  {
                    marginRight: 5,
                  },
                  open && { display: 'none' },
                ]}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                sx={{ display: { xs: 'none', md: 'block' } }}
                color="primary"
                sx={{ fontSize: 12 }}
                noWrap
                component="div"
              >
                Dashboard Overview
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: 12 }}
                  color="primary"
                  noWrap
                  component="div"
                >
                  {user?.displayName}
                </Typography>
                <Typography
                  sx={{ fontSize: 12 }}
                  noWrap
                  component="div"
                  color="primary"
                >
                  {user?.email}
                </Typography>
              </Box>
              <Box>
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar src={user?.photoURL} alt="profile image"></Avatar>
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {profileLinkData.map((setting) => (
                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                      <NavLink to={setting.path}>
                        <Typography sx={{ textAlign: 'center' }}>
                          {setting.icon}
                          {setting.Name}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                  <Divider></Divider>
                  <MenuItem onClick={handelLogout}>
                    <Box sx={{ display: 'flex' }}>
                      <LogoutIcon color="error"></LogoutIcon>
                      <Typography color="error">Log out</Typography>
                    </Box>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader style={{ justifyContent: 'space-between' }}>
            {/* Home Button */}
            <Tooltip title=" Go Home" arrow>
              <Link to="/">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Tooltip>

            {/* Drawer Close Button */}
            <IconButton onClick={handleDrawerClose}>
              {drawerAnchor === 'right' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />
          <List>
            {dashLink.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: 'auto',
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, paddingTop: 10 }}>
          <Outlet></Outlet>
        </Box>
      </Box>
    </div>
  )
}

export default Dashboard
