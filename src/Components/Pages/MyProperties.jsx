import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'

import { Link } from 'react-router'
import Swal from 'sweetalert2'

const MyProperties = () => {
  const { user, theme } = useContext(AuthContext)
  const [property, setProperty] = useState([])
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/product/unique?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setProperty(data)
        setLoading(false)
      })
  }, [user.email, user.accessToken])

  const handelDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/product/${id}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
            method: 'DELETE',
          })
            .then((result) => result.json())
            .then(() => {
              setProperty(property.filter((item) => item._id !== id))
              swalWithBootstrapButtons.fire({
                title: 'Deleted!',
                text: 'Your properties has been deleted.',
                icon: 'success',
              })
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary properties is safe :)',
            icon: 'error',
          })
        }
      })
  }
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>
  }
  return (
    <div>
      <Component>
        <div
          className={`${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          } grid grid-cols-1 md:grid-cols-4 gap-4`}
        >
          {property.map((item) => (
            <div
              key={item._id}
              className="bg-green-200 text-black p-5 space-y-3 shadow-md rounded-md"
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
                <Link
                  to={`/ViewProperty/${item._id}`}
                  className="bg-[#004972] rounded-full px-3 py-1 text-white"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handelDelete(item._id)}
                  className="bg-[#AF0800] rounded-full px-3 py-1 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </Component>
    </div>
  )
}

export default MyProperties
