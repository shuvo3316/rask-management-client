import { Link } from 'react-router-dom';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useContext } from 'react';
import { AuthContext } from '../../Hooks/Authcontext';
import Swal from 'sweetalert2';
import { Player } from 'video-react';
const Navbar = () => {
  const{user,logOut}=useContext(AuthContext)

  const handleLogout=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
      Swal.fire({
        title: "Successfully Logout",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    })
   
  }
    
  
    return (
        <div>
            

<nav className=" bg-[#27374D] dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://i.ibb.co/3SHf2TT/Image-12-24-23-at-8-14-PM.jpg" className='w-40 rounded-2xl' alt="" />
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div className="dropdown md:hidden">
  <div tabIndex={0} role="button" className="btn m-1"><IoIosArrowDropdownCircle /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to={"/"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">home</a></Link>
      </li>
    <li><a>      <Link to={"/about"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About</a></Link>
</a></li>
    <li><a>      <Link to={"/dashboard"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dashboard</a></Link>
</a></li>
{
        user?
        <li>
        <Link onClick={handleLogout} >        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignOut</a></Link>
        </li> :
         <li>
        <Link to={"/login"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a></Link>
        </li>
       
      }
  </ul>
</div>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
    <li>
      <Link to={"/"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">home</a></Link>
      </li>
      
      {
        user?
        <li>
        <Link onClick={handleLogout} >        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignOut</a></Link>
        </li> :
         <li>
        <Link to={"/login"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a></Link>
        </li>
       
      }
      <li>
      <Link to={"/dashboard"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dashboard</a></Link>
      </li>
      <li>
      <Link to={"/about"}>        <a href="#" className="xt-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About</a></Link>
      </li>
     
    </ul>
  </div>
  </div>
</nav>

        </div>
    );
};

export default Navbar;