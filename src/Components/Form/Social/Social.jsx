import React, { useContext, useState } from 'react'
import ReusableButton from '../../ReusableButton/ReusableButton'
import Swal from 'sweetalert2'
import { AuthContext } from '../../Authentication/Auth/AuthContext'
import { useNavigate } from 'react-router'
import { FcGoogle } from 'react-icons/fc'

const Social = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const { setUser, CreateAccountGoogle } = useContext(AuthContext)

  const googleLogin = () => {
    setLoading(true)
    CreateAccountGoogle()
      .then((result) => {
        const user = result.user
        setUser(user)
        Swal.fire({
          title: 'login successfully',
          icon: 'success',
          draggable: true,
        })
        navigate('/', { state: true })
      })
      .catch((error) => {
        Swal.fire({
          title: 'login successfully',
          icon: 'error',
          text: error.message,
          draggable: true,
        })
      })
      .finally(() => setLoading(false))
  }
  return (
    <div>
      <ReusableButton
        text="Sign In With Google"
        variant="contained"
        startIcon={<FcGoogle></FcGoogle>}
        sx={{ width: '100%' }}
        onClick={googleLogin}
        className="flex w-full  place-content-center items-center gap-3 rounded-sm border-2 border-[rgba(210,210,210,1)] hover:cursor-pointer"
      ></ReusableButton>
    </div>
  )
}

export default Social
