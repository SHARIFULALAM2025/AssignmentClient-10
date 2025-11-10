import React, { useContext } from 'react'
import Component from '../Component/Component'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import Swal from 'sweetalert2'


const AddProperties = () => {
  const { user } = useContext(AuthContext)
  const handelProperty = (e) => {
    e.preventDefault()
    const propertyInformation = {
      PropertyName: e.target.name.value,
      Description: e.target.Description.value,
      Category: e.target.Category.value,
      Price: e.target.Price.value,
      location: e.target.location.value,
      photoURL: e.target.photo.value,
      UserEmail: e.target.email.value,
      UserName: e.target.displayName.value,
      PostedDate: new Date()
    }
      fetch('http://localhost:5000/Product', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(propertyInformation),
      })
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            Swal.fire({
              title: 'Your Property Successfully Added.',
              icon: 'success',
              draggable: true,
            })
            e.target.reset();

        })
  }

  return (
    <div>
      <Component>
        <div className="">
          <fieldset className="fieldset border p-5  rounded-xl">
            <legend className="p-1 border rounded-xl text-xs md:text-2xl">
              Add your Property
            </legend>
            <form onSubmit={handelProperty} className="space-y-5">
              <div className="grid gap-5 grid-cols-2 items-center ">
                {' '}
                <div className="">
                  <label className="label">Property Name:</label>
                  <input
                    name="name"
                    type="text"
                    className="input w-full"
                    placeholder="Enter your Property Name"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">Category</label>
                  <select
                    name="Category"
                    defaultValue="select"
                    className="select w-full"
                    required
                  >
                    <option disabled={true}>select</option>
                    <option>Rent</option>
                    <option>Sale</option>
                    <option>Commercial</option>
                    <option>Land</option>
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
                 required
                ></textarea>
              </div>

              <div className="grid place-content-center">
                {' '}
                <button type="submit" className="btn btn-neutral px-6 py-3">
                  Add Property
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </Component>
    </div>
  )
}

export default AddProperties
