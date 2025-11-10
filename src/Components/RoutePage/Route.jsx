import { createBrowserRouter } from "react-router"

import Home from "../Pages/Home"
import AllProperties from "../Pages/AllProperties"
import AddProperties from "../Pages/AddProperties"
import MyProperties from "../Pages/MyProperties"
import MyRatings from "../Pages/MyRatings"
import Login from "../Form/Login"
import Signup from "../Form/Signup"
import Error from "../Error/Error"
import Private from "../Authentication/PrivatePage/Private"
import UpdateProperty from "../PrivatePage/UpdateProperty"
import RootPage from "./RootPage"

const router = createBrowserRouter([
  {
    path: '/',
    Component:RootPage ,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'AllProperties',
        element: <AllProperties></AllProperties>,
      },
      {
        path: 'AddProperties',
        element: (
          <Private>
            <AddProperties></AddProperties>
          </Private>
        ),
      },
      {
        path: 'MyProperties',
        element: (
          <Private>
            <MyProperties></MyProperties>
          </Private>
        ),
      },
      {
        path: 'MyRatings',
        element: (
          <Private>
            <MyRatings></MyRatings>
          </Private>
        ),
      },
      {
        path: 'UpdateProperty/:id',
        element: (
          <Private>
            <UpdateProperty></UpdateProperty>
          </Private>
        ),
      },
      {
        path: 'Login',
        Component: Login,
      },
      {
        path: 'Signup',
        Component: Signup,
      },
    ],
  },
])
 export {router}