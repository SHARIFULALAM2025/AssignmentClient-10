import React, { useEffect, useState } from 'react';
import Component from '../Component/Component';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';
import { useNavigate } from 'react-router';

const Home = () => {
    const [newProperty, setNewProperty] = useState([])
    const { theme } = useContext(AuthContext)
    const navigate=useNavigate()
console.log(newProperty)


    useEffect(() => {
        fetch('http://localhost:5000/home/date').then(result => result.json())
            .then(data => {
            setNewProperty(data)

        })

    }, [])
    const handelNavigate = (id) => {
      navigate(`/ViewProperty/${id}`)
    }
    return (
      <div>
        <Component>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 ${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
            } `}
          >
            {newProperty.map((item) => (
              <div
                key={item._id}
                className="bg-green-200 p-2 rounded-lg text-black"
              >
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
                <h1 className="">
                  {item.Description.length > 100
                    ? item.Description.split(" ").slice(0, 50).join(" ") + '...........'
                    : item.Description}
                </h1>
                <button
                  onClick={() => handelNavigate(item._id)}
                  className="w-full px-3 py-1 bg-blue-500"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </Component>
      </div>
    )
};

export default Home;