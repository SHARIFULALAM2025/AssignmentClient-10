import React, { useContext, useEffect, useState } from 'react'
import Component from '../Component/Component'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import Loading from '../Loading/Loading'

const MyRatings = () => {
  const [rating, setRating] = useState([])
  const [loading, setLoading] = useState(true)

  console.log(rating)

  const { user } = useContext(AuthContext)

  useEffect(() => {
    fetch('https://assignment-10-eosin.vercel.app/rating/data', {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setRating(data)
        setLoading(false)
      })
  }, [user.accessToken])
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Component>
        <div className={` `}>
          <h1 className="text-center font-bold text-2xl">your rating</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {rating.map((item) => (
              <div
                key={item._id}
                className="hover:border hover:border-gray-300 text-black p-3 rounded-lg"
              >
                <figure>
                  <img
                    src={item.Thumbnail}
                    alt=""
                    className="w-full bg-cover h-62 rounded-xl"
                  />
                </figure>
                <div className="flex justify-between">
                  <h1 className="">{item.propertyName}</h1>
                  <h1 className="">{item.reviewerName}</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="">{item.rating}</h1>
                  <h1 className="">{item.reviewDate}</h1>
                </div>
                <div className="">
                  <p className="">{item.reviewText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Component>
    </div>
  )
}

export default MyRatings
