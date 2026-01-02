import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { AuthContext } from '../Authentication/Auth/AuthContext'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,

  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: 'red',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //placeholder text size controls
    '&::placeholder': {
      fontSize: '10px',
    },
    //
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '24ch',
      '&:focus': {
        width: '32ch',
      },
    },
  },
}))
const SearchBar = () => {
  const { theme } = useContext(AuthContext)
  return (
    <div>
      <Search


        sx={{
          backgroundColor: theme === 'light' ? 'white' : 'white',
          color: theme === 'light' ? 'black' : 'white',
        }}
      >

        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="what are you looking for .."
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </div>
  )
}

export default SearchBar
