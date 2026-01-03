import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import ReusableButton from '../ReusableButton/ReusableButton'
import Component from '../Component/Component'

const Account = () => {
  const navigate = useNavigate()
  const { LogOut, setUser } = useContext(AuthContext)
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

  return (
    <div>
      <Component>
        <ReusableButton
          text="Log out"
          variant="contained"
          onClick={LogOutUser}
        ></ReusableButton>
      </Component>
    </div>
  )
}

export default Account
