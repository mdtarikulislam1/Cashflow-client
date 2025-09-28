import { createBrowserRouter } from 'react-router'
import Rootlayouts from '../Layout/Rootlayouts'
import AddData from '../Pages/AddData'
import Cashflow from '../Pages/Cashflow'
import Error from '../Pages/Error'
import About from '../Pages/About'
import Home from '../Pages/Home'

export const  router = createBrowserRouter([
     {
        path: '/',
        Component: Rootlayouts,
        errorElement: <Error></Error>,
        children: [
            {
                index : true,
                Component:Home
            },
            {
                path : '/Cashflow',
                Component: Cashflow
            },
            {
                path : '/about',
                Component: About
            },
            {
                path : '/addData',
                Component: AddData
            },
        ]
     }
])