import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cameracorner from "../../Pages/Details/Cameracorner";
import Creativephotography from "../../Pages/Details/Creativephotography";
import Skillshare from "../../Pages/Details/Skillshare";

import Error from "../../Pages/Error/Error";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";




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
        path:'/blog',
        element:<Blog/>
      },
    
      {
        path:'/skillshare',
        element:<Skillshare/>
      },
    
      {
        path:'/cameracorner',
        element:<Cameracorner/>
      },
    
      {
        path:'/creativephotography',
        element:<Creativephotography/>
      },
    
    ] 
  },
  {
    path:'*',
    element:<Error/>
  }
])


export default router;