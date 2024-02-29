const Dashboard = () => {
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

                <div className={'w-[97%] h-[73vh] border rounded-lg mx-6 mt-4'}>

                </div>

            </div>
            <div className={'w-[30%] h-[98%] border rounded-lg mx-6 mb-4'}>
                <div className={'flex flex-col mt-10'}>
                    <div
                        className={'mb-4 ml-6 border-l-[4px] border-l-[#D6D600] w-[50%] h-[10vh] shadow-xl bg-[#F1F100] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[15px] '}>175400.00</label>
                        <label className={'text-[18px]'}>Total Cost</label>
                    </div>

                    <div
                        className={'mr-6 border-l-[4px] border-l-[green] w-[50%] h-[10vh] shadow-xl bg-[#87C331] mx-auto rounded-2xl shadow-m  flex flex-col justify-center items-center'}>
                        <label className={'text-[15px] '}>23</label>
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