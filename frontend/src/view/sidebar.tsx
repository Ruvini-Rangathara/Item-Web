import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { RiLogoutCircleLine } from "react-icons/ri";



const Sidebar = () => {
    return (
        <div className={'w-[5vw] h-screen shadow-md fixed pt-10 flex flex-col justify-start items-center'}>
            <img src={'/src/assets/people.png'} alt={'icon'}
                 className={'w-10 h-8 rounded-full mb-10'}/>

            <MdOutlineSpaceDashboard className={'w-6 h-6 opacity-[40%]'}/>
            <GoSearch className={'w-6 h-6 opacity-[40%] mt-10'}/>
            <BiCartAdd className={'w-6 h-6 opacity-[40%] mt-4'}/>
            <GrUpdate className={'w-4 h-4 opacity-[40%] mt-6'}/>
            <RiDeleteBin6Line className={'w-6 h-6 opacity-[40%] mt-6'}/>
            <RiLogoutCircleLine className={'w-6 h-6 opacity-[40%] mt-[40vh]'}/>
        </div>
    )
}

export default Sidebar;