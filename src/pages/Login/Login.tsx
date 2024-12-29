import { useForm } from "react-hook-form";
import Style from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
interface IProps{
    username?: string;
    password?: string;
}
const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { saveUserData }=useContext(UserContext)
    const onSubmitHandler = async (data: IProps) => {
        try {
            const res = await axios.post(`https://dummyjson.com/auth/login`, data)
            localStorage.setItem('userToken', res?.data.accessToken);
            saveUserData()
            toast.success("Welcome to dashboard", { position: "top-right" });
            navigate('/dashboard');
        } catch (err) {
            toast.error("invaild user!", { position:"top-right" });
            console.log(err);
        }
    }
    useEffect(() => {
        if (localStorage.getItem('userToken')!==null) {
            navigate('/dashboard')
        }
    },[])
    return (
        <section id="logIn" className={`w-screen h-screen ${Style.bgGrad} flex justify-center items-center`}>
            <div className="p-6 bg-white rounded-xl login-card mx-6 md:mx-0 w-5/6 md:w-4/6 lg:w-1/4">
                <div className="flex space-x-2 title">
                    <span className="w-[0.3rem] bg-second"></span>
                    <h1 className="text-xl font-bold">User Management System</h1>
                </div>
                <div className="mt-8 text-center caption">
                    <h2 className="text-lg font-semibold uppercase mb-1">Sign In</h2>
                    <span className="text-gray-500 text-sm">Enter your credentials to access your account</span>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-6">
                    <label htmlFor="username" className="text-black/75 text-sm">Name</label>
                    
                    <input id="username" type="text" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm" placeholder="Enter your name" {...register("username", { required: "Name is req" })} />
                    {errors.username && <p className="text-red-500 py-2 bg-red-500/25 rounded-md px-3 border border-red-300">{errors.username.message}</p>}
                    
                    <label htmlFor="password" className="text-black/75 text-sm">Password</label>
                    
                    <input id="password" type="password" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm" placeholder="Enter your password" {...register("password", { required: "Password is req" })} />
                    {errors.password && <p className="text-red-500 py-2 bg-red-500/25 rounded-md px-3 border border-red-300">{errors.password.message}</p>}

                    <button type="submit" className="w-full bg-main text-white py-2 rounded-md mb-8 mt-2">SIGN IN</button>
                </form>
            </div>
        </section>
    )
}

export default Login
