import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#A70000] flex flex-col">
            <div className="">
                <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                    <Link to="/">
                        <h1 className="text-white font-bold text-sm sm:text-xl flex-wrap">
                            <span>Brand</span>
                            <span>Interior</span>
                            <span>KE</span>
                        </h1>
                    </Link>
                    <div className="flex items-center gap-2 sm:my-4 sm:gap-4">
                        <form className="p-3 bg-white rounded-full flex items-center">
                            <input
                                type="text"
                                placeholder="Search for anything"
                                className="bg-transparent focus:outline-none w-12 sm:w-60"
                            />
                        </form>

                        <div className="hover:bg-[#790202] cursor-pointer mr-3 flex items-center justify-center hover:w-7 hover:h-7  rounded-full sm:hover:w-10 sm:hover:h-10 ">
                            <CiSearch className="text-white text-1xl sm:text-2xl" />
                        </div>
                    </div>

                    <div className="flex justify-center ml-5 gap-3 sm:gap-10 cursor-pointer">
                        <Link to="/sign-in">
                            <div className="w-6 h-6 flex items-center  justify-center rounded-full border border-white sm:w-10 sm:h-10 sm:border-[2px]">
                                <CiUser className="text-white text-1xl sm:text-2xl" />
                            </div>
                        </Link>
                        <Link to="/wishlist">
                            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white sm:w-10 sm:h-10 sm:border-[2px]">
                                <CiHeart className="text-white text-1xl sm:text-2xl" />
                            </div>
                        </Link>
                        <Link to="/cart">
                            <button
                                className="hidden sm:px-[35px]
                            sm:py-[8px] rounded-full sm:flex sm:items-center gap-2 bg-[#FF5952] hover:bg-[#A70000]"
                            >
                                <IoBagHandleOutline className="hidden sm:text-white text-1xl sm:text-2xl sm:inline" />
                                <h3 className="text-white text-sm">Cart</h3>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="mx-5 sm:mx-[100px]" />

            <Link to="/products">
                <div className="mt-[15px] text-white flex gap-3 justify-center sm:my-[25px] font-bold text-sm sm:gap-10">
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Cookware
                    </h2>
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Dining Sets
                    </h2>
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Soup Set
                    </h2>
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Glassware
                    </h2>
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Stands
                    </h2>
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Tea Sets
                    </h2>
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Healthy & Beauty
                    </h2>
                    <h2 className="hidden hover:border-white hover:border-b-2 sm:inline">
                        Appliances
                    </h2>
                </div>
            </Link>
        </header>
    );
};

export default Header;
