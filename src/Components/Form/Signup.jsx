import React, { useState } from 'react'
import { useContext } from 'react'
import { BsFillEyeSlashFill } from 'react-icons/bs'

import { IoEyeSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import Component from '../Component/Component'
import { updateProfile } from 'firebase/auth'
import { toast, ToastContainer } from 'react-toastify'

const Signup = () => {
  const [error ,setError]=useState("")
  const navigate = useNavigate()
  // password toggle start
  const [eye, setShowEye] = useState(false)
  const { theme, createUser, setUser } = useContext(AuthContext)
  const handelPassword = () => {
    setShowEye(!eye)
  }
  // password toggle end
  const handelSignUp = (e) => {
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
      return
    }
    if (!text1.test(Password)) {
      setError('Password must have an Lowercase letter.')
      return
    }
    if (!text2.test(Password)) {
      setError('Password length 6 character.')
      return
    }
    createUser(Email, Password)
      .then((result) => {
        const user = result.user
        setUser(user)
        const profile = {
          displayName: Name,
          photoURL: photo,
        }
        updateProfile(user, profile)
          .then(() => {})
          .catch()
        toast.success('sign up successfully')
        setTimeout(() => {
          navigate('/', { state: true })
        }, 500)
      })
      .catch((error) => {
        const errorMessage = error.message
        toast.warn(errorMessage)
      })
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

                <button
                  type="submit"
                  className="btn w-full py-2 rounded-sm bg-amber-200  font-semibold hover:cursor-pointer"
                >
                  Sign Up
                </button>
                {error && <p className="text-red-700">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </Component>
      <ToastContainer />
    </div>
  )
}

export default Signup
