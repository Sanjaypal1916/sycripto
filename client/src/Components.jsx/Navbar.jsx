import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import logo from '../../images/pogo.jpg';

const Navitems = ({ title, classprops }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classprops}`}> {title}</li>
    )
}

const Navbar = () => {

    const [togglemenu, settogglemenu] = useState(false);


    return (
        <nav className='w-full flex md:justify-center justify-between items-center px- py-4'>
            <div className='md:flex-[0.5]  justify-center items-center flex-initial'>
                <img src={logo} alt="" className='w-44 cursor-pointer ' />
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {['Markets', 'Exchanges', 'Tutorials', 'Wallets'].map((items, index) => (
                    <Navitems key={items + index} title={items} />
                ))}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full hover:bg-[#2546bd] cursor-pointer'>
                    Login
                </li>
            </ul>

            <div className='flex relative'>
                {togglemenu ? <AiOutlineClose fontSize={28} className="text-white md:cursor-pointer" onClick={() => settogglemenu(false)} /> : <HiMenuAlt4 fontSize={28} className="text-white md:cursor-pointer" onClick={() => settogglemenu(true)} />}

                {togglemenu && (
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw h-screen shadow-2xl] md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white  animate-slide-in'>
                        <li className=' text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => settogglemenu(false)} />
                            {['Markets', 'Exchanges', 'Tutorials', 'Wallets'].map((items, index) => (
                                <Navitems key={items + index} title={items}  classprops='my-2 text-lg'/>
                            ))}
                        </li>
                    </ul>
                )}
            </div>



        </nav>
    )
}

export default Navbar
