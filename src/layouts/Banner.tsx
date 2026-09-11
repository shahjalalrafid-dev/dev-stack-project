
import BannerImage from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <main>
        <section className="container mx-auto pt-24 pb-28">
            <div className='grid grid-cols-2 items-center'>
                <div className='flex flex-col'>
                    <h1 className='font-inter w-142 leading-15 font-extrabold text-6xl '>Build Your Ideal <span className='bg-linear-to-r bg-clip-text text-transparent  from-[#FF5722] from-0% via-[#D81B7E] via-50% to-[#7C3AED] to-100% '>Development Stack </span></h1>
                    <p className='text-[18px] font-sans w-142.5 leading-7 mt-7 mb-12 text-[#475569] '>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                    <div className="flex gap-x-3">
                        <button className='font-semibold rounded-xl text-white bg-linear-to-r from-[#F97316] to-[#EC4899] py-3 px-4 font-inter cursor-pointer'>Explore Technologies</button>
                        <button className='rounded-lg border border-[#E5E7EB] font-inter py-3 px-4 cursor-pointer'>Learn More</button>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <img src= {BannerImage} alt="Banner Image" />
                </div>
            </div>

        </section>
    </main>
  )
}

export default Banner