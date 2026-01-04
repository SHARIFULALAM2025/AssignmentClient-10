import React, { useEffect, useState } from 'react'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import UpdateIcon from '@mui/icons-material/Update'
import { Link } from 'react-router'
import Swal from 'sweetalert2'
import Loading from '../Loading/Loading'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
const MyProperties = () => {
  const { user } = useContext(AuthContext)
  const [property, setProperty] = useState([])
  const [loading, setLoading] = useState(true)

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
    return <Loading></Loading>
  }
  return (
    <div>
      <Component>
        <div
          className={` grid grid-cols-1 md:grid-cols-4 gap-4`}
        >
          {property.map((item) => (
            <div
              key={item._id}
              className=" text-black p-5 space-y-3 shadow-md rounded-md hover:border hover:border-gray-300"
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
                <Link to={`/UpdateView/${item._id}`}>
                  <Tooltip title="update" arrow>
                    <IconButton aria-label="update">
                      <UpdateIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
                <Link to={`/ViewProperty/${item._id}`}>
                  <Tooltip title="view details" arrow>
                    <IconButton aria-label="update">
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </Link>
                <Tooltip title="Delete" arrow>
                  <IconButton
                    onClick={() => handelDelete(item._id)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </Component>
    </div>
  )
}

export default MyProperties
