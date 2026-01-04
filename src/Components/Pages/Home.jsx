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
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Choose from '../Common/Choose'
import Book from '../Common/Book'
import ExtraSection from '../Component/ExtraSection'
import Loading from '../Loading/Loading'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PlaceIcon from '@mui/icons-material/Place'
import Typography from '@mui/material/Typography'
import ReusableButton from '../ReusableButton/ReusableButton'
const Home = () => {
  const [newProperty, setNewProperty] = useState([])
  const { theme } = useContext(AuthContext)
  // const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(true)
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
                    <div className="relative h-62 w-full">
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

          <div className={`grid grid-cols-1 md:grid-cols-5 gap-3 mt-5`}>
            {newProperty.map((item) => (
              <Card
                sx={{
                  maxWidth: 345,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                key={item._id}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.photoURL}
                  title="green iguana"
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlgin: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{ textAlgin: 'center', fontSize: 12, fontWeight: 700 }}
                    component="div"
                  >
                    {item.PropertyName}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                      textAlgin: 'center',
                    }}
                  >
                    {item.Category}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    <PlaceIcon></PlaceIcon> {item.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontWeight: 800 }}
                  >
                    <AttachMoneyIcon></AttachMoneyIcon>
                    {item.Price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, fontWeight: 800 }}
                  >

                    {item.Description.length > 100
                      ? item.Description.split(' ').slice(0, 30).join(' ') +
                        '...........'
                      : item.Description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <ReusableButton
                    sx={{ width: '100%' }}
                    variant="contained"
                    color="success"
                    text=" See Details"
                    onClick={() => handelNavigate(item._id)}
                  ></ReusableButton>
                </CardActions>
              </Card>

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
