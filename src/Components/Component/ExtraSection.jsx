import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth/AuthContext';

const ExtraSection = () => {
    const {theme}=useContext(AuthContext)
    return (
      <div
        className={` ${
          theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
        } `}
      >
        <h1 className="text-center md:text-2xl text-red-600">Quality Policy</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
          <div
            className={`${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
            }bg-[#D9F1FF]  rounded-lg`}
          >
            <div className="p-4 text-center">
              <img
                src="https://i.ibb.co.com/TqBLSM9C/Group.png"
                alt=""
                className="mx-auto"
              />
              <h1 className="">Dedication</h1>
              <p className="">
                Etiam sit amet placerat sapien. Maecenas vel elementum dui.
                Integer pharetra interdum neque, a auctor libero ultrices a.
                Quisque turpis erat, tempus tincidunt pharetra eget, auctor ut
                turpis. Curabitur egestas turpis aliquam, tempor risus ut,
                lacinia purus.
              </p>
            </div>
          </div>
          <div
            className={`${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
            }bg-[#D9F1FF]  rounded-lg`}
          >
            <div className="p-4 text-center">
              <img
                src="https://i.ibb.co.com/0yhWGsnZ/Group-16.png"
                alt=""
                className="mx-auto"
              />
              <h1 className="">Efficiency</h1>
              <p className="">
                usce sed consectetur erat. Suspendisse eu elit mauris. Integer
                eget consequat urna, in interdum purus. Nullam nibh purus,
                viverra sed porta vitae, varius nec risus. Phasellus varius
                risus nisi, non pulvinar sapien.
              </p>
            </div>
          </div>
          <div
            className={`${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
            }bg-[#D9F1FF]  rounded-lg`}
          >
            <div className="p-4 text-center">
              <img
                src="https://i.ibb.co.com/vvmVSwnk/Group-17.png"
                alt=""
                className="mx-auto"
              />
              <h1 className="">Valuation</h1>
              <p className="">
                Donec blandit augue quis arcu porta, sit amet tempor massa
                eleifend. Sed cursus tempus felis at convallis. Aenean
                ultricies, magna a eleifend auctor, tellus justo pretium risus,
                eu vehicula libero enim a quam. Aliquam mollis quis justo non
                tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default ExtraSection;