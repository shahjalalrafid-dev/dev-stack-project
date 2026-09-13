
import { TiTick } from "react-icons/ti";
import { FaStar } from "react-icons/fa6";
import type { ITechnologyType } from '../types/types';
import { Icon } from "@iconify/react";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
const TechnologyCard = ({ technology, selected, setSelected }: { technology: ITechnologyType, selected: ITechnologyType[], setSelected: Dispatch<SetStateAction<ITechnologyType[]>> }) => {

    const isSelected = selected.filter((item) => item.name === technology.name).length > 0;

    const handleSelectTechnology = () => {
        if(isSelected === true){
            alert("You have Already Added this");
            return;
            
        }
        
        toast(`${technology.name} is added to stack successfully`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setSelected([...selected, technology]);
         
    }

    return (
        <div className='p-5 border border-[#F1F5F9] rounded-2xl shadow-lg'>
            <div className="flex justify-between mt-1">
                <div>
                    <Icon icon={technology.icon} />
                </div>
                <button className='px-2.5 py-0.5 bg-amber-200 font-sans rounded-full'>{technology.badge}</button>
            </div>
            <h5 className='font-sans font-bold text-lg mt-3 mb-2'>{technology.name}</h5>
            <p className='text-[#64748B] text-[12px] mb-5'>{technology.description}</p>
            <div className='flex justify-between items-center'>
                <button className='text-[#475569] bg-[#F1F5F9] font-sans py-0.5 px-2 text-[11px]'>{technology.category}</button>
                <button className='font-sans text-[#475569] text-[11px]'>{technology.difficulty}</button>
                <div className='flex items-center gap-x-1'>
                    <FaStar className='text-amber-600 text-[11px]' />
                    <p className='text-[11px]'>{technology.rating}</p>
                </div>
            </div>
            <button onClick={() => handleSelectTechnology()} className='bg-black text-white font-sans text-[10px] py-2.5 w-full rounded-lg cursor-pointer mt-4'>{isSelected === true ? <span><TiTick className="inline-block" /> Added to Stack</span> : `Add to Stack`}</button>

        </div>
    )
}

export default TechnologyCard