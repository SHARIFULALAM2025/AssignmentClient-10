import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useNavigate } from 'react-router'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import SearchBar from '../SearchBar/SearchBar'
import Loading from '../Loading/Loading'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PlaceIcon from '@mui/icons-material/Place'
import Typography from '@mui/material/Typography'
import ReusableButton from '../ReusableButton/ReusableButton'
const AllProperties = () => {
  const [allData, setAllData] = useState([])
  const { theme } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  console.log(allData)
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:5000/product')
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
    fetch(`http://localhost:5000/search?search=${PropertyName}`)
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
          {allData.map((item) => (
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
      </Component>
    </div>
  )
}

export default AllProperties
