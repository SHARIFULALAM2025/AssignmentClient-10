import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useNavigate } from 'react-router'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

import SearchBar from '../SearchBar/SearchBar'
import Loading from '../Loading/Loading'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PlaceIcon from '@mui/icons-material/Place'
import Typography from '@mui/material/Typography'
import ReusableButton from '../ReusableButton/ReusableButton'
import Pagination from '@mui/material/Pagination'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const AllProperties = () => {
  const [allData, setAllData] = useState([])

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
  /* patination  */
  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 5
  const indexOfLastItem = currentPage * itemPerPage
  const indexOfFastItem = indexOfLastItem - itemPerPage
  const CurrentItem = allData.slice(indexOfFastItem, indexOfLastItem)
  const totalPage = Math.ceil(allData.length / itemPerPage)
  const handelPerPage = (event, value) => {
    setCurrentPage(value)
  }
  /* sorting */

  const [Order, setOrder] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    setOrder(value)
    let sortedData = [...allData]
    if (value === 'Low to High') {
      sortedData.sort((a, b) => a.Price - b.Price)
    } else if (value === 'High to Low') {
      sortedData.sort((a, b) => b.Price - a.Price)
    }
    setAllData(sortedData)
    setCurrentPage(1)
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
                <SearchBar></SearchBar>
                <button className="md:btn px-3 py-2 bg-green-500 rounded md:btn-primary ">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Price
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={Order}
              onChange={handleChange}
              label="Price"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Low to High">Low to High</MenuItem>
              <MenuItem value="High to Low">High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-5 gap-3 mt-5`}>
          {CurrentItem.map((item) => (
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
        <div className=" mt-5 mb-5 flex justify-center items-center">
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handelPerPage}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </div>
      </Component>
    </div>
  )
}

export default AllProperties
