
import Header from './components/Component/Header/Header';
import Registration from './components/Component/Registration/Registration';
import Footer from './components/Component/Footer/Footer';
import Navbar from './components/Component/Navbar/Navbar';
import Home from './components/Component/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Component/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Balance from './components/Component/Balance/Balance';
import AddDepartment from './components/AdminDashboard/AddDepartment';
import AddAdmin from './components/AdminDashboard/AddAdmin/AddAdmin';
import AdminLogin from './components/AdminDashboard/AdminLogin/AdminLogin';


  
function App() {
  const router =createBrowserRouter([

  {path:'/',element:<Home></Home>},
  {path:'/home',element:<Home></Home>},
  {path:'/registration',element:<Registration></Registration>},
  {path:'/login',element:<Login></Login>},
  {path:'/navbar',element:<Navbar></Navbar>},
  {path:'/dashboard',element:<Dashboard></Dashboard>},
  {path:'/Balance',element:<Balance></Balance>},
  {path:'/addDepartment',element:<AddDepartment></AddDepartment>},
  {path:'/addAdmin',element:<AddAdmin></AddAdmin>},
  {path:'/adminLogin',element:<AdminLogin></AdminLogin>},

  ])


  return (
    
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
