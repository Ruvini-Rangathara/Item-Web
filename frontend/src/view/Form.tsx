import React, {useState} from 'react';
import { MdOutlineEdit } from "react-icons/md";
import '/src/Modal.css';
import Swal from "sweetalert2";

const Form = () => {
    const [isOpen, setIsOpen] = useState(true);

    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [qtyOnHand, setQtyOnHand] = useState('');

    const closeForm = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    const handleNew = () => {
        fetch("http://localhost:8080/api/item/newCode", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch new code');
                }
            })
            .then(data => {
                setCode(data.content);
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "There was an error fetching items."
                });
            });

    };

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
                        <input className={'text_field'} placeholder={'Item Code : '}
                               style={{width: "80%"}}
                               name={code}
                               type={'text'}
                               value={code}
                        />
                        <button
                            className={'mt-[5px] px-2 text-[13px] h-[27px] bg-[#7FABF3] text-white rounded-md ml-4'}
                            onClick={handleNew}
                        >
                            + New
                        </button>
                    </div>

                    <input className={'text_field'} placeholder={'Description : '}
                           style={{width: "80%"}}
                           name={description}
                           type={'text'}
                           value={description}
                    />

                    <div className={'flex justify-between w-[80%]'}>
                        <input className={'text_field'} placeholder={'Unit Price : '}
                               style={{width: "45%"}}
                               name={unitPrice}
                               type={'text'}
                               value={unitPrice}
                        />
                        <input className={'text_field'} placeholder={'Qty On Hand: '}
                               style={{width: "45%"}}
                               name={qtyOnHand}
                               type={'number'}
                               value={qtyOnHand}
                        />
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
