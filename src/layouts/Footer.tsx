import LogoImage from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer>
            <section className="container mx-auto pt-15 pb-12">
                <div className="grid lg:grid-cols-4 gap-x-10 lg:mb-14 mb-4 grid-cols-1">
                    <div>
                        <div>
                            <img src= {LogoImage} alt="Footer Logo" className='mx-auto lg:mx-0' />
                        </div>
                        <p className='lg:w-94.5 text-[#64748B] text-[12px] font-sans my-3 w-auto lg:text-left text-center'>Curated tools, technologies, and resources for developers building modern software.</p>
                        <ul className='flex gap-4 text-[#475569] font-semibold text-[12px] lg:mt-0 mt-5 justify-center lg:justify-start'>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className='justify-self-center lg:block hidden'>
                        <h6 className='text-[#0F172A] font-sans font-bold text-[12px] mb-4'>PRODUCT</h6>
                        <ul className='mb-2.5 text-[#64748B] text-[12px]'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>
                    <div className='justify-self-center lg:block hidden'>
                        <h6 className='text-[#0F172A] font-sans font-bold text-[12px] mb-4'>COMPANY</h6>
                        <ul className='mb-2.5 text-[#64748B] text-[12px]'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className='justify-self-center lg:block hidden'>
                        <h6 className='text-[#0F172A] font-sans font-bold text-[12px] mb-4'>LEGAL</h6>
                        <ul className='mb-2.5 text-[#64748B] text-[12px]'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            
                        </ul>
                    </div>

                </div>
                <hr className='text-[#F1F5F9]' />
                <div className='lg:mt-8 mt-4 text-[#94A3B8] text-[12px] flex justify-between items-center'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex items-center gap-x-3'>
                        <p>privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
                

            </section>
        </footer>

    )
}

export default Footer