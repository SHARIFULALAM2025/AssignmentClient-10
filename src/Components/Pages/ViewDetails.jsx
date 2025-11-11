import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'

const ViewDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  const { user } = useContext(AuthContext)
  console.log(user)

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setDetails(data)
      })
  }, [id])

  return (
    <div>
      <Component>
        <div className="grig grid-cols-2">
          <div className="">
            <figure>
              <img src={details.photoURL} alt="" className="" />
            </figure>
          </div>
          <div className="">
            <h1 className="">{details.PropertyName}</h1>
            <p className="">{details.Description}</p>
            <h1 className="">{details.Price}</h1>
            <h1 className="">{details.location}</h1>
            <h1 className="">{details.PostedDate}</h1>
            <h1 className="">{user.displayName}</h1>
            <h1 className="">{user.email}</h1>
            <img src={user?.photoURL} alt="" className="" />
          </div>
        </div>
      </Component>
    </div>
  )
}

export default ViewDetails
