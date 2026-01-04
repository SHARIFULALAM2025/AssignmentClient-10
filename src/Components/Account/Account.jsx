import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import ReusableButton from '../ReusableButton/ReusableButton'
import Component from '../Component/Component'
import LogoutIcon from '@mui/icons-material/Logout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import axios from 'axios'
import { updateProfile } from 'firebase/auth'
import { useState } from 'react'
import Loading from '../Loading/Loading'
const Account = () => {
  const { user, theme, LogOut, setUser, loading } = useContext(AuthContext)
  const navigate = useNavigate()

  const LogOutUser = () => {
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

  const handelCancel = () => {
    navigate('/')
  }

  const { register, handleSubmit, reset } = useForm()
  const [info, setInfo] = useState(null)
  useEffect(() => {
    const userData = async () => {
      if (!user.email) return
      const { data } = await axios.get(
        `http://localhost:5000/allUser/role/${user.email}`
      )
      console.log(data)

      setInfo(data)
      reset(data)
    }
    if (!loading && user?.email) {
      userData()
    }
  }, [user?.email, reset, loading])

  const handelProfile = async (data) => {
    console.log(data)

    try {
      if (user) {
        await updateProfile(user, {
          displayName: data.name,
          photoURL: data.photo,
        })
      }
      const profileData = {
        name: data.name,
        email: data.email,
        photo: data.photo,
        address: data.address,
      }
      console.log(profileData)

      const res = await axios.put(
        `http://localhost:5000/profile/${user.email}`,
        profileData
      )
      if (res.data.modifiedCount > 0) {
        toast.success('profile update successfully')

        

        console.log(user)

        setInfo(profileData)
      }
    } catch (error) {
      toast.error('something went wong')
      console.error(error)
    }
  }
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Component>
        <div className="dark:bg-black">
          <div className=" dark:bg-black rounded shadow-xl p-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <ReusableButton
                  onClick={handelCancel}
                  text="Cancel"
                  variant="contained"
                  color="error"
                ></ReusableButton>
                <ReusableButton
                  startIcon={<LogoutIcon></LogoutIcon>}
                  onClick={LogOutUser}
                  text="Log out"
                  variant="contained"
                  color="success"
                ></ReusableButton>
              </div>
              <div className="">
                <h1 className="dark:text-white">
                  Welcome!{' '}
                  <span className="text-[#DB4444] font-bold">{info?.name}</span>
                </h1>
                <h1 className="dark:text-white">
                  <MailOutlineIcon
                    sx={{ color: theme == 'dark' ? 'white' : 'black' }}
                  ></MailOutlineIcon>
                  {info?.email}
                </h1>
              </div>
            </div>
            <form onSubmit={handleSubmit(handelProfile)} className="space-y-2">
              <div className="md:flex md:flex-row flex-col justify-between">
                <div className="">
                  <FormControl
                    sx={{
                      m: 1,
                      width: '36ch',

                      '& .MuiInputLabel-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInputBase-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },
                      '& .MuiInput-underline:before': {
                        borderBottomColor: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottomColor:
                          theme === 'dark' ? '#fff' : '#1976d2',
                      },
                    }}
                    variant="standard"
                  >
                    <Input {...register('name')} type="text" />
                  </FormControl>
                </div>
                <div className="">
                  <FormControl
                    sx={{
                      m: 1,
                      width: '36ch',
                      '& .MuiInputLabel-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInputBase-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },
                      '& .MuiInput-underline:before': {
                        borderBottomColor: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottomColor:
                          theme === 'dark' ? '#fff' : '#1976d2',
                      },
                    }}
                    variant="standard"
                  >
                    <Input {...register('photo')} type="text" />
                  </FormControl>
                </div>
                <div className="">
                  <FormControl
                    sx={{
                      m: 1,
                      width: '36ch',
                      '& .MuiInputLabel-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInputBase-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },
                      '& .MuiInput-underline:before': {
                        borderBottomColor: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottomColor:
                          theme === 'dark' ? '#fff' : '#1976d2',
                      },
                    }}
                    variant="standard"
                  >
                    <Input {...register('email')} readOnly type="email" />
                  </FormControl>
                </div>
              </div>
              <div className="">
                <Box sx={{ width: '100%' }}>
                  <TextField
                    {...register('address')}
                    sx={{
                      '& .MuiInputLabel-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInputBase-root': {
                        color: theme === 'dark' ? 'white' : 'black',
                      },
                      '& .MuiInput-underline:before': {
                        borderBottomColor: theme === 'dark' ? 'white' : 'black',
                      },

                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottomColor:
                          theme === 'dark' ? '#fff' : '#1976d2',
                      },
                    }}
                    fullWidth
                    minRows={10}
                    multiline
                    label="Your Address"
                    id="fullWidth"
                    placeholder="Your address details...."
                  />
                </Box>
              </div>
              <div className="flex justify-end">
                <ReusableButton
                  type="submit"
                  text="update profile"
                  variant="contained"
                ></ReusableButton>
              </div>
            </form>
          </div>
        </div>
      </Component>
    </div>
  )
}

export default Account
