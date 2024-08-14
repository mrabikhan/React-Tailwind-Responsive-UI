import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Products from './components/Products.jsx'
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='product' element={<Products />}/>
      <Route path='signin' element={<Signin />}/>
      <Route path='signup' element={<Signup />}/>
      <Route path='user/:userid' element={<User />}/>
    </Route>
  )
  // [
  // {
  //   path:'/',
  //   element:<Layout />,
  //   children:[
  //     {
  //       path:'',
  //       element:<Home />
  //     },
  //     {
  //       path:'product',
  //       element:<Products />
  //     },
  //     {
  //       path:'about',
  //       element:<About />
  //     },
  //     {
  //       path:'contact',
  //       element:<Contact />
  //     },
  //     {
  //       path:'signin',
  //       element:<Signin />
  //     },
  //     {
  //       path:'signup',
  //       element:<Signup />
  //     }
  //   ]
  // }
  // ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
