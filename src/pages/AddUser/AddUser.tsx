import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    phone: number;
    birthDate: string;
}
const AddUser = () => {
    const navigate = useNavigate();
    const { func } = useParams();
    console.log(func);
    const defaultFormData = {
        'firstName': '',
        'lastName': '',
        'email': '',
        'age': '',
        'phone': '',
        'birthDate': ''
    }
    //context
    const { updatedUserData, setUpdatedUserData } = useContext(UserContext);

    console.log(updatedUserData);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IUser>({ defaultValues: updatedUserData });

    const submitHandler = async (data: IUser) => {
        if (func == 'update') {
            try {
                const res = await axios.put(`https://dummyjson.com/users/${updatedUserData?.id}`, data);
                console.log(res);
                toast.success(`user has been successfully Updated`);
                setUpdatedUserData(defaultFormData)
                reset();
                navigate('/dashboard/users');
            } catch {
                toast.error(`error`);
            }
        } else {
            try {
                const res = await axios.post(`https://dummyjson.com/users/add`, data);
                console.log(res?.data?.accessToken);
                toast.success(`user has been successfully registered`);
                reset();
                navigate('/dashboard/users');
            } catch {
                toast.error(`error`);
            }
        }
        console.log(data);
    }

    //handel reset form on change 
    useEffect(() => {
        return () => {
            setUpdatedUserData(defaultFormData)
        }
    }, []);
    return (
        <>
            <section id="addUser" className="py-4">
                <div className="title mb-2">
                    <h2 className="text-lg font-bold mb-4">{func == 'update' ? 'update user' : 'Add User'}</h2>
                    <hr />
                </div>
                <div className="form-card p-10 pb-0">
                    <form onSubmit={handleSubmit(submitHandler)} className="p-20 pb-16 bg-white rounded-2xl">
                        <div className="inputs grid grid-cols-2 gap-x-10 gap-y-2">

                            <div className="input-container">
                                <label htmlFor="firstName" className="text-gray-500 text-sm">First Name</label>
                                <input autoComplete='off' id="firstName" type="text" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100" placeholder="Enter your first name" {...register('firstName', { required: 'first name is req', pattern: { value: /^[A-Z][a-zA-Z0-9]{2,19}$/, message: 'should start with capital character' } })} />
                                {errors?.firstName && <p className="text-red-500 py-2 bg-red-500/25 rounded-md px-3 border border-red-300">{errors.firstName.message}</p>}
                            </div>
                            <div className="input-container">
                                <label htmlFor="lastName" className="text-gray-500 text-sm">Last Name</label>
                                <input autoComplete='off' id="lastName" type="text" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100" placeholder="Enter your last name" {...register('lastName', { required: 'last name is req', pattern: { value: /^[A-Z][a-zA-Z0-9]{2,19}$/, message: 'should start with capital character' } })} />
                                {errors?.lastName && <p className="text-red-500 py-2 bg-red-500/25 rounded-md px-3 border border-red-300">{errors.lastName.message}</p>}
                            </div>

                            <div className="input-container">
                                <label htmlFor="email" className="text-gray-500 text-sm">Email</label>
                                <input autoComplete='off' id="email" type="email" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100" placeholder="Enter your email" {...register('email', {
                                    required: 'email is req'
                                })} />
                                {errors?.email && <p className="text-red-500 py-2 bg-red-500/25 rounded-md px-3 border border-red-300">{errors.email.message}</p>}
                            </div>

                            <div className="input-container">
                                <label htmlFor="age" className="text-gray-500 text-sm">Age</label>
                                <input autoComplete='off' id="age" type="number" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100" placeholder="Enter your age"  {...register('age', { required: 'age is req', max: { value: 60, message: 'max age 60' } })} />
                                {errors?.age && <p className="text-red-500 py-2 bg-red-500/25 rounded-md px-3 border border-red-300">{errors.age.message}</p>}
                            </div>

                            <div className="input-container">
                                <label htmlFor="phone" className="text-gray-500 text-sm">Phone Number</label>
                                <input autoComplete='off' id="phone" type="text" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100" placeholder="Enter your phone number" {...register('phone', { required: 'phone is req' })} />
                            </div>

                            <div className="input-container">
                                <label htmlFor="date" className="text-gray-500 text-sm">Birth Date</label>
                                <input autoComplete='off' id="date" type="text" className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100" placeholder="Enter your birth date" {...register('birthDate', { required: 'birth date is req', pattern: { value: /^\d{4}-\d{1,2}-\d{1,2}$/, message: 'invaild date' } })} />
                                {errors?.birthDate && <p className="text-red-500 py-2 bg-red-500/25 rounded-md px-3 border border-red-300">{errors.birthDate.message}</p>}
                            </div>
                        </div>

                        <div className="button text-center mt-10">
                            {func === 'update' ?
                                <button type="submit" className="bg-main rounded-md text-white py-2 w-1/2">Update User</button>
                                : <button type="submit" className="bg-main rounded-md text-white py-2 w-1/2">Add</button>
                            }
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddUser
