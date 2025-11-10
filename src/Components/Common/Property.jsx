import React from 'react';
import { Link } from 'react-router';



const Property = ({ property }) => {


    return (
      <div className="grid grid-cols-4 gap-4">
        {property.map((item) => (
          <div
            key={item._id}
            className="bg-[#F1FAFF] p-5 space-y-3 shadow-md rounded-md"
          >
            <h1 className="text-[#004972] font-bold">{item.PropertyName}</h1>
            <div className="flex justify-between">
              <button> {item.Category}</button>
              <button> {item.Price}</button>
            </div>
            <div className="flex justify-between">
              <button> {item.location}</button>
              <button> {item.PostedDate}</button>
            </div>
            <div className="flex justify-between">
              <Link
                to={`/UpdateView/${item._id}`}
                className="bg-[#7B3FFF] rounded-full px-3 py-1 text-white"
              >
                Update
              </Link>
              <button className="bg-[#004972] rounded-full px-3 py-1 text-white">
                View Details
              </button>
              <button className="bg-[#AF0800] rounded-full px-3 py-1 text-white">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Property;