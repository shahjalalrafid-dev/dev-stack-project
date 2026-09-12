
import BannerImage from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <main>
        <section className="container mx-auto lg:pt-24 lg:pb-28 pt-7 pb-2.5">
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                <div className='flex flex-col'>
                    <h1 className='font-inter lg:w-142 lg:leading-15 font-extrabold lg:text-6xl text-3xl leading-9 w-75 lg:text-left lg:mx-0 text-center mx-auto'>Build Your Ideal <span className='bg-linear-to-r bg-clip-text text-transparent  from-[#FF5722] from-0% via-[#D81B7E] via-50% to-[#7C3AED] to-100% '>Development Stack </span></h1>
                    <p className='lg:text-[18px] text-sm font-sans lg:w-142.5 lg:leading-7 leading-5 lg:mt-7 lg:mb-12 mb-5 my-2.5 text-[#475569] w-auto text-center lg:text-left'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                    <div className="flex gap-x-3 mx-auto lg:mx-0 ">
                        <button className='font-semibold rounded-xl text-white bg-linear-to-r from-[#F97316] to-[#EC4899] py-3 px-4 font-inter cursor-pointer'>Explore Technologies</button>
                        <button className='rounded-lg border border-[#E5E7EB] font-inter py-3 px-4 cursor-pointer'>Learn More</button>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <img src= {BannerImage} alt="Banner Image" className='w-full h-auto' />
                </div>
            </div>

        </section>
    </main>
  )
}

export default Banner