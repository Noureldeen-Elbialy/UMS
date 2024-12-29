import { CiBellOn } from "react-icons/ci"

const NavBar = () => {
    return (
        <>
            <div className="flex justify-end items-center gap-x-4 py-2">
                <form className="w-1/4">
                    <div className="relative">
                        <input type="text" id="default-search" className="w-full py-1 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="Search ..." required />
                        <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                    </div>
                </form>
                <CiBellOn className="text-gray-500" size={25}/>
            </div>
        </>
    )
}

export default NavBar
