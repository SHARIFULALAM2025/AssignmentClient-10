import React, { useEffect, useState } from 'react';
import Component from '../Component/Component';

const MyRatings = () => {
    const [rating, setRating] = useState([])
    console.log(rating);



    useEffect(() => {
        fetch('http://localhost:5000/rating').then(result => result.json()).then(data => {
            setRating(data)

        })
    },[])
    return (
      <div>
        <Component>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {rating.map((item) => (
              <div key={item._id}>
                <figure>
                  <img
                    src={item.Thumbnail}
                    alt=""
                    className="w-full bg-cover h-62"
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
        </Component>
      </div>
    )
};

export default MyRatings;