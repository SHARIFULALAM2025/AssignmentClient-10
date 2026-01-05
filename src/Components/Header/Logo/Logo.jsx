import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
      <div>
        <div className="">
          <Link to="/" className="flex items-center ">
            <figure>
              <img
                src="/download.png"
                alt=""
                className="md:w-12 space-x-3 md:h-12 w-10 h-10 rounded-full"
              />
            </figure>
            <h1 className="md:text-2xl font-bold bg-linear-to-r from-[#373FFF] to-[#3ACAF8] bg-clip-text text-transparent">
              HomeNest
            </h1>
          </Link>
        </div>
      </div>
    )
};

export default Logo;