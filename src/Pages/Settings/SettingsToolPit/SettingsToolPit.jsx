import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import angleIcon1 from "../assets/angleIcon1.png";
import tiktok from "../assets/tiktok.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import LanguageModal from '../LanguageModal/LanguageModal';
import LogoutModal from '../LogoutModal/LogoutModal';
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal';
import ContactUsModal from '../ContactUsModal/ContactUsModal';
import useSettings from '../Hook/useSettings';


const SettingsToolPit = () => {
    
    const { isSettings, handleClick, notificationsOn, setNotificationsOn } =useSettings()
    const links = [
        { image: tiktok, label: "Tiktok", url: "https://tiktok.com" },
        { image: facebook, label: "Facebook", url: "https://facebook.com" },
        { image: instagram, label: "Instagram", url: "https://instagram.com" },
    ];


   
    return (

        <>


            <div className=" w-full z-50  relative      transition-all duration-1000 p-6  gap-2.5 bg-[#FAFAFA] rounded-[16px] ">
                <div className='w-full flex justify-start '>
                    <h2 className="text-[#000] text-[40px] text-start inter font-[600]">
                        Settings
                    </h2>
                </div>
                <div className='w-full   '>
                    <div className='w-full  '>
                        <div className='w-full flex   py-5 flex-col justify-start gap-3 items-start   '>
                             {isSettings.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleClick(item)}
                                    className='flex group justify-between gap-2.5 w-full items-center  h-[52px] rounded-[8px] py-10 px-5 transition  hover:drop-shadow-sm border-[1px] border-[#E6E7E9] cursor-pointer shadow-[#80808040] drop-shadow-xs bg-[#FFFFFF] '>
                                    <p className=' md:text-[20px] text-[16px]  roboto font-[500] tracking-[-1%] text-[#000]  '>{item.text}</p>
                                    {item.type === "arrow" && (
                                        <img src={angleIcon1} className="w-[13px]  transition  text-gray-500" />
                                    )}

                                    {item.type === "toggle" && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(), setNotificationsOn(!notificationsOn) }}
                                            className={`md:w-[59px] w-[50px] md:h-[31px] h-[25px] cursor-pointer rounded-full transition relative ${notificationsOn ? "bg-[#D9CBB1]" : "bg-gray-300"}`}
                                        >
                                            <span
                                                className={`absolute top-[2px] shadow-[#80808040] drop-shadow-xs left-[2.5px] md:w-[26px] w-[20px] md:h-[26px] h-[20px] bg-white rounded-full transition ${notificationsOn ? "translate-x-[26px]" : ""}`}
                                            />
                                        </button>
                                    )}
                                </div>
                            ))}
                            <div className='w-full flex justify-center'>
                                <ul className="space-y-1.5   flex justify-center items-center gap-2 text-gray-200">
                                    {links.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                to={link.url}
                                                className="hover:text-white  flex justify-center items-center rounded-[22.62px] bg-[#ffff] hover:drop-shadow-sm border-[1px] border-[#E6E7E9]  w-[92px] h-[92px] transition md:text-[20px] text-[13px] font-[400]"
                                            >
                                                <img src={link.image} alt={link.label} className='w-[31px] h-[31px]' />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
    )

   
}

export default SettingsToolPit

