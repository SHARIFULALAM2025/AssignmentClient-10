import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Component from '../Component/Component'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import { toast, ToastContainer } from 'react-toastify'

const UpdateProperty = () => {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [show, setShow] = useState({})
  const navigate = useNavigate()

  console.log(show)

  const handelUpdate = (e) => {
    e.preventDefault()
    const updateData = {
      PropertyName: e.target.name.value,
      Description: e.target.Description.value,
      Category: e.target.Category.value,
      Price: e.target.Price.value,
      location: e.target.location.value,
      photoURL: e.target.photo.value,
      UserEmail: e.target.email.value,
      UserName: e.target.displayName.value,
      PostedDate: new Date(),
    }
    fetch(`http://localhost:5000/product/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        toast.success('updates in MongoDB ')
        setTimeout(() => {
          navigate('/MyProperties', { state: true })
        }, 500)
      })
  }

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((result) => result.json())
      .then((data) => {
        setShow(data)
      })
  }, [id])

  return (
    <div>
      <Component>
        <div className="">
          <fieldset className="fieldset border p-5  rounded-xl">
            <legend className="p-1 border rounded-xl text-xs md:text-2xl">
              Update your Property
            </legend>
            <form onSubmit={handelUpdate} className="space-y-5">
              <div className="grid gap-5 grid-cols-2 items-center ">
                {' '}
                <div className="">
                  <label className="label">Property Name:</label>
                  <input
                    name="name"
                    type="text"
                    className="input w-full"
                    placeholder="Enter your Property Name"
                    defaultValue={show.PropertyName}
                    required
                  />
                </div>
                <div className="">
                  <label className="label">Category</label>
                  <select
                    name="Category"
                    defaultValue={show.Category}
                    className="select w-full"
                    required
                  >
                    <option disabled={true}>select</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Land">Land</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-5 grid-cols-2 items-center ">
                {' '}
                <div className="">
                  <label className="label">Price:</label>
                  <input
                    name="Price"
                    type="number"
                    className="input w-full"
                    placeholder="enter your property price"
                    defaultValue={show.Price}
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="">Location:</label>
                  <br></br>
                  <input
                    name="location"
                    type="text"
                    className="input w-full"
                    placeholder=" enter your (city, area, or address)"
                    defaultValue={show.location}
                    required
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="" className="label">
                  Your property Image URL
                </label>
                <br></br>
                <input
                  name="photo"
                  type="text"
                  className="input w-full"
                  placeholder="https:// your property  url ..."
                  defaultValue={show.photoURL}
                  required
                />
              </div>
              <div className="grid gap-5 grid-cols-2 items-center ">
                {' '}
                <div className="">
                  <label className="label"> Name</label>
                  <input
                    name="displayName"
                    type="text"
                    className="input w-full"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                </div>
                <div className="">
                  <label className="label"> Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input w-full"
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="">Description:</label>
                <br></br>
                <textarea
                  name="Description"
                  id=""
                  className="w-full border "
                  rows={10}
                  placeholder="enter your property description ......"
                  defaultValue={show.Description}
                  required
                ></textarea>
              </div>

              <div className="grid place-content-center">
                {' '}
                <button type="submit" className="btn btn-neutral px-6 py-3">
                  Update Property
                </button>
              </div>
            </form>
          </fieldset>
          <ToastContainer />
        </div>
      </Component>
    </div>
  )
}

export default UpdateProperty
