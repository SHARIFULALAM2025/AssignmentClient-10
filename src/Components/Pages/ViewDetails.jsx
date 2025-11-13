import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import RatingInfo from '../Common/RatingInfo'

const ViewDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  const { user, theme, loading, setLoading } = useContext(AuthContext)
  console.log(user)

  useEffect(() => {
    fetch(`https://assignment-10-eosin.vercel.app/product/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setDetails(data)
        setLoading(false)
      })
  }, [id, user.accessToken, setLoading])
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>
  }

  return (
    <div>
      <Component>
        <div
          className={`grig md:grid-cols-2 ${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
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
        <RatingInfo details={details}></RatingInfo>
      </Component>
    </div>
  )
}

export default ViewDetails
