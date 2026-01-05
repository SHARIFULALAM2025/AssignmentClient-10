import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import RatingInfo from '../Common/RatingInfo'
import Loading from '../Loading/Loading'

const ViewDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  const { user, theme, loading, setLoading } = useContext(AuthContext)
  console.log(user)

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`, {
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
    return <Loading></Loading>
  }

  return (
    <div>
      <Component>
        <div
          className={`grid md:grid-cols-2 gap-5 ${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <div className="">
            <figure>
              <img
                src={details.photoURL}
                alt=""
                className="h-80 object-cover w-full rounded-xl"
              />
            </figure>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{details.PropertyName}</h1>
            <p className="text-xs">{details.Description}</p>
            <div className="md:flex justify-between items-center">
              <div className="">
                <h1 className="font-bold text-pink-600">{details.Price} taka</h1>
                <h1 className="">{details.location}</h1>
                <h1 className="">{details.PostedDate}</h1>
              </div>
              <div className="flex gap-2 items-center ">
                <div className="">
                  {' '}
                  <h1 className="">{user.displayName}</h1>
                  <h1 className="">{user.email}</h1>
                </div>
                <img src={user?.photoURL} alt="" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <RatingInfo details={details}></RatingInfo>
      </Component>
    </div>
  )
}

export default ViewDetails
