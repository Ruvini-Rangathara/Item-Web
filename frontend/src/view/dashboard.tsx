import DataTable from "./table.tsx";
import '/src/App.css';
import {useEffect, useState} from "react";
import Swal from "sweetalert2";

const Dashboard = () => {
    const [total, setTotal] = useState(0);
    const [count , setCount] = useState(0);

    useEffect(() => {
        loadItemCount();
        loadItemTotal();
    }, []);

    const loadItemTotal = () => {
        fetch("http://localhost:8080/api/item/totPrice", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                console.log("data.content Tot Price : ", data.content)
                setTotal(data.content);
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

    const loadItemCount = () => {
        fetch("http://localhost:8080/api/item/count", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch data');
                }
            })
            .then(data => {
                setCount(data.content);
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
        <div className={'ml-[5vw] w-100vw bg-[white] h-screen pt-14 flex'}>

            <div className={'w-[70%] flex flex-col'}>
                <label className={'pl-10 pt-2 text-[30px] text-[green]'}>
                    Welcome To,
                    <label className={'text-[gray] text-[20px]'}>
                        Item Management System
                    </label>
                </label>
                <div className={'text-sm pl-10 text-wrap text-[#B4B4B4]'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci aperiam architecto, assumenda atque cum cumque
                    cupiditate ea explicabo modi nobis optio perferendis porro
                    quam reprehenderit, repudiandae totam velit veritatis vero!

                </div>

                <div className={'bg-[#F5F5F5] w-[97%] h-[73vh] border rounded-lg mx-6 mt-4 px-4'}>

                    <div className={'h-[95%] w-[100%]'}>
                        <div className={'w-[100%] px-4 h-[100%]'}>
                            <DataTable/>
                        </div>
                    </div>

                </div>

            </div>
            <div className={'w-[30%] h-[98%] border rounded-lg mx-6 mb-4'}>
                <div className={'flex flex-col mt-10'}>
                    <div
                        className={'mb-4 ml-6 border-l-[4px] border-l-[#D6D600] w-[50%] h-[10vh] shadow-xl bg-[#F1F100] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[15px] '}>RS : {total}.00</label>
                        <label className={'text-[18px]'}>Total Cost</label>
                    </div>

                    <div
                        className={'mr-6 border-l-[4px] border-l-[green] w-[50%] h-[10vh] shadow-xl bg-[#87C331] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[15px] '}>{count}</label>
                        <label className={'text-[18px]'}>Total Items</label>
                    </div>

                </div>

                <img src={'/public/logo2.png'} alt={'dashboard'} className={'w-[70%] h-[45%] m-auto'}/>

                <div className={'flex flex-col justify-center items-center text-[#B4B4B4] text-[13px]'}>
                    <label className={'px-6 text-justify'}>
                        lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Adipisci aperiam architecto, assumenda atque cum cumque
                    </label>
                    <br/>
                    <label>Developed By </label>
                    <label>-Ruvini Rangathara- </label>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;