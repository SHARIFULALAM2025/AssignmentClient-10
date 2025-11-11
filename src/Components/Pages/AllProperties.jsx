import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useNavigate } from 'react-router'
import SearchFunctionality from '../Common/SearchFunctionality'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'

const AllProperties = () => {
  const [allData, setAllData] = useState([])
  const { theme } = useContext(AuthContext)
  console.log(allData)
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((result) => result.json())
      .then((data) => {
        setAllData(data)
      })
  }, [])
  const handelNavigate = (id) => {
    navigate(`/ViewProperty/${id}`)
  }
  return (
    <div>
      <Component>
        <SearchFunctionality></SearchFunctionality>
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-3 mt-5 ${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          } `}
        >
          {allData.map((item) => (
            <div key={item._id} className="bg-green-200 p-2 rounded-lg text-black">
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
              <h1 className="">{item.UserEmail}</h1>
              <button
                onClick={() => handelNavigate(item._id)}
                className="w-full px-3 py-1 bg-blue-500"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </Component>
    </div>
  )
}

export default AllProperties
