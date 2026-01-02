import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useNavigate } from 'react-router'

import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import SearchBar from '../SearchBar/SearchBar'
import Loading from '../Loading/Loading'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ReusableButton from '../ReusableButton/ReusableButton'
const AllProperties = () => {
  const [allData, setAllData] = useState([])
  const { theme } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  console.log(allData)
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://assignment-10-eosin.vercel.app/product')
      .then((result) => result.json())
      .then((data) => {
        setAllData(data)
        setLoading(false)
      })
  }, [])
  const handelNavigate = (id) => {
    navigate(`/ViewProperty/${id}`)
  }
  const handelSearch = (e) => {
    e.preventDefault()
    const PropertyName = e.target.search.value
    console.log(PropertyName)
    setLoading(true)
    fetch(
      `https://assignment-10-eosin.vercel.app/search?search=${PropertyName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllData(data)
        setLoading(false)
      })
  }
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Component>
        <div
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/V0Q6wNJG/image-21.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="h-72 relative"
        >
          <div className="absolute md:left-1/2 top-24">
            <form onSubmit={handelSearch} className="">
              <div className="flex">
                {/* <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="w-full rounded-full outline-none bg-transparent"
                /> */}
                <SearchBar></SearchBar>
                <button className="md:btn px-3 py-2 bg-green-500 rounded md:btn-primary ">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-5 gap-3 mt-5 ${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          } `}
        >
          {allData.map((item, index) => (
            <Card sx={{ maxWidth: 345 }} key={index}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.photoURL}
                title="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  sx={{ textAlgin: 'center' }}
                  component="div"
                >
                  {item.PropertyName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.Category}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.location}
                </Typography>
              </CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.Price}
              </Typography>
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
            // <div
            //   key={item._id}
            //   className="bg-green-200 p-2 rounded-lg text-black"
            // >
            //   <figure>
            //     <img
            //       src={item.photoURL}
            //       alt=""
            //       className="bg-cover w-full h-62"
            //     />
            //   </figure>
            //   <div className="flex justify-between items-center">
            //     <h1 className="">{item.PropertyName}</h1>
            //     <h2 className="">{item.Category}</h2>
            //   </div>
            //   <div className="flex justify-between items-center">
            //     <h1 className="">{item.Price}</h1>
            //     <h2 className="">{item.location}</h2>
            //   </div>
            //   <h1 className="">{item.UserEmail}</h1>
            //   <button
            //     onClick={() => handelNavigate(item._id)}
            //     className="w-full px-3 py-1 bg-blue-500"
            //   >
            //     See Details
            //   </button>
            // </div>
          ))}
        </div>
      </Component>
    </div>
  )
}

export default AllProperties
