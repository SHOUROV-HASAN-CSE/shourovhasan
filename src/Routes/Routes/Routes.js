import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../../Pages/Error/Error";
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
    ] 
  },
  {
    path:'*',
    element:<Error/>
  }
])


export default router;