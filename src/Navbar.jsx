import logo from './assets/My-Logo-1.png'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className="text-black flex justify-between items-center max-w-[1300px] mx-auto h-24">
            <div className="ml-4 max-w-[100px]">
                <img src={logo} alt="logo" />
            </div>
            <ul className='hidden md:flex font-semibold'>
                <li className="p-5"><Link to='/' smooth={true} ofset={50} duration={5000}>Home</Link></li>
                <li className="p-5"><Link to='/about' smooth={true} ofset={50} duration={5000}>About</Link></li>
                <li className="p-5"><Link to='/projects' smooth={true} ofset={50} duration={5000}>Projects</Link></li>
                <li className="p-5"><Link to='/experience' smooth={true} ofset={50} duration={5000}>Experience</Link></li>
                <li className="p-5"><Link to='/contact' smooth={true} ofset={50} duration={5000}>Contact</Link></li>
            </ul>
            <div onClick={toggleNav} className="block md:hidden text-2xl font-bold p-4 bg-gray-600 text-white rounded-full mr-3 transition-opacity from-gray-600 duration-500">
                {nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </div>
            <ul className={`md:hidden ${nav ? 'block' : 'hidden'} absolute z-10 top-24 left-0 w-full bg-gray-600 text-white`}>
                <li className="p-5"><Link to='/' smooth={true} ofset={50} duration={5000}>Home</Link></li>
                <li className="p-5"><Link to='/about' smooth={true} ofset={50} duration={5000}>About</Link></li>
                <li className="p-5"><Link to='/projects' smooth={true} ofset={50} duration={5000}>Projects</Link></li>
                <li className="p-5"><Link to='/experience' smooth={true} ofset={50} duration={5000}>Experience</Link></li>
                <li className="p-5"><Link to='/contact' smooth={true} ofset={50} duration={5000}>Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar