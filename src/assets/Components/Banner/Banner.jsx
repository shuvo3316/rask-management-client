import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div >
              <div className="bg-[#DDE6ED]">
        {/* <video autoPlay muted loop className="rotate-380 absolute h-screen w-full"> 
         <source src="../../../../public/56 Ap Ikb Es Tq D 7.mp4" />
         </video> */}
         <img src="https://i.ibb.co/ZLWxG8x/Blue-Yellow-Futuristic-Virtual-Technology-Blog-Banner.png" alt="" />
        </div>
<div className="justify-center text-center absolute ml-[9rem]  md:mt-40 mt-28 top-1/4 md:top-3/4 md:ml-[670px] ">
<Link to={"/login"}><button className="btn btn-error   ">lets explore</button>
</Link>
</div>
            
        </div>
    );
};

export default Banner;