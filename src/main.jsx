import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import AuthProvider from './Providers/AuthProvider';
import NavBar from './Pages/NavBar/NavBar';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AllJobs from './Pages/AllJobs/AllJobs'
import AppliedJobs from './Pages/ApplierJobs/ApplierJobs'
import AddJobs from './Pages/AddJobs/AddJobs'
import MyJobs from './Pages/MyJobs/MyJobs'
import Blogs from './Pages/Blogs/Blogs'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ViewDetails from './Pages/ViewDetails/ViewDetails';
import UpdateJob from './Pages/UpdateJob/UpdateJob';
import PrivateRoute from './Pages/PrivateRoutes/PrivateRoutes';
import ViewDetails2 from './Pages/ViewDetails/ViewDetails2';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/navbar',
        element: <NavBar></NavBar>
      },
      {
        path: '/footer',
        element: <Footer></Footer>,
      },
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/alljobs',
        element: <AllJobs></AllJobs>,
      },
      {
        path: '/appliedjobs',
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
      },
      {
        path: '/addjob',
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
      },
      {
        path: '/myjobs',
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/updatejob/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({params}) => fetch(`https://assignment-11-server-gray-one.vercel.app/joblisted/${params.id}`)
      },
      {
        path: '/viewdetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-gray-one.vercel.app/joblisted/${params.id}`)
      },

      {
        path: '/viewdetails2/:id',
        element: <PrivateRoute><ViewDetails2></ViewDetails2></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-gray-one.vercel.app/appliedjob/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
    </QueryClientProvider>
   
  </React.StrictMode>,
)
