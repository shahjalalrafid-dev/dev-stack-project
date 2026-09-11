
import Logo from '../assets/logo-text.png'

const Navbar = () => {
  return (
    <header>
        <nav className="container mx-auto py-6">
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
    </header>
  )
}

export default Navbar