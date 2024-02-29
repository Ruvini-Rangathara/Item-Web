import React from 'react';

const Header = () => {
    return (
        <>
            <div
                className="ml-[5vw] w-[95vw] h-12 shadow-md bg-[#F5F5F5] text-[#FF6400] text-[20px] flex fixed items-center justify-center z-[1000]">
                <img src={'/src/assets/logo2.png'} className={'w-8 h-8 mr-6'} alt={'logo'}/>
                Item Management System
            </div>

        </>
    );
};

export default Header;
