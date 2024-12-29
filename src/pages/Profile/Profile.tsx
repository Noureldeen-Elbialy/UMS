import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Profile = () => {
    const { userData } = useContext(UserContext);
    return (
        <>
            <section id="profile" className="py-4">
                <div className="title mb-2">
                    <h2 className="text-lg font-bold mb-4">Profile</h2>
                    <hr />
                </div>
                <div className="p-10 pb-0 mt-16">
                    <div className="p-20 pb-16 bg-white rounded-2xl relative">
                            <img src={userData?.image} className='w-24 absolute left-1/2 -translate-x-1/2 -top-12 bg-zinc-100 shadow p-4 rounded-full' alt="" />
                        <div className="grid grid-cols-2 gap-x-10 gap-y-2">

                            <div className="container">
                                <span className="text-gray-500 text-sm">First Name</span>
                                <div className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100">
                                    {userData?.firstName}
                                </div>
                            </div>
                            <div className="container">
                                <span className="text-gray-500 text-sm">Last Name</span>
                                <div className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100">
                                    {userData?.lastName}
                                </div>
                            </div>
                            <div className="container">
                                <span className="text-gray-500 text-sm">Email</span>
                                <div className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100">
                                    {userData?.email}
                                </div>
                            </div>
                            <div className="container">
                                <span className="text-gray-500 text-sm">Gender</span>
                                <div className="w-full mb-3  mt-2 px-3 py-2 border-2 rounded-md placeholder:text-sm bg-zinc-100">
                                    {userData?.gender}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
