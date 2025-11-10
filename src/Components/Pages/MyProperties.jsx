import React, { useEffect, useState } from 'react';
import Component from '../Component/Component';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';
import Property from '../Common/Property';

const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [property, setProperty] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/Product/unique?email=${user.email}`)
            .then(result => result.json())
            .then(data => {
            setProperty(data)

        })
    }, [user.email])
    return (
      <div>
        <Component>
          <div className="">
            <Property property={property}></Property>
          </div>
        </Component>
      </div>
    )
};

export default MyProperties;