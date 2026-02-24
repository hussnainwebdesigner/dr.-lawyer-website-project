import React, { useEffect, useState } from 'react'
import { NavLink, Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";


import drlayerlogo5 from "./assets/drlayerlogo5.png";
import homeIcon from "./assets/homeIcon.png";
import historyIcon from "./assets/historyIcon.png";
import chatIcon from "./assets/chatIcon.png";
import notificationIcon from "./assets/notificationIcon.png";
import settingIcon from "./assets/settingIcon.png";
import searchIcon from "./assets/searchIcon.png";
import SettingsToolPit from '../../Pages/Settings/SettingsToolPit/SettingsToolPit';
import NotificationsToolPit from '../../Pages/Notifications/NotificationsToolPit';
import { useAuth } from '../../AuthContext/AuthContext';


const Header = () => {
    const location = useLocation();
    const { role } = useAuth();
    const links = [
        {
            icon: homeIcon,
            path: '/home',
            linkname: "Home"
        },
        {
            icon: historyIcon,
            path: role === "lawyer" ? '/history' : "/request",
            linkname: role === "lawyer" ? "History" : "Request"
        },
        {
            icon: chatIcon,
            path: '/chat',
            linkname: "Chat"
        },
        {
            icon: notificationIcon,
            path: '/notification',
            linkname: "Notification",
            tooltip: <NotificationsToolPit />,
            tooltipWith: "w-[710px]",
            tooltipPosition: ""
        },
        {
            icon: settingIcon,
            path: '/settings',
            linkname: "Settings",
            tooltip: <SettingsToolPit />,
            tooltipWith: "w-[702px]  max-h-[80vh]",
            tooltipPosition: ""
        },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSearch, setIsOpenSearch] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [active, setActive] = useState('Home');


    return (
        <>
            <header className={`header w-full lg:h-[104px] fixed top-0 ${isScrolled || location.pathname !== "/home" ? "bg-[#301619]" : "bg-transparent "} flex flex-col justify-center items-center z-50 `}>
                <div className={`    w-full   max-w-[1357px]  p-5  flex justify-between items-center`}>
                    <div className="  w-full flex justify-between gap-3 items-center">
                        <div>
                            <Link to="/" className="  md:w-[175px] w-[130px] md:h-[48px]  flex justify-start items-center  ">
                                <img src={drlayerlogo5} alt="dr.layer logo" className=" flex   items-center " />
                            </Link>
                        </div>
                        <div className="lg:block w-full max-w-[675px]  p-5.5 rounded-full hidden bg-[#FFFFFF33]">
                            <ul className="md:flex   space-x-6 px-2 flex justify-between items-center">
                                {links.map((link, index) => (
                                    <li key={index} className='relative group'>
                                        <NavLink
                                            to={link.path}
                                            className=" transition-colors duration-200"
                                        >
                                            {({ isActive }) => (
                                                <span
                                                    className={`flex group-hover:text-white items-center gap-2 text-[15px] font-[500] ${isActive ? "text-white" : "text-[#A09E9E]"}`}
                                                >
                                                    <img
                                                        src={link.icon}
                                                        alt={link.linkname}
                                                        className={`w-[18px] group-hover:opacity-100 h-[18px] transition-all ${isActive ? "opacity-100" : "opacity-40"}`}
                                                    />
                                                    {link.linkname}
                                                </span>
                                            )}
                                        </NavLink>

                                        {link.tooltip && (
                                            <div
                                                className=" absolute -left-[450px]  top-12 pointer-events-none group-hover:pointer-events-auto opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-50"
                                            >
                                                {/* Tooltip Container */}
                                                <div
                                                    className={` relative ${link.tooltipWith} h-full  overflow-y-auto overflow-scroll bg-[#FAFAFA] rounded-[16px] shadow-lg `}
                                                >
                                                    {link.tooltip}
                                                </div>
                                                <div className="absolute -top-[18px] left-[465px]  w-10 rounded h-10 bg-[#FAFAFA]  rotate-45"></div>
                                            </div>
                                        )}

                                    </li>

                                ))}
                            </ul>


                        </div>

                        <div className={`lg:block hidden  `}>
                            <div className={`flex items-center overflow-hidden   h-[68px] bg-[#FFFFFF33] rounded-full  transition-all duration-300 ease-in-out ${isOpenSearch ? "w-full gap-2 px-4" : "w-[68px]  justify-center"} `} >
                                <img
                                    src={searchIcon}
                                    alt="search"
                                    onClick={() => setIsOpenSearch(!isOpenSearch)}
                                    className="w-[20px] h-[20px] cursor-pointer shrink-0"
                                />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className={` bg-transparent text-white outline-none text-whitetransition-all duration-300 ${isOpenSearch ? "w-full opacity-100" : "w-0 opacity-0"} text-[15px] font-[500]`}
                                />
                            </div>
                        </div>
                        <button onClick={toggleMenu} className='lg:hidden block bg-white p-1.5  rounded-lg' aria-label="Open menu">
                            {isOpen
                                ? <IoCloseSharp className="text-2xl  font-bold text-black" />
                                : <CgMenuRightAlt className="text-2xl  font-bold text-black" />}
                        </button>
                    </div>
                </div>

                <div className={`lg:hidden block   bg-[#301619]/90 backdrop-blur-sm  rounded-xl  transition-all duration-300 ease-in-out mx-4 w-full overflow-hidden ${isOpen ? 'max-h-84 p-6' : 'max-h-0'}`}>

                    <ul className="flex flex-col space-y-5 py-5">
                        {links.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="group transition-colors duration-200"
                                >
                                    {({ isActive }) => (
                                        <span
                                            className={`flex group-hover:text-white items-center gap-2 text-[15px] font-[500] ${isActive ? "text-white" : "text-[#A09E9E]"}`}
                                        >
                                            <img
                                                src={link.icon}
                                                alt={link.linkname}
                                                className={`w-[18px] group-hover:opacity-100 h-[18px] transition-all ${isActive ? "opacity-100" : "opacity-40"}`}
                                            />
                                            {link.linkname}
                                        </span>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className={`lg:hidden block `} >
                        <div
                            className={`flex items-center overflow-hidden   h-[50px] bg-[#FFFFFF33] rounded-full transition-all duration-300 ease-in-out w-full gap-2 px-4 `}
                        >
                            <img
                                src={searchIcon}
                                alt="search"
                                className="w-[18px] h-[18px] cursor-pointer shrink-0"
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                className={` bg-transparent text-white outline-none text-whitetransition-all duration-300 w-full opacity-100  text-[15px] font-[500]`}
                            />
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header;
