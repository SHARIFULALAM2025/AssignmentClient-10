import React, { useContext, useEffect, useState } from 'react'
import Component from '../Component/Component'
import { AuthContext } from '../Authentication/Auth/AuthContext'
import Swal from 'sweetalert2'
import Loading from '../Loading/Loading'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'


const AddProperties = () => {
  const { user,  } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const handelProperty = async(e) => {
    e.preventDefault()
    setLoading(true)
    const propertyInformation = {
      PropertyName: e.target.name.value,
      Description: e.target.Description.value,
      Category: e.target.Category.value,
      Price: Number(e.target.Price.value),
      location: e.target.location.value,
      photoURL: e.target.photo.value,
      UserEmail: e.target.email.value,
      UserName: e.target.displayName.value,
      PostedDate: new Date(),
    }
 const token = await user.getIdToken()
    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
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
        e.target.reset()
      })
      .finally(() => setLoading(false))
  }
  /*  */
  const [allData, setAllData] = useState([])



  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then((result) => result.json())
      .then((data) => {
        setAllData(data)
        setLoading(false)
      })
  }, [])

  const rentCount = allData.filter((item) => item.Category === 'Rent').length
  const rentSell = allData.filter((item) => item.Category === 'Sale').length
  const rentCommercial = allData.filter(
    (item) => item.Category === 'Commercial'
  ).length
  const rentLand = allData.filter((item) => item.Category === 'Land').length
  const chartData = [
    { id: 2, value: rentCommercial, label: 'Commercial', color: '#0088FE' },
    { id: 3, value: rentLand, label: 'Land', color: '#0088FE' },
    { id: 0, value: rentCount, label: 'Rent', color: '#FFBB28' },
    { id: 1, value: rentSell, label: 'Sale', color: '#FF8042' },
  ]
  const total=rentCommercial+rentLand+rentCount+rentSell
  //
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Component>
        <div className="">
          <PieChart
            series={[
              {
                data: chartData,
                arcLabel: (item) => `${((item.value/total)*100).toFixed(0)}%`,
                arcLabelMinAngle: 35,
                arcLabelRadius: '60%',
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontWeight: 'bold',
              },
            }}
           
          />
        </div>
        <div className={` mt-12 rounded-lg p-3 mb-6`}>
          <fieldset className="fieldset border p-5  rounded-xl ">
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
                    className="input w-full text-black"
                    placeholder="Enter your Property Name"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">Category</label>
                  <select
                    name="Category"
                    defaultValue="select"
                    className="select w-full text-black"
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
                    className="input w-full text-black"
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
                    className="input w-full text-black"
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
                  className="input w-full text-black"
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
                    className="input w-full text-black"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                </div>
                <div className="">
                  <label className="label"> Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input w-full text-black"
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
                  className="w-full border bg-white rounded-lg text-black"
                  rows={10}
                  placeholder="enter your property description ......"
                  required
                ></textarea>
              </div>

              <div className="grid place-content-center">
                {' '}
                <button type="submit" className="btn  px-6 btn-success py-3">
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
