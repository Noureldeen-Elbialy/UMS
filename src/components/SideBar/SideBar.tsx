import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"
import { NavLink } from "react-router-dom"
import { HiOutlineUsers } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { AiOutlineProfile } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";


interface IProps{
    isCollapsed: boolean;
}


const SideBar = ({ isCollapsed }: IProps) => {
    return (
        <>
            <Sidebar collapsed={isCollapsed} className="mt-5 m-auto">
                <Menu className={`sideBar-Bg text-center ${isCollapsed?'':'px-6'}`}>
                    <MenuItem icon={<IoHomeOutline />} component={<NavLink className='rounded-md' to="/dashboard" end />} className="py-1"> Home</MenuItem>
                    <MenuItem icon={<HiOutlineUsers />} component={<NavLink className='rounded-md' to="/dashboard/users" />} className="py-1">Users</MenuItem>
                    <MenuItem icon={<CiUser />} component={<NavLink className='rounded-md' to="/dashboard/user/add" />} className="py-1">Add Users</MenuItem>
                    <MenuItem icon={<AiOutlineProfile />} component={<NavLink className='rounded-md' to="/dashboard/profile" />} className="py-1">Profile</MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}

export default SideBar
