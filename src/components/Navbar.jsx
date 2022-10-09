import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

    const activated = 'bg-[#71e2be] text-black block p-4 rounded-md text-base font-medium';
    const deactivated = 'text-gray-300 hover:bg-gray-800 hover:text-white block p-4 rounded-md text-base font-medium';

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>FINANCE DATA</h1>
            <ul className='hidden md:flex'>
                <NavLink to='/' className={({ isActive }) => (isActive ? activated : deactivated)} end>Home</NavLink>
                <NavLink to='/company' className={({ isActive }) => (isActive ? activated : deactivated)}>Company</NavLink>
                <NavLink to='/resources' className={({ isActive }) => (isActive ? activated : deactivated)}>Resources</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? activated : deactivated)}>About</NavLink>
                <NavLink to='/contact' className={({ isActive }) => (isActive ? activated : deactivated)}>Contact</NavLink>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <CgClose size={20} /> : <CgMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#71e2be] m-4'>FINANCE DATA</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-b-gray-600'>Home</li>
                    <li className='p-4 border-b border-b-gray-600'>Company</li>
                    <li className='p-4 border-b border-b-gray-600'>Resources</li>
                    <li className='p-4 border-b border-b-gray-600'>About</li>
                    <li className='p-4 border-b border-b-gray-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar