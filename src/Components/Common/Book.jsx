import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';

const Book = () => {
    const {theme}=useContext(AuthContext)
    return (
      <div
        className={`${
          theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div className="md:flex justify-between items-center gap-3">
          <div className="">
            <figure>
              <img
                src="https://i.ibb.co.com/9kMgt1BF/undraw-Mobile-feed-re-72ta-1.png"
                alt=""
                className="w-full object-cover"
              />
            </figure>
            <h1 className="md:text-2xl font-bold">
              Trade anywhere with our mobile and online portal
            </h1>
          </div>
          <div className="">
            <fieldset className="fieldset border p-5  rounded-xl ">
              <legend className="p-1 border rounded-xl text-xs md:text-2xl">
                Book Property
              </legend>
              <form className="space-y-5">
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
                <div className="grid gap-5 grid-cols-2 items-center ">
                  {' '}
                  <div className="">
                    <label className="label">Mobile:</label>
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

                <div className="grid gap-5 grid-cols-2 items-center ">
                  {' '}
                  <div className="">
                    <label className="label"> Name</label>
                    <input
                      name="displayName"
                      type="text"
                      className="input w-full text-black"
                    />
                  </div>
                  <div className="">
                    <label className="label"> Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input w-full text-black"
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
                    Submit
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    )
};

export default Book;