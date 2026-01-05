import React from 'react'
import Component from '../Component/Component'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate'
import DiscountIcon from '@mui/icons-material/Discount'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory'
import ReusableButton from '../ReusableButton/ReusableButton'
const About = () => {
  return (
    <Component>
      <div className="space-y-10 bg-stone-50">
        <div className="space-y-3">
          <div className="text-center">
            <h1 className="">We are proud of our products</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className="flex justify-center-safe gap-3">
            <figure>
              <img
                src="https://i.ibb.co.com/21P5Bc0Z/person-using-macbook-pro-3861964.png"
                alt=""
                className=""
              />
            </figure>
            <figure>
              <img
                src="https://i.ibb.co.com/ybgbjNq/man-working-from-home-5198252.png"
                alt=""
                className=""
              />
            </figure>
            <figure>
              <img
                src="https://i.ibb.co.com/tTWhmJdV/people-working-in-front-of-the-computer-3184357.png"
                alt=""
                className=""
              />
            </figure>
          </div>
        </div>
        <div className="text-center space-y-3">
          <h1 className=" bg-linear-to-r from-[#373FFF] to-[#3ACAF8] bg-clip-text text-transparent">
            About Us
          </h1>
          <h2 className="">We’re a team of data analysts</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="md:flex justify-center-safe gap-5">
          <div className="p-3">
            <h1 className="">Our Goals</h1>
            <h2 className="">To upscale your business to the next level</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="p-3">
            <h1 className="">Our Vision</h1>
            <h2 className="">To provide solutions for growing companies</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-center">Our corporate values</h1>
          <h2 className="text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div className="p-3">
              <AssignmentLateIcon></AssignmentLateIcon>
              <h1 className="">Best in Class</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="p-3">
              <LocalPoliceIcon></LocalPoliceIcon>
              <h1 className="">Authenticity</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="p-3">
              <MarkEmailReadIcon></MarkEmailReadIcon>
              <h1 className="">Email Support</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="p-3">
              <DiscountIcon></DiscountIcon>
              <h1 className="">Discounts Available </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="p-3">
              <AddBusinessIcon></AddBusinessIcon>
              <h1 className="">Powerful Marketing</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="p-3">
              <ManageHistoryIcon></ManageHistoryIcon>
              <h1 className="">Inventory management</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          <div>
            <h1 className="">Our talented Team</h1>
            <h1 className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore.
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div className="">
              <figure>
                <img
                  src="https://i.ibb.co.com/KzwLX5DK/woman-wearing-eyeglasses-1878522.png"
                  alt=""
                  className=""
                />
              </figure>
              <h1 className="">Blake Matthews</h1>
              <h1 className="">CEO & Co-Founder</h1>
            </div>
            <div className="">
              <figure>
                <img
                  src="https://i.ibb.co.com/kj9kqWX/man-in-brown-button-up-shirt-3785079.png"
                  alt=""
                  className=""
                />
              </figure>
              <h1 className="">Jack Newman</h1>
              <h1 className="">CTO</h1>
            </div>
            <div className="">
              <figure>
                <img
                  src="https://i.ibb.co.com/MDYw4xZN/man-wearing-blue-crew-neck-t-shirt-2379005.png"
                  alt=""
                  className=""
                />
              </figure>
              <h1 className="">Sarinia Martins</h1>
              <h1 className="">Marketing</h1>
            </div>
            <div className="">
              {' '}
              <figure>
                <img
                  src="https://i.ibb.co.com/KjHdHjGV/photography-of-a-guy-wearing-green-shirt-1222271.png"
                  alt=""
                  className=""
                />
              </figure>
              <h1 className="">Spencer Wright</h1>
              <h1 className="">Project management</h1>
            </div>
            <div className="">
              <figure>
                <img
                  src="https://i.ibb.co.com/RGhbrVgm/woman-smiling-at-the-camera-1181686.png"
                  alt=""
                  className=""
                />
              </figure>
              <h1 className="">Caroline Ming</h1>
              <h1 className="">Sales</h1>
            </div>
            <div className="">
              <figure>
                <img
                  src="https://i.ibb.co.com/q358JnRv/woman-in-collared-shirt-774909.png"
                  alt=""
                  className=""
                />
              </figure>
              <h1 className="">Anna Mills</h1>
              <h1 className="">Design lead</h1>
            </div>
          </div>
        </div>
        <div className="text-center space-y-3 md:mb-5">
          <h1 className="">Are you ready to grow your business with us?</h1>
          <h2 className="">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </h2>
          <ReusableButton text="View Pricing" variant="contained"></ReusableButton>
        </div>
      </div>
    </Component>
  )
}

export default About
