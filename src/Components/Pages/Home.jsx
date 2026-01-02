import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { useNavigate } from 'react-router'

import Choose from '../Common/Choose'
import Book from '../Common/Book'
import ExtraSection from '../Component/ExtraSection'
import Loading from '../Loading/Loading'

const Home = () => {
  const [newProperty, setNewProperty] = useState([])
  const { theme } = useContext(AuthContext)
  // const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  console.log(newProperty)

  useEffect(() => {
    fetch('https://assignment-10-eosin.vercel.app/home/date')
      .then((result) => result.json())
      .then((data) => {
        setNewProperty(data)
        setLoading(false)
      })
  }, [])
  const handelNavigate = (id) => {
    navigate(`/ViewProperty/${id}`)
  }

  if (loading) {
    return <Loading></Loading>
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
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                650: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {newProperty.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="" key={index}>
                    <div className="relative h-75 w-full">
                      <img
                        src={item.photoURL}

                        alt="careImage"
                        className="object-cover rounded"
                      />
                      <div className="absolute top-1/2">
                        {' '}
                        <h1 className="text-green-500 text-2xl font-bold">
                          {item.PropertyName}
                        </h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
