

import Registration from './components/Component/Registration/Registration';
import Navbar from './components/Component/Navbar/Navbar';
import Home from './components/Component/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Component/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Balance from './components/Component/Balance/Balance';
import AddDepartment from './components/AdminDashboard/AddDepartment';
import AddAdmin from './components/AdminDashboard/AddAdmin/AddAdmin';
import AdminLogin from './components/AdminDashboard/AdminLogin/AdminLogin';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ManagePayment from './components/AdminDashboard/ManagePayment';
import ShowDepartment from './components/AdminDashboard/ShowDepartment';
import TeacherList from './components/AdminDashboard/TeacherList';
import AddTeacher from './components/AdminDashboard/AddTeacher';
import Payment from './components/Component/Payment/Payment';
import DisplayError from './components/Component/Payment/DisplayError/DisplayError';
import PaymentReceive from './components/Component/Payment/PaymentReceive';
import ManageStudent from './components/Dashboard/ManageStudent/ManageStudent';





function App() {
  const router = createBrowserRouter([

    { errorElement: <DisplayError></DisplayError> },
    { path: '/', element: <Home></Home> },
    { path: '/home', element: <Home></Home> },
    { path: '/registration', element: <Registration></Registration> },
    { path: '/login', element: <Login></Login> },
    { path: '/navbar', element: <Navbar></Navbar> },
    { path: '/dashboard', element: <Dashboard></Dashboard> },
    { path: '/Balance/:id', element: <Balance></Balance> },
    { path: '/addDepartment', element: <AddDepartment></AddDepartment> },
    { path: '/addAdmin', element: <AddAdmin></AddAdmin> },
    { path: '/adminLogin', element: <AdminLogin></AdminLogin> },
    { path: '/adminDashboard', element: <AdminDashboard></AdminDashboard> },
    { path: '/managePayment/:id', element: <ManagePayment></ManagePayment> },
    { path: '/department', element: <ShowDepartment></ShowDepartment> },
    { path: '/teacher', element: <TeacherList></TeacherList> },
    { path: '/payments', element: <PaymentReceive></PaymentReceive> },
    { path: '/addTeacher', element: <AddTeacher></AddTeacher> },
    { path: '/manage-student', element: <ManageStudent></ManageStudent> },
    {
      path: '/balance/payment/:id', element: <Payment></Payment>,
      loader: ({ params }) => fetch(`http://localhost:5000/payment/${params.id}`)
    },

  ])


  return (

    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
