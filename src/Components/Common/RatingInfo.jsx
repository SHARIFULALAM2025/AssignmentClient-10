import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import { useNavigate } from 'react-router'

const RatingInfo = ({ details }) => {
  const navigate = useNavigate()
  const { user, theme } = useContext(AuthContext)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const handelRating = (e) => {
    e.preventDefault()
    if (rating === 0) {
      toast.error('please select a rating')
      return
    }
    const RatingInfo = {
      reviewerName: user?.displayName,
      reviewerEmail: user?.email,
      propertyId: details._id,
      propertyName: details.PropertyName,
      rating,
      reviewText: review,
      reviewDate: new Date(),
      Thumbnail: details.photoURL,
    }

    fetch('http://localhost:5000/rating', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(RatingInfo),
    })
      .then((result) => result.json())
      .then(() => {
        toast.success('your feedback has been submitted ')
        setRating(0)
        setReview('')

        setTimeout(() => {
          navigate('/AllProperties', { state: true })
        }, 1000)
      })
      .catch(() => toast.error('somthing went worng.'))
  }
  return (
    <div
      className={`grig md:grid-cols-2  ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <fieldset className="fieldset border  rounded-xl p-1">
        <legend className="p-1 border rounded-xl text-xs md:text-2xl">
          your feedback
        </legend>
        <form onSubmit={handelRating} className="">
          <div className="flex justify-center items-center">
            <div className="">
              {' '}
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    type="radio"
                    key={star}
                    checked={rating === star}
                    name="rating-4"
                    className="mask mask-star-2 bg-yellow-400"
                    aria-label={`${star}star`}
                    onChange={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <label htmlFor="">Description:</label>
            <br></br>
            <textarea
              name="Description"
              id=""
              onChange={(e) => setReview(e.target.value)}
              value={review}
              className="w-full border "
              rows={10}
              placeholder="enter your property description ......"
              required
            ></textarea>
          </div>

          <div className="grid place-content-center">
            {' '}
            <button type="submit" className="btn btn-success px-6 py-3">
              submit
            </button>
          </div>
        </form>
      </fieldset>
      <ToastContainer />
    </div>
  )
}

export default RatingInfo
