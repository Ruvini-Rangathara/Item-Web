import React, {useEffect, useState} from 'react';
import { MdOutlineEdit } from "react-icons/md";
import '/src/Modal.css';
import Swal from "sweetalert2";

const Form = () => {
    const [isOpen, setIsOpen] = useState(true);

    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [qtyOnHand, setQtyOnHand] = useState('');

    const [saveButton, setSaveButton] = useState('Update');

    useEffect(() => {
        setSaveButton('Update')
    }, []);
    const handleSaveButtonContent= (status) => {
        setSaveButton(status);
    }

    const closeForm = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    const validateFields = () => {
        if (code === '' || description === '' || unitPrice === '' || qtyOnHand === '') {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Please fill all fields."
            });
            return false;
        }
        return true;
    }

    const clearFields = () => {
        setCode('');
        setDescription('');
        setUnitPrice('');
        setQtyOnHand('');
        setSaveButton('Save')
    }

    const newCode = () => {
        clearFields();
        handleSaveButtonContent('Save');

        return new Promise((resolve, reject) => {
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
                    const newCode = data.content;
                    resolve(newCode); // Resolve the new code value
                })
                .catch(error => {
                    console.error('Error:', error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops!",
                        text: "There was an error fetching items."
                    });
                    reject(error); // Reject the promise if there's an error
                });
        });
    };

    const handleNew = async () => {
        try {
            const newCode1 = await newCode();
            setCode(newCode1);
        } catch (error) {
            console.error('Error fetching new code:', error);
            await Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "There was an error fetching the new code."
            });
        }
    }

    const saveItem = () => {
        newCode().then((newCode) => {
            // console.log("in save and update method newCode(): ",newCode )
            // console.log("in save and update method code: ", code)
            if (validateFields()) {
                if (newCode== code) {
                    console.log("in save")
                    fetch("http://localhost:8080/api/item", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            code: code,
                            description: description,
                            unitPrice: unitPrice,
                            qtyOnHand: qtyOnHand
                        })
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('Failed to save item');
                            }
                        })
                        .then(data => {
                            Swal.fire({
                                icon: "success",
                                title: "Success!",
                                text: "Item saved successfully."
                            });
                            clearFields();
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            Swal.fire({
                                icon: "error",
                                title: "Oops!",
                                text: "There was an error saving item."
                            });
                        });
                } else {
                    console.log("in update")
                    fetch("http://localhost:8080/api/item", {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            code: code,
                            description: description,
                            unitPrice: unitPrice,
                            qtyOnHand: qtyOnHand
                        })
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('Failed to update item');
                            }
                        })
                        .then(data => {
                            Swal.fire({
                                icon: "success",
                                title: "Success!",
                                text: "Item updated successfully."
                            });
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            Swal.fire({
                                icon: "error",
                                title: "Oops!",
                                text: "There was an error updating item."
                            });
                        });
                }
            }else {
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "Please fill all fields."
                });
            }
        }).catch((error) => {
            console.log("Error : ", error)
        });
    }


    const deleteItem = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF7474',
            cancelButtonColor: '#7FABF3',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("http://localhost:8080/api/item" + code, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Failed to delete item');
                        }
                    })
                    .then(data => {
                        Swal.fire({
                            icon: "success",
                            title: "Deleted!",
                            text: "Item has been deleted."
                        });
                        clearFields();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops!",
                            text: "There was an error deleting item."
                        });
                    });
            }
        });
    }

    const handleSearch = () => {
        fetch('http://localhost:8080/api/item/'+code, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch item data');
                }
            })
            .then(data => {
                setDescription(data.content.description);
                setUnitPrice(data.content.unitPrice);
                setQtyOnHand(data.content.qtyOnHand);
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops!",
                    text: "There was an error fetching item data."
                });
            });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
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
                               onChange={(e) => setCode(e.target.value)}
                               onKeyDown={handleKeyDown}
                        />
                        <button
                            className={'mt-[5px] px-2 text-[13px] h-[27px] bg-[#7FABF3] text-white rounded-md ml-4'}
                            onClick={handleNew}
                        >
                            New
                        </button>
                    </div>

                    <input className={'text_field'} placeholder={'Description : '}
                           style={{width: "80%"}}
                           name={description}
                           type={'text'}
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />

                    <div className={'flex justify-between w-[80%]'}>
                        <input className={'text_field'} placeholder={'Unit Price : '}
                               style={{width: "45%"}}
                               name={unitPrice}
                               type={'text'}
                               value={unitPrice}
                               onChange={(e) => setUnitPrice(e.target.value)}
                        />
                        <input className={'text_field'} placeholder={'Qty On Hand: '}
                               style={{width: "45%"}}
                               name={qtyOnHand}
                               type={'number'}
                               value={qtyOnHand}
                               onChange={(e) => setQtyOnHand(e.target.value)}
                        />
                    </div>

                    <br/>
                    <div className={'w-[80%] flex justify-end'}>
                        <button className={'px-2 text-[13px] h-[27px] bg-[#87C331] text-white rounded-md ml-4'}
                            onClick={saveItem}
                                value={saveButton}
                        >
                            Update
                        </button>
                        <button className={'px-2 text-[13px] h-[27px] bg-[#FF7474] text-white rounded-md ml-4'}
                            onClick={deleteItem}
                        >
                            Delete
                        </button>
                    </div>
                    <br/>

                </div>
            </div>

        </div>
    );
};
export default Form;
