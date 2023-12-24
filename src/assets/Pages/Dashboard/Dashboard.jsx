import { useContext } from "react";
import { AuthContext } from "../../Hooks/Authcontext";
import { Link, Outlet } from "react-router-dom";
import { Swap } from "./Swap/Swap";

const Dashboard = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="flex my-28 py-10">
            <div className="drawer flex-1 lg:drawer-open  relative">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
 
  <div className="drawer-side">
 
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    <div className="flex flex-col justify-center max-w-xs p-6  rounded-xl sm:px-12 ">
	<img src={user.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y ">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{user.displayName}</h2>
			<p className="px-5 text-xs sm:text-base">Full-stack developer</p>
		</div>
		
	</div>
</div>
      {/* Sidebar content here */}
      <li className="red"><a>Sidebar Item 1</a></li>
      <Link to={'addtask'}><li><a>Add task</a></li></Link>
    </ul>
  
  </div>
</div>
<div className="flex-auto px-5">
<Outlet></Outlet>

    </div>            
        </div>
    );
};

export default Dashboard;