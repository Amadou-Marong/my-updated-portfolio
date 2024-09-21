import logo from '../assets/My-Logo-1.png'; 
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="text-black flex justify-between items-center max-w-[1300px] mx-auto h-24">
            <div className="ml-4 max-w-[100px]">
                <img src={logo} alt="logo" />
            </div>
            <ul className='hidden md:flex font-semibold'>
                <li className="p-5 cursor-pointer">
                    <Link to='home' smooth={true} offset={-50} duration={500}>Home</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='about' smooth={true} offset={-50} duration={500}>About</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='projects' smooth={true} offset={-50} duration={500}>Portfolio</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='experience' smooth={true} offset={-50} duration={500}>Blog</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='contact' smooth={true} offset={-50} duration={500}>Contact</Link>
                </li>
            </ul>

            <div onClick={toggleNav} className="block md:hidden text-2xl font-bold p-4 bg-gray-600 text-white rounded-full mr-3 transition-opacity from-gray-600 duration-500 cursor-pointer">
                {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>

            <ul className={`md:hidden ${nav ? 'block' : 'hidden'} absolute z-10 top-24 left-0 w-full bg-gray-600 text-white`}>
                <li className="p-5 cursor-pointer">
                    <Link to='home' smooth={true} offset={-50} duration={500} onClick={toggleNav}>Home</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='about' smooth={true} offset={-50} duration={500} onClick={toggleNav}>About</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='projects' smooth={true} offset={-50} duration={500} onClick={toggleNav}>Portfolio</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='experience' smooth={true} offset={-50} duration={500} onClick={toggleNav}>Blog</Link>
                </li>
                <li className="p-5 cursor-pointer">
                    <Link to='contact' smooth={true} offset={-50} duration={500} onClick={toggleNav}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
