
import { IoCloseSharp } from "react-icons/io5"
import type { ITechnologyType } from "../types/types"
import type { Dispatch, SetStateAction } from "react";
import { Icon } from "@iconify/react";

interface IStackCard {
  stack: ITechnologyType,
  selected: ITechnologyType[];
  setSelected: Dispatch<SetStateAction<ITechnologyType[]>>;
} 

const StackCard = ({stack, selected, setSelected}: IStackCard ) => {
  return (
    <div className="flex items-center justify-between p-2.5 border border-[#F1F5F9] rounded-xl mb-1.5">
      <div className="flex items-center gap-x-2">
        <div>
          <Icon icon={stack.icon} />
          
        </div>
        <div>
          <h5 className="font-sans text-[10px] font-bold">{stack.name}</h5>
          <p className="font-sans text-[6px] font-bold text-[#94A3B8]">{stack.category}</p>

        </div>
      </div>
      <div>
        <IoCloseSharp className="cursor-pointer" />
      </div>
    </div>

  )
}

export default StackCard