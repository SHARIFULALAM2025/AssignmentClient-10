import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { useNavigate } from 'react-router'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Choose from '../Common/Choose'
import Book from '../Common/Book'
import ExtraSection from '../Component/ExtraSection'

const Home = () => {
  const [newProperty, setNewProperty] = useState([])
  const { theme } = useContext(AuthContext)
  const [current, setCurrent] = useState(0)
  const [loading,setLoading]=useState(true)
  const navigate = useNavigate()
  console.log(newProperty)

  useEffect(() => {
    fetch('http://localhost:5000/home/date')
      .then((result) => result.json())
      .then((data) => {
        setNewProperty(data)
        setLoading(false)
      })
  }, [])
  const handelNavigate = (id) => {
    navigate(`/ViewProperty/${id}`)
  }
  //carousel
  const handelNext = () => {
    if (current + 3 < newProperty.length - 1) {
      setCurrent(current + 3)
    } else {
      setCurrent(0)
    }
  }
  const handelPrev = () => {
    if (current === 0) {
      setCurrent(Math.max(newProperty.length - 3, 0))
    } else {
      setCurrent(current - 3)
    }
  }
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>

  }

  /*   */
  return (
    <div>
      <Component>
        <div
          className={`${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <div className="">
            <div className="relative w-full overflow-hidden rounded-xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {newProperty.slice(current, current + 3).map((item) => (
                  <div key={item._id} className="relative">
                    <figure>
                      <img
                        src={item.photoURL}
                        alt=""
                        className="object-cover w-full h-64"
                      />
                    </figure>
                    <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center px-5 ">
                      <h1 className="text-3xl font-bold text-green-600">
                        {item.PropertyName}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-green-500 text-black p-2 rounded-full"
                onClick={handelPrev}
              >
                <IoIosArrowBack size={24}></IoIosArrowBack>
              </button>
              <button
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-green-500 text-black p-2 rounded-full"
                onClick={handelNext}
              >
                <IoIosArrowForward size={24}></IoIosArrowForward>
              </button>
            </div>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 mt-5`}>
            {newProperty.map((item) => (
              <div
                key={item._id}
                className="bg-green-200 p-2 rounded-lg text-black"
              >
                <figure>
                  <img
                    src={item.photoURL}
                    alt=""
                    className="bg-cover w-full h-62"
                  />
                </figure>
                <div className="flex justify-between items-center">
                  <h1 className="">{item.PropertyName}</h1>
                  <h2 className="">{item.Category}</h2>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="">{item.Price}</h1>
                  <h2 className="">{item.location}</h2>
                </div>
                <h1 className="">
                  {item.Description.length > 100
                    ? item.Description.split(' ').slice(0, 50).join(' ') +
                      '...........'
                    : item.Description}
                </h1>
                <button
                  onClick={() => handelNavigate(item._id)}
                  className="w-full px-3 py-1 bg-blue-500"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
        <Choose></Choose>
        <Book></Book>
        <ExtraSection></ExtraSection>
      </Component>
    </div>
  )
}

export default Home
