import React from 'react';
import { useContext } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa'
import { AuthContext } from '../Authentication/Auth/AuthContext';

const Choose = () => {
const {theme}=useContext(AuthContext)
    return (
      <div
        className={`${
          theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <div className="md:flex justify-between items-center gap-6">
          <div className="">
            <figure>
              <img
                src="https://i.ibb.co.com/4RHjjGQz/Photo.png"
                alt=""
                className="w-full object-cover"
              />
            </figure>
          </div>
          <div className="">
            <h1 className="text-[#AF0800] md:text-3xl font-bold">
              trust is everything
            </h1>
            <p className="">
              At HomeNest, we understand that finding the perfect home is more
              than just a transaction – it’s a life-changing experience. That’s
              why we are committed to making your property journey smooth,
              transparent, and rewarding.
            </p>
            <div className="">
              <ol>
                <li>
                  <span className="text-green-700 font-bold text-xl">
                    {' '}
                    Extensive Property Options:
                  </span>{' '}
                  Whether you’re looking to rent, buy, invest in commercial
                  spaces, or acquire land, we provide a wide selection of
                  properties to meet diverse needs.
                </li>
                <li>
                  <span className="text-green-700 font-bold text-xl">
                    {' '}
                    Verified Listings:
                  </span>{' '}
                  All our listings are thoroughly verified, so you can browse
                  with confidence, knowing that every property meets quality and
                  legitimacy standards.
                </li>
                <li>
                  <span className="text-green-700 font-bold text-xl">
                    User-Friendly Platform:{' '}
                  </span>
                  Our intuitive interface allows you to easily search, filter,
                  and compare properties, making your decision-making process
                  fast and simple
                </li>
                <li>
                  <span className="text-green-700 font-bold text-xl">
                    Expert Guidance:
                  </span>
                  Our team of real estate experts is always ready to provide
                  advice and support, helping you find the property that
                  perfectly matches your requirements.
                </li>
                <li>
                  <span className="text-green-700 font-bold text-xl">
                    Secure Transactions:
                  </span>{' '}
                  Safety and privacy are our top priorities. Our platform
                  ensures secure communication and smooth transactions between
                  buyers, sellers, and renters
                </li>
                <li>
                  <span className="text-green-700 font-bold text-xl">
                    {' '}
                    Customer Satisfaction:
                  </span>{' '}
                  Your satisfaction drives us. We aim to deliver a seamless
                  experience from property search to final acquisition, ensuring
                  that your journey with HomeNest is enjoyable and stress-free.
                </li>
              </ol>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCheckCircle></FaRegCheckCircle>
              <h1 className="text-red-700 font-bold">
                18+ Years of Experience
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCheckCircle></FaRegCheckCircle>
              <h1 className="text-red-700 font-bold">
                Quality Services and Expertise
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <FaRegCheckCircle></FaRegCheckCircle>
              <h1 className="text-red-700 font-bold">
                Skilled, Trained and Experienced Staff
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Choose;