import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Hooks/Authcontext';
import { useForm } from "react-hook-form"


const Login = () => {

    const captchaRef=useRef()
    const [disabled, setDisabled]=useState(true);

    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation();

    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[])
    const handleLogin =e=>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result => {
            const user =result.user;
            console.log(user)
            Swal.fire({
                title: "Successfully login",
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
              navigate(location.state?.from?.pathname || "/",{replace:true})
        })
    }

    const handlecaptchaValidation=()=>{
            const user_validation_value =captchaRef.current.value;
           // console.log(value)
           if(validateCaptcha(user_validation_value)){
                setDisabled(false)
           }
           else{
            setDisabled(true)

           }
    }
    const { register, handleSubmit ,formState: { errors },
} = useForm()
    const onSubmit = (data) => {
        signIn(data.email,data.password)
        .then(result => {
            const user =result.user;
            console.log(user)
            Swal.fire({
                title: "Successfully login",
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
              navigate(location.state?.from?.pathname || "/",{replace:true})
        })
    }

    return (
        <div className="hero min-h-screen my-20 bg-[#9DB2BF]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card bg-[#DDE6ED] shrink-0 w-full max-w-sm shadow-2xl ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <label>Email</label>
      <input {...register("email")}  type='email' />
        <label>Password</label>
        {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
        <input {...register("password",{ required: true,
            
            minLength:6,
            
            maxLength:20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} name="password" placeholder="password" className="input input-bordered" />
             {errors.password?.type === "required" && (
        <p className="text-red-500"> password is required</p>
      )}
          {errors.password?.type==='minLength' && (
        <p className="text-red-500"> password should be more than 6 </p>
      )}
          {errors.password?.type==='maxLength' && (
        <p className="text-red-500"> password should be less than 20 </p>
      )}
         
     {errors.password?.type==='pattern' && (
        <p className="text-red-500"> in passwors there should be a small letter a uppercase and a number special characer </p>
      )}   
      
        <div className="form-control">
        <LoadCanvasTemplate />
           <input onBlur={handlecaptchaValidation} ref={captchaRef} type="text" name="captcha" placeholder="write captcha" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p><small>New Here ? <Link to={"/signup"}>Create an Account</Link></small></p>
     
    </div>
  </div>
</div>
    );
};

export default Login;