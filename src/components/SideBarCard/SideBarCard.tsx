import { NavLink, useNavigate } from "react-router-dom"
import SideBar from "../SideBar/SideBar"
import User from "../../assets/imgs/user/user.jpeg";
import { CiLogout } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { UserContext } from "../../context/UserContext";
const SideBarCard = () => {
    const navigate=useNavigate();
    const { userData, saveUserData } = useContext(UserContext);
    console.log(userData);
    //toggle sidebar
    const [isCollapsed, setIsCollapsed] = useState(false);
    const collapseToggle = ()=>{
        setIsCollapsed(!isCollapsed);
    }
    const logoutHandler = () => {
        localStorage.removeItem('userToken')
    }
    
    return (
        <div className="sideBar-Bg h-screen flex flex-col justify-between p-2 sticky z-50 top-0 left-0 bottom-0">
            <div>
                {/* ums icon */}
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2 ums-icon">
                        <span className="w-[0.2rem] bg-second"></span>
                        <h1 className="font-bold">UMS</h1>
                    </div>
                    <div className="toggle">
                        {isCollapsed ? <TbLayoutSidebarRightCollapseFilled onClick={collapseToggle} size={22} /> : <TbLayoutSidebarLeftCollapseFilled onClick={collapseToggle} size={22} />}
                    </div>
                </div>
                {/* card - details */}
                <div className="user text-center sideBar-Bg mt-8">
                    <img src={userData?.image} className={`${isCollapsed ?'w-[50px]':'w-[100px]'} rounded-full m-auto`} alt="" />
                    <h5 className={`font-bold ${isCollapsed ? '' : 'text-xl'}  mt-3`}>{userData?.firstName}</h5>
                    <h6 className="text-main">Admin</h6>
                    <SideBar isCollapsed={isCollapsed} />
                </div>
            </div>

            {/* logout button */}
            <div className="logout ">
                <button onClick={() => {
                    logoutHandler();
                    navigate('/')
                }} className='rounded-md m-auto flex py-3 px-6 items-center justify-center btn'>
                    <CiLogout />Logout
                </button>
            </div>
        </div>
    )
}

export default SideBarCard;
