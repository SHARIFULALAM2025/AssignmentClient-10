import React, { useState } from 'react'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoEyeSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { toast, ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import Component from '../Component/Component'

const Login = () => {

  const navigate = useNavigate()
  // password toggle
  const [eye, setShowEye] = useState(false)
  const handelPassword = () => {
    setShowEye(!eye)
  }
  //
  const { setUser, CreateAccountGoogle, theme, LoginUser } =
    useContext(AuthContext)

  const googleLogin = () => {
    CreateAccountGoogle().then((result) => {
      const user = result.user
      setUser(user)
      navigate('/', { state: true })
    }).catch(error => {
      const errorMessage = error.message;
      toast.warning(errorMessage)

    })
  }
  // Login
  const handelLogin = (e) => {
    e.preventDefault()
    const Email = e.target.email.value;
    const password = e.target.password.value;

    LoginUser(Email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('login successfully')
        setTimeout(() => {
          navigate('/',{state:true})
        }, 500);


      })
      .catch(error => {
        const errorMessage = error.message
        toast.warning(errorMessage)
    })

  }

  return (
    <div className="">
      <Component>
        <div
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/mF2rX5y9/billy-huynh-W8-KTS-mh-FUE-unsplash.jpg')",
          }}
          className="min-h-screen flex object-cover justify-center items-center bg-[#E9E9E9]"
        >
          <div
            className={`p-8  space-y-3 shadow-sm rounded-sm ${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <h1 className="text-center text-3xl font-semibold">Login</h1>
            <p className="text-[16px] text-red-700 font-semibold">
              Don't have an account?{' '}
              <Link to="/SignUp" className=" text-[#0000FF] hover:underline">
                {' '}
                Register Now
              </Link>
            </p>
            <div className="">
              <form onSubmit={handelLogin} className="space-y-5">
                <div className="flex flex-col">
                  <label className="text-[14px] font-normal">Email</label>
                  <input

                    name="email"
                    className="py-2 rounded-sm border-2 border-[rgba(210,210,210,1)] outline-none"
                    type="email"
                    placeholder="Enter your email....."
                    required
                  />
                </div>
                <div className="flex flex-col relative">
                  <label className="text-[14px] font-normal">Password</label>
                  <input
                    name="password"
                    className="py-2 rounded-sm border-2 border-[rgba(210,210,210,1)] outline-none"
                    type={eye ? 'password' : 'text'}
                    placeholder="***********"
                    required
                  />
                  {eye ? (
                    <button
                      className="right-0 top-9 absolute mr-6"
                      onClick={handelPassword}
                    >
                      <IoEyeSharp></IoEyeSharp>
                    </button>
                  ) : (
                    <button
                      className=" right-0 absolute top-9 mr-6"
                      onClick={handelPassword}
                    >
                      <BsFillEyeSlashFill></BsFillEyeSlashFill>
                    </button>
                  )}
                </div>
                <div className="">
                  <p className="text-[14px] font-normal text-[rgba(0,25,49,1)] hover:underline hover:cursor-pointer">
                    Forgot password?
                  </p>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="btn w-full py-2 rounded-sm bg-pink-600 font-semibold hover:cursor-pointer"
                  >
                    Log in
                  </button>
                </div>

                {/* sign in log  end  */}
                <div className="flex justify-center items-center gap-4">
                  <div className="h-px bg-gray-500 w-full"></div>
                  <p className="">or</p>
                  <div className="h-px bg-gray-500 w-full"></div>
                </div>
               
              </form>
              <div className="flex items-center justify-center py-2">
                <button
                  onClick={googleLogin}
                  className="flex w-full py-2  place-content-center items-center gap-3 rounded-sm border-2 border-[rgba(210,210,210,1)] hover:cursor-pointer"
                >
                  <FcGoogle></FcGoogle>Sign In With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </Component>
      <ToastContainer />
    </div>
  )
}

export default Login
