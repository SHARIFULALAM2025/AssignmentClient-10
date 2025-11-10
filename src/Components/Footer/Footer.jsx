import React from 'react'
import Component from '../Component/Component'
import { Link, NavLink } from 'react-router'
import { navData } from '../Header/NavData'
import '../../App.css'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
      <Component>
        <footer>
          <div className="bg-[#004166] grid grid-cols-3 p-2">
            {/*  */}
            <div className="">
              <Link to="/" className="">
                <img
                  src="/download.png"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-2xl text-white">HomeNest</h1>
              </Link>
            </div>
            <div className="space-y-1">
              <h1 className="text-white  text-2xl underline">
                Contact details
              </h1>
              <h2 className="text-white ">
                (Dhaka) 555-0103, (Gulshan) 555-0120
              </h2>
              <h2 className="text-white ">pro.homenest.house@gmail.com</h2>
            </div>
            <div className="space-y-1 ">
              <h2 className="text-white text-2xl">Get New Offer</h2>
              <div className="flex items-center">
                <div className="">
                  <label className="input validator">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input
                      className=""
                      type="email"
                      placeholder="mail@site.com"
                      required
                    />
                  </label>
                  <div className="validator-hint hidden">
                    Enter valid email address
                  </div>
                </div>
                <button className="btn bg-[#003350] text-white join-item">
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#00314D]  p-2">
            <div className="grid grid-cols-4">
              <div className="">
                <h1 className="text-white font-bold text-2xl">Company</h1>
                <ul className="flex flex-col text-white space-y-3">
                  {navData.map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.path}>
                        {item.icon}
                        {item.Name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col space-y-3">
                <h1 className="text-white font-bold text-2xl">
                  Terms &amp; Conditions,
                </h1>
                <Link className="text-white hover:underline">
                  Purpose of service
                </Link>
                <Link className="text-white hover:underline">
                  Account registration
                </Link>
                <Link className="text-white hover:underline">
                  User Responsibilities
                </Link>
                <Link className="text-white hover:underline">
                  Transaction-related liability
                </Link>
                <Link className="text-white hover:underline">privacy</Link>
              </div>

              <div className="flex flex-col space-y-3">
                <h1 className="text-white font-bold text-2xl">Resources</h1>
                <Link className="text-white hover:underline">
                  Pricing and plans
                </Link>
                <Link className="text-white hover:underline">
                  Terms of Service
                </Link>
                <Link className="text-white hover:underline">Help & FAQ</Link>
                <Link className="text-white hover:underline">Contact Us</Link>
                <Link className="text-white hover:underline">Site map</Link>
              </div>
              <div className="space-y-5">
                <div className="space-y-3 text-white">
                  <h1 className="">We are hiring</h1>
                  <p className="">Join the Intellicom Wealth</p>
                </div>
                <div className="space-y-3">
                  <h1 className="text-white">Connect with Us</h1>
                  <div className="flex flex-row space-x-5">
                    <Link>
                      <FaFacebook className="w-6 h-6 rounded-full text-white"></FaFacebook>
                    </Link>
                    <Link>
                      <FaXTwitter className="w-6 h-6 rounded-full text-white"></FaXTwitter>
                    </Link>
                    <Link>
                      {' '}
                      <FaSquareInstagram className="w-6 h-6 rounded-full text-white"></FaSquareInstagram>
                    </Link>
                    <Link>
                      {' '}
                      <FaYoutube className="w-6 h-6 rounded-full text-white"></FaYoutube>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center text-white">
              <small>
                Copyright 2025 All Rights Reserved to Intellicom Wealth Pvt.
                Ltd.
              </small>
            </div>
          </div>
        </footer>
      </Component>
    </div>
  )
}

export default Footer
