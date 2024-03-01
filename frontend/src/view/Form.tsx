import React, {useState} from 'react';
import { MdOutlineEdit } from "react-icons/md";
import '/src/Modal.css';

const Form = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeForm = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <span className="close" onClick={closeForm}>&times;</span>
                <div className={'p-4 flex flex-col justify-center items-center'}>
                    <p className={'text-center text-[25px] text-[green]'}>Manage Item Form</p>

                    <div className={'flex'}>
                        <img src={'/src/assets/rice.jpeg'} alt={'Item'} className={'ml-6 w-32 h-32 rounded-md mr-2'}/>
                        <button
                            className={'w-[30px] h-[25px] bg-[gray] text-white rounded-md mt-[5px] self-end'}>
                            <MdOutlineEdit className={'w-[20px] h-[20px] m-auto'}/>
                        </button>
                    </div>
                    <br/>

                    <div className={'flex justify-between w-[80%]'}>
                        <input className={'text_field'} placeholder={'Item Code : '} style={{width: "80%"}}/>
                        <button
                            className={'mt-[5px] px-2 text-[13px] h-[27px] bg-[#7FABF3] text-white rounded-md ml-4'}>
                            + New
                        </button>
                    </div>

                    <input className={'text_field'} placeholder={'Description : '} style={{width: "80%"}}/>

                    <div className={'flex justify-between w-[80%]'}>
                        <input className={'text_field'} placeholder={'Unit Price : '} style={{width: "45%"}}/>
                        <input className={'text_field'} placeholder={'Qty On Hand: '} style={{width: "45%"}}/>
                    </div>

                    <br/>
                    <div className={'w-[80%] flex justify-end'}>
                        <button className={'px-2 text-[13px] h-[27px] bg-[#87C331] text-white rounded-md ml-4'}>Update
                        </button>
                        <button className={'px-2 text-[13px] h-[27px] bg-[#FF7474] text-white rounded-md ml-4'}>Delete
                        </button>
                    </div>
                    <br/>

                </div>
            </div>

        </div>
    );
};
export default Form;
