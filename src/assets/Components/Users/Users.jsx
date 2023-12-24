import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Card from "../Card/Card";
import { LinearGradient } from "react-text-gradients";

const Users = () => {
    const axiosPublic=useAxiosPublic()
    const [users,setUsers]=useState([])

    axiosPublic.get('/users')
    .then(res=>{
        console.log(res.data)
        setUsers(res.data)
    })
    return (
      <div>
        <h2 className="text-4xl text-center my-5 text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">
            
        <LinearGradient
    gradient={['to left', '#17acff ,#ff68f0']}
    fallbackColor="black"
  >
    Meet Our Happy Clients
  </LinearGradient>            
            </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center ">
            {
                users.map(user=> <Card user={user} key={user._id}></Card>)
            }
        </div>

      </div>
    );
};

export default Users;