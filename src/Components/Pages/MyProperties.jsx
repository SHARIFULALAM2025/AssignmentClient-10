import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'

import { Link } from 'react-router'
import Swal from 'sweetalert2'


const MyProperties = () => {
  const { user } = useContext(AuthContext)
  const [property, setProperty] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/product/unique?email=${user.email}`)
      .then((result) => result.json())
      .then((data) => {
        setProperty(data)
      })
  }, [user.email])

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
  return (
    <div>
      <Component>
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
