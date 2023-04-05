import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { Link } from 'react-router-dom';
import './NavBar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { BiLogOut, BiLogIn } from 'react-icons/bi'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = ({ email }) => {
    const auth = useAuth()
    const navigate = useNavigate();
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    return (

        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='free-shipping-banner'>FREE 1-3 Day Shipping in Orders over $139</div>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <a href="/" className='no-underline ml-2'><h1 className='text-3xl font-bold mr-4 sm:text-4xl mb-4'>RUNSHAK.</h1>
                    </a>
                    <ul className='hidden md:flex mt-2'>
                        <li><Link to="/about" className='text-[20px]' >About</Link></li>
                        <li><Link to="/support" className='text-[20px]'>Support</Link></li>
                        <li><Link to="/products" className='text-[20px]'>Products</Link></li>
                    </ul>
                </div>

                <div className='ml-[200px] mb-[45px]'>

                    {auth.userEmail !== null && auth.userEmail.length > 0 ? (
                        <Link to="/myaccount" className='p-0 '><FaUserAlt size={20} /></Link>
                    ) : (<></>)}
                </div>


                <div className='ml-auto mr-5'> { /* auth.userEmail !== null && */ auth.userEmail.length > 0 ? (<h4 className='text-[20px]'>Welcome: {email}</h4>) : (<div />)}

                </div>

                <div className='hidden md:flex pr-4 mb-4'>
                    <Link to='/shoppingcart' className='mr-10 mt-3'><AiOutlineShoppingCart size={30} />
                    </Link>

                    <div >
                        {auth.userEmail !== null && auth.userEmail.length > 0 ? (
                            <button className=" mt-3 border-none bg-transparent text-black mr-4"
                                onClick={(e) => {
                                    auth.logout();
                                    navigate("/login");
                                }}
                            >
                                <BiLogOut size={25} />
                            </button>
                        ) : (
                            <button className='mt-3 border-none bg-transparent text-black mr-4' onClick={() => { navigate('/login') }}>
                                <BiLogIn size={25} />
                            </button>
                        )}
                    </div>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

                </div>
            </div>


            {/* code below is handling when the screen is small like on a mobile device */}

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-10'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/products" smooth={true} offset={-100} duration={500}>Products</Link></li>
                {/* <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li> */}

                <div className='flex flex-col my-4'>
                    {/* <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4' onClick={() => { navigate('/login') }}>Sign In</button> */}
                    <div >
                        {auth.userEmail !== null && auth.userEmail.length > 0 ? (
                            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4"
                                onClick={(e) => {
                                    auth.logout();
                                    navigate("/login");
                                }}
                            >
                                Sign Out
                            </button>
                        ) : (
                            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4' onClick={() => { navigate('/login') }}>
                                Sign In
                            </button>
                        )}
                    </div>
                    <button className='px-8 py-3' onClick={() => { navigate('/registration') }}>Sign Up</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;