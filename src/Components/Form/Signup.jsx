import React, { useState } from 'react'
import { useContext } from 'react'
import { BsFillEyeSlashFill } from 'react-icons/bs'

import { IoEyeSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import Component from '../Component/Component'
import { updateProfile } from 'firebase/auth'
import Swal from 'sweetalert2'
import Social from './Social/Social'
import ReusableButton from '../ReusableButton/ReusableButton'
import { saveUser } from '../ReusableButton/ReusableFunction'

const Signup = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  // password toggle start
  const [eye, setShowEye] = useState(false)
  const { theme, createUser, setUser } = useContext(AuthContext)
  const handelPassword = (e) => {
    e.preventDefault()
    setShowEye(!eye)
  }
  // password toggle end
  const handelSignUp = async (e) => {
    setLoading(true)
    setError('')
    e.preventDefault()
    const Name = e.target.name.value
    const Email = e.target.email.value
    const Password = e.target.password.value
    const photo = e.target.photo.value
    const text = /^(?=.*[A-Z]).*$/
    const text1 = /^(?=.*[a-z]).*$/
    const text2 = /^.{6,}$/
    if (!text.test(Password)) {
      setError('Password must have an Uppercase letter.')
      setLoading(false)
      return
    }
    if (!text1.test(Password)) {
      setError('Password must have an Lowercase letter.')
      setLoading(false)
      return
    }
    if (!text2.test(Password)) {
      setError('Password length 6 character.')
      setLoading(false)
      return
    }

    try {
      const result = await createUser(Email, Password)
      const user = result.user
      setUser(user)
      await saveUser({
        name:Name,
        email:Email,photo,
      })
      await updateProfile(user, {
        displayName: Name,
        photoURL: photo,
      })
      Swal.fire({
        title: 'signup successfully',
        icon: 'success',
        draggable: true,
      })
      navigate('/', { state: true })
    } catch (err) {
      Swal.fire({
        title: 'sign up fail',
        icon: 'error',
        text: err.message,
        draggable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="">
      <Component>
        {' '}
        <div
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/mF2rX5y9/billy-huynh-W8-KTS-mh-FUE-unsplash.jpg')",
          }}
          className="min-h-screen flex justify-center items-center "
        >
          <div
            className={`p-8  space-y-3 shadow-sm rounded-sm ${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <h1 className="text-center text-3xl font-semibold">
              Register Now!
            </h1>
            <p className="text-[16px] text-red-700 font-semibold">
              Already have an account?
              <Link to="/Login" className=" text-[#0000ff] hover:underline">
                {' '}
                Login Now
              </Link>
            </p>
            <div className="">
              <form onSubmit={handelSignUp} className="space-y-5">
                <div className="flex flex-col space-y-3">
                  <label className="text-[14px] font-normal">Name:</label>
                  <input
                    name="name"
                    className="py-2  rounded-sm border-2 border-[rgba(210,210,210,1)] outline-none"
                    type="text"
                    placeholder="Enter your Name....."
                    required
                  />
                  <label className="text-[14px] font-normal">Email:</label>
                  <input
                    name="email"
                    className="py-2  rounded-sm border-2 border-[rgba(210,210,210,1)] outline-none"
                    type="email"
                    placeholder="Enter your email....."
                    required
                  />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-[14px] font-normal">photoURL:</label>
                  <input
                    name="photo"
                    className="py-2 rounded-sm border-2 border-[rgba(210,210,210,1)] outline-none"
                    type="text"
                    placeholder="Enter your photoURL....."
                    required
                  />
                </div>
                <div className="flex flex-col relative space-y-3">
                  <label className="text-[14px] font-normal">Password:</label>
                  <input
                    name="password"
                    className="py-2 rounded-sm border-2  border-[rgba(210,210,210,1)] outline-none"
                    type={eye ? 'text' : 'password'}
                    placeholder="***********"
                    required
                  />
                  {eye ? (
                    <button
                      onClick={handelPassword}
                      className="absolute right-0 top-12 mr-6"
                    >
                      <IoEyeSharp></IoEyeSharp>
                    </button>
                  ) : (
                    <button
                      onClick={handelPassword}
                      className="absolute right-0 top-12 mr-6"
                    >
                      <BsFillEyeSlashFill></BsFillEyeSlashFill>
                    </button>
                  )}
                </div>

                <ReusableButton
                  sx={{ width: '100%' }}
                  text="Sign Up"
                  type="submit"
                  variant="contained"
                  color="success"
                ></ReusableButton>
                {error && <p className="text-red-700">{error}</p>}
                <div className="flex justify-center items-center gap-4">
                  <div className="h-px bg-gray-500 w-full"></div>
                  <p className="">or</p>
                  <div className="h-px bg-gray-500 w-full"></div>
                </div>
              </form>
              <div className="">
                <Social></Social>
              </div>
            </div>
          </div>
        </div>
      </Component>
    </div>
  )
}

export default Signup
