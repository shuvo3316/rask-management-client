import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Hooks/Authcontext";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Addtask = () => {


    const {user}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    let[count,setCount]=useState(0)
    useEffect(()=>{

        axiosPublic.get(`/tasks?email=${user.email}`)
    .then(res=>{
        console.log(res.data)
        setCount(res.data.length)
    })
    },[])

 


   //const{createUser,logOut,updateUserProfile}=useAuth();
   const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm()

   
     const onSubmit = (data) =>{
        count=count+1;
        setCount(count)
       console.log(data)
       console.log(user)

       const taskRequestInfo ={
        taskrequesterName:user.displayName,
        taskrequesterEmail:user.email,
        id:count,
        title:data.title,
        priority:data.priority,
        description:data.description,
        donationdate:data.donationdate,
        
        status:'todo'

       }
       console.log(taskRequestInfo)

       axiosPublic.post('/tasks',taskRequestInfo)
       .then(res=>{
        console.log("inserted  data",res.data)
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your task is Added",
                showConfirmButton: false,
                timer: 1500
              });
              reset();
        }


       })
       
     }

    
    return (
        <div className="">
              <div className="flex justify-center items-center ">
  <form className="border-2 bg-[#526D82] md:w-3/4 rounded-xl" onSubmit={handleSubmit(onSubmit)}>

  <div className="w-full  p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Make a task</h1>
		
        <div className="flex gap-4 ">
            <div className="space-y-1 flex-1 text-sm">
			<label  className="block dark:text-gray-400"> Title</label>
			<input {...register("title", { required: true })} type="text" name="title" id="title" placeholder=" title " className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            {errors.title && <span>This field is required</span>}
		</div>
		<div className="space-y-1 flex-1 text-sm">
			<label  className="block dark:text-gray-400">Description</label>
			<input {...register("description", { required: true })} type="text" name="description" id="description" placeholder="description " className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            {errors.description && <span>This field is required</span>}
		</div>
        </div>
		
        <div className="flex gap-4 ">

        <div className="space-y-1 flex-1 text-sm">
			<label  className="block "> date</label>
			<input {...register("donationdate", { required: true })} type="date" name="donationdate" id="donationdate" placeholder=" Date" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            {errors.donationdate && <span>This field is required</span>}
		</div>
		<div className="space-y-1 flex-1 text-sm">
			<label  className="block dark:text-gray-400">Priority level (low,medium,high)</label>
			<input {...register("priority", { required: true })} type="text" name="priority" id="username" placeholder=" priority " className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            {errors.priority && <span>This field is required</span>}
		</div>

        </div>
		
        <div className="flex gap-4">

    
		

        </div>

        
		{/* <div className="space-y-1 text-sm">
			<label  className="block dark:text-gray-400">Password</label>
			<input  {...register("password", { 
        required: true ,
        minLength:6,
        maxLength:20,
        pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
        })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            {errors.password?.types==='require' && <span>This field is required</span>}
            {errors.password?.type==='minLength' && <span>enter atlease 6 characters</span>}
            {errors.password?.type==='maxLength' && <span>enter less than 20 characters</span>}
            {errors.password?.type==='pattern' && <span>one special character is needed</span>}


			<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
         
		</div> */}
        <div className="text-center flex justify-center items-center">
        <button  className="block text-center  p-3   from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2">Make a Request</button>

        </div>

</div>
   
    </form>   
         </div>
        </div>
    );
};

export default Addtask;