import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import Error from "../../Pages/Error/Error";
import About from "../../Pages/Home/About/About";
import Blog from "../../Pages/Home/Blog/Blog";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Projects from "../../Pages/Home/Projects/Projects";



const router = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/projects',
        element:<Projects/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ] 
  },
  {
    path:'*',
    element:<Error/>
  }
])


export default router;