import React from 'react'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import { useContext } from 'react'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import SendIcon from '@mui/icons-material/Send'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { AuthContext } from '../Authentication/Auth/AuthContext'
import ReusableButton from '../ReusableButton/ReusableButton'
import { toast } from 'react-toastify'
import Component from '../Component/Component'
const Contact = () => {

  const { register, handleSubmit, reset } = useForm()
  const { theme } = useContext(AuthContext)
  const handelMessage = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/messageAll', data)
      if (res.data.insertedId) {
        toast.success('message submit successfully!')
        reset()
      }
    } catch (error) {
      const ErrorMessage = error.ErrorMessage
      console.log(ErrorMessage)
      toast.error(ErrorMessage)
    }
  }
  return (
    <Component>
      <div className="grid md:grid-cols-12 gap-8 dark:bg-black">
        <div className="col-span-12 md:col-span-2 p-2 space-y-3 shadow-xl rounded dark:bg-black">
          <div className="flex gap-2 ">
            <h1 className="">
              <PermPhoneMsgIcon
                sx={{ color: theme == 'dark' ? 'white' : 'black' }}
              ></PermPhoneMsgIcon>
            </h1>
            <p className="dark:text-white">Call To Us</p>
          </div>
          <h1 className="dark:text-white">
            We are available 24/7, 7 days a week.
          </h1>
          <p className="dark:text-white">Phone: +8801611112222</p>
          <div className="border-t-2"></div>
          <div className="flex gap-2">
            <h1 className="">
              <MailOutlineIcon
                sx={{ color: theme == 'dark' ? 'white' : 'black' }}
              ></MailOutlineIcon>
            </h1>
            <p className="dark:text-white">Write To US</p>
          </div>
          <h1 className="dark:text-white">
            Fill out our form and we will contact you within 24 hours.
          </h1>
          <p className="dark:text-white">Emails: customer@exclusive.com</p>
          <p className="dark:text-white">Emails: support@exclusive.com</p>
        </div>
        <div className="md:col-span-10 col-span-12 dark:bg-black rounded shadow-xl p-3">
          <form onSubmit={handleSubmit(handelMessage)} className="space-y-2">
            <div className="grid md:grid-cols-3 grid-cols-1">
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
                      borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                    },
                  }}
                  variant="standard"
                >
                  <InputLabel sx={{}}>Name</InputLabel>
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
                      borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                    },
                  }}
                  variant="standard"
                >
                  <InputLabel>Phone Number</InputLabel>
                  <Input {...register('number')} type="number" />
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
                      borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                    },
                  }}
                  variant="standard"
                >
                  <InputLabel>Email</InputLabel>
                  <Input {...register('email')} type="email" />
                </FormControl>
              </div>
            </div>
            <div className="">
              <Box sx={{ width: '100%' }}>
                <TextField
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
                      borderBottomColor: theme === 'dark' ? '#fff' : '#1976d2',
                    },
                  }}
                  fullWidth
                  minRows={10}
                  multiline
                  label="Message"
                  id="fullWidth"
                  {...register('message')}
                />
              </Box>
            </div>
            <div className="flex justify-end items-end">
              <ReusableButton
                type="submit"
                endIcon={<SendIcon></SendIcon>}
                text="Send Massage"
                variant="contained"
              ></ReusableButton>
            </div>
          </form>
        </div>
      </div>
    </Component>
  )
}

export default Contact
