import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import dropdown from "/src/assets/assets_frontend/dropdown_icon.svg";
import { assets } from '../assets/assets_frontend/assets';
import { useUser } from '../context/UserContext'; // Import the UserContext

export default function Navbar() {
    const navigate = useNavigate();
    const { user, setUser } = useUser(); // Access user context
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    useEffect(() => {
        // Fetch user data when the component mounts
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Use the token from local storage
                    },
                });
                const data = await response.json();
                setUser(data); // Set user data in context
            } catch (err) {
                console.error('Failed to fetch user data:', err);
            }
        };

        if (token) {
            fetchUserData();
        }
    }, [token, setUser]);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <NavLink to={'/'}><h2 className='cursor-pointer'>Arabe</h2></NavLink>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to={'/'}>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to={'/teacher'}>
                    <li className='py-1'>Teachers</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to={'/about'}>
                    <li className='py-1'>About us</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to={'/contact'}>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <span className='font-medium'>{user?.name}</span> {/* Display user name */}
                            <img className='w-2.5' src={dropdown} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('my-apponint')} className='hover:text-black cursor-pointer'>My Appointment</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
                }
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-end px-5 py-6'>
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to={'/home'}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to={'/teacher'}><p className='px-4 py-2 rounded inline-block'>Teacher</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to={'/about'}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to={'/contact'}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}
