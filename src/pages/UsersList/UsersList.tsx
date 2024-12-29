import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { MutatingDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const UsersList = () => {
    const navigate = useNavigate()
    //context
    let {setUpdatedUserData }=useContext(UserContext)

    //state
    const [isShown, setIsShown] = useState(false);
    const [userId, setUserId] = useState(0);
    const [userName, setUserName] = useState('');
    const [users, setUsers] = useState([]);

    //functions
    const getUsers = async () => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/users`);
            setUsers(data?.users);
        } catch (error) {
            console.log(error);
        }
    }
    const deleteUser = async (id: number) => {
        try {
            const res = await axios.delete(`https://dummyjson.com/users/${id}`);
            console.log(res);
            toast.success(`${res?.data.firstName} was successfully deleted`)
        } catch {
            toast.error(`Error in deletion`)
        }
    }
    const getUserData = async (id:number) => {
        try {
            const { data:userData} = await axios.get(`https://dummyjson.com/users/${id}`);
            await setUpdatedUserData(userData);
            navigate('/dashboard/user/update')
        } catch (error) {
            console.log(error);
        }
    }

    //effect
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <div className="users-container py-2">
                <div className="title flex justify-between items-center">
                    <h2 className="text-lg font-bold">Users List</h2>
                    <Link to={'/dashboard/user/add'} className="rounded-md bg-main py-2 px-4 text-white">ADD NEW USER</Link>
                </div>
                <hr className="my-3" />
                <div className="relative overflow-x-auto">
                    {users.length > 0 ? <table className="w-full text-sm text-black">
                            <thead className="text-xs text-gray-400 font-semibold">
                                <tr>
                                    <td className="px-6 py-4">

                                    </td>
                                    <td className="px-6 py-4">
                                        Name
                                    </td>
                                    <td className="px-6 py-4">
                                        Email
                                    </td>
                                    <td className="px-6 py-4">
                                        Phone
                                    </td>
                                    <td className="px-6 py-4">
                                        age
                                    </td>
                                    <td className="px-6 py-4">
                                        Date of admission
                                    </td>
                                    <td className="px-6 py-4">

                                    </td>
                                    <td className="px-6 py-4">

                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map(({ id, image, firstName, email, phone, age, birthDate }) =>
                                    <tr key={id} className="mt-20 bg-white hover:bg-slate-100 rounded-lg">
                                        <th className="p-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img src={image} className="w-[25px]" alt="" />
                                        </th>
                                        <td className="p-6">
                                            {firstName}
                                        </td>
                                        <td className="p-6">
                                            {email}
                                        </td>
                                        <td className="p-6">
                                            {phone}
                                        </td>
                                        <td className="p-6">
                                            {age}
                                        </td>
                                        <td className="p-6">
                                            {birthDate}
                                        </td>
                                        <td className="p-6">
                                            <MdOutlineEdit onClick={() => {
                                                getUserData(id);
                                            }} size={20} className="text-second cursor-pointer" />
                                        </td>
                                        <td className="p-6">
                                            <MdDeleteOutline onClick={() => {
                                                setIsShown(true);
                                                setUserId(id);
                                                setUserName(firstName);
                                            }} size={20} className="text-second cursor-pointer" />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table> : <div className=" flex justify-center items-center mt-40">
                            <MutatingDots
                                visible={true}
                                height="100"
                                width="100"
                                color="#FEAF00"
                                    secondaryColor="#F8D442"
                                radius="12.5"
                                ariaLabel="mutating-dots-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </div>
                    }

                    <div className={`${!isShown && 'hidden'} modal-container bg-black/75 overflow-hidden inset-0 h-screen w-screen fixed z-[99]`}>
                        <div className="modal z-10 bg-zinc-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md font-semibold px-5 py-5">
                            <h2 className="text-lg font-bold">Deleting Confirmation</h2>
                            <hr className="mt-2 mb-4" />
                            <h3 className="text-lg font-semibold">Are you sure you  want to delete {userName} !</h3>
                            <div className="flex justify-evenly mt-5">
                                <button className="py-1 rounded-md px-4 bg-zinc-400 text-white hover:bg-zinc-500 transition-all duration-500" onClick={() => {
                                    setIsShown(false);
                                }}>No</button>
                                <button className="py-1 rounded-md px-4 bg-red-400 text-white hover:bg-red-500 transition-all duration-500" onClick={() => {
                                    deleteUser(userId)
                                    setIsShown(false);
                                }}>Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UsersList
