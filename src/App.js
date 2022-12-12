import { RouterProvider } from 'react-router-dom';
import './App.css';
import Particle from './Pages/config/Particle';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Particle/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
