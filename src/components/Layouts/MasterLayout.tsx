import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import SideBarCard from "../SideBarCard/SideBarCard"

const MasterLayout = () => {
    return (
        <>
            <main className="flex">
                <div>
                    <SideBarCard />
                </div>
                <div className="w-full bg-third min-h-screen">
                    <div className="bg-white px-8 ">
                        <NavBar />
                    </div>
                    <div className="px-8">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MasterLayout
