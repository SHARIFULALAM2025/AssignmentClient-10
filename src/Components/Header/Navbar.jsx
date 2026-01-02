import React, { useContext,  } from 'react'
import { navData, settingLink } from './NavData'
import { Link, NavLink } from 'react-router'
import '../../App.css'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import {  ToastContainer } from 'react-toastify'

import Component from '../Component/Component'
import AppBar from '@mui/material/AppBar'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import ReusableButton from '../ReusableButton/ReusableButton'
import Logo from './Logo/Logo'
import DarkMode from './DarkMode/DarkMode'
const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const { user, theme } = useContext(AuthContext)
  console.log(user)




  return (
    <div className="">
      <Component>
        {' '}

        <nav>
          <AppBar
            // dark mode class
            sx={{
              backgroundColor: theme === 'light' ? 'white' : 'black',
              color: theme === 'light' ? 'black' : 'white',

              borderBottom: '1px solid #ddd',
            }}
            position="static"
          >
            {/* max width of navbar */}
            <Toolbar disableGutters>
              {/* large device */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  <Logo></Logo>
                  {navData.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <NavLink to={page.path}>
                        {' '}
                        <Typography sx={{ textAlign: 'center' }}>
                          {page.icon}
                          {page.Name}
                        </Typography>
                      </NavLink>
                    </MenuItem>
                  ))}
                  {/* sow small device  */}

                  <Box sx={{ ml: 2 }}>
                    <DarkMode></DarkMode>
                  </Box>
                </Menu>
              </Box>

              {/* design for small device */}
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Logo></Logo>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex', justifyContent: 'center' },
                }}
              >
                {navData.map((page) => (
                  <NavLink to={page.path} key={page.id}>
                    {' '}
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        //   color: theme === 'light' ? 'black' : 'white',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      {page.icon}
                      {page.Name}
                    </Button>
                  </NavLink>
                ))}
              </Box>

              {/* i want to small device hide large device */}

              <Box sx={{ mr: 1, display: { xs: 'none', md: 'block' } }}>
                <DarkMode></DarkMode>
              </Box>
              {/*  */}

              {/* if user thake then sow blew the component otherwise show login page */}
              {user ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings" arrow>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        referrerPolicy="no-referrer"
                        alt=""
                        src={user?.photoURL}
                      />
                    </IconButton>
                  </Tooltip>
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
                    {settingLink.map((setting) => (
                      <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                        <NavLink to={setting.path}>
                          <Typography sx={{ textAlign: 'center' }}>
                            {setting.icon}
                            {setting.Name}
                          </Typography>
                        </NavLink>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Link to="/Signup">
                  <ReusableButton
                    text="register"
                    variant="contained"
                  ></ReusableButton>
                </Link>
              )}
            </Toolbar>
          </AppBar>
        </nav>
        <ToastContainer />
      </Component>
    </div>
  )
}

export default Navbar
