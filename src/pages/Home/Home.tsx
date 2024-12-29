import { useContext } from 'react';
import Particles from '../../components/Particles/Particles'
import { UserContext } from '../../context/UserContext'
import { TypeAnimation } from 'react-type-animation';
import { Particle } from '@tsparticles/engine';
import { HiChevronRight } from 'react-icons/hi';

const Home = () => {
    const { userData } = useContext(UserContext);
    return (<>
        {/* <Particles/> */}
        <div className=" grid grid-cols-6 mt-40 items-center">
            <div className="image col-span-3"><img className='m-auto' src={userData?.image} alt="user" /></div>
            <div className="col-span-3">
                <h2 className='font-bold text-2xl mb-10'>Welcome <span className='text-main'>{userData?.firstName}</span></h2>
                <div className="space-y-4">
                    <p className='text-gray-500 flex items-center'><HiChevronRight />this is your dashboard</p>
                    <p className='text-gray-500 flex items-center'><HiChevronRight />you can show your data or user data</p>
                    <p className='text-gray-500 flex items-center'><HiChevronRight />you can edit or delete users</p>
                    <p className='text-gray-500 flex items-center'><HiChevronRight />you show your profile</p>
                </div>
            </div>
        </div>
    </>)
}

export default Home
