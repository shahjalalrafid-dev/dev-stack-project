
import Logo from '../assets/logo-text.png'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    //Desktop View
    <header className='sticky top-0 z-50 bg-white '>
        <nav className="container mx-auto py-6 hidden lg:block">
            <div className='flex'>
                <div>
                    <img src={Logo} alt="Logo Image" />
                </div>
                <ul className='mx-auto flex gap-x-7.5 text-base'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className='flex gap-x-5'>
                    <button className='cursor-pointer'>Sign In</button>
                    <button className='cursor-pointer rounded-full bg-[#D91B7E] px-5 py-2.5 hover:bg-transparent hover:text-[#D91B7E] text-white duration-500 font-semibold'>Sign Up</button>
                </div>
            </div>

        </nav>
        {/* Mobile View */}
        <nav className='container mx-auto py-2 lg:hidden block shadow-sm px-2'>
            <div className='grid grid-cols-3 items-center'>
                <div>
                    <IoMdMenu className='text-3xl' />
                </div>
                <div>
                    <img src= {Logo} alt="Logo Image" />
                </div>
                <div className='flex gap-x-5 justify-self-end'>
                    <button className='cursor-pointer text-[9px]'>Sign In</button>
                    <button className='cursor-pointer rounded-full bg-[#D91B7E] px-2.5 py-1 hover:bg-transparent hover:text-[#D91B7E] text-white duration-500 font-semibold text-[9px]'>Sign Up</button>
                </div>
            </div>
        </nav>
    

    </header>
  )
}

export default Navbar


