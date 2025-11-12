import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
     const navigate = useNavigate()
     const handel = () => {
       navigate('/')
     }
    return (
      <div>
        <div className="text-center">
          <img src="/error-404.png" alt="" className="mx-auto" />
          <h1 className="text-2xl font-bold">page not found go back home</h1>
          <button onClick={handel} className="btn btn-lg btn-success">
            Back
          </button>
        </div>
      </div>
    )
};

export default Error;