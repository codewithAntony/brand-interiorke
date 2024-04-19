import React from 'react';
import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
    return (
        <header className="bg-[#A70000]">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <h1 className="text-white font-bold text-sm sm:text-xl flex-wrap">
                    <span>Brand</span>
                    <span>Interior</span>
                    <span>KE</span>
                </h1>
                <div className="flex items-center">
                    <form className="p-3 flex text-gray-600 items-center">
                        <input
                            type="text"
                            placeholder="Search for anything"
                            className="  rounded-full border-none focus:outline bg-yellow-300 w-20 sm:px-[180px] sm:py-[15px] sm:text-gray-900 "
                        />
                    </form>
                    <CiSearch className="text-white mr-3 text-2xl sm:text-4xl" />
                </div>

                <div className="flex ml-5 gap-3 sm:gap-10">
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white sm:w-10 sm:h-10 sm:border-[2px]">
                        <CiUser className="text-white text-1xl sm:text-2xl" />
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white sm:w-10 sm:h-10 sm:border-[2px]">
                        <CiHeart className="text-white text-1xl sm:text-2xl" />
                    </div>
                    <button className="hidden sm:px-[20px] rounded-full sm:flex sm:items-center gap-2 bg-[#FF5952]">
                        <IoBagHandleOutline className="hidden sm:text-white text-1xl sm:text-2xl sm:inline" />
                        <h3 className="text-white text-sm">Cart</h3>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
