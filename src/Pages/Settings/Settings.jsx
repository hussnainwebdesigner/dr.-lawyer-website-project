import { useState } from 'react'
import angleIcon1 from "./assets/angleIcon1.png";
import LanguageModal from './LanguageModal/LanguageModal';
import LogoutModal from './LogoutModal/LogoutModal';
import ChangePasswordModal from './ChangePasswordModal/ChangePasswordModal';
import ContactUsModal from './ContactUsModal/ContactUsModal';
import { useNavigate } from 'react-router-dom';
import useSettings from './Hook/useSettings';


const Settings = () => {

   const { 
        isSettings,
        handleClick,
        notificationsOn,
        setNotificationsOn,
        languageModal,
        setLanguageModal,
        logoutModal,
        setLogoutModal,
        changePasswordModal,
        setChangePasswordModal,
        contactUsModal,
        setContactUsModal,
    } =useSettings()

    return (

        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">

                    <div className="w-full mt-10  ">
                        <h1 className="relative inter z-10 tracking-[-5%]  text- text-start lg:text-[40px] md:text-[32px] text-[26px] font-[600]">
                            Settings
                        </h1>
                    </div>

                    <div className="flex w-full   mt-2  z-50 transition-all duration-1000 md:p-6 p-4 gap-2.5 bg-[#FFFFFF] rounded-[26px] flex-col  justify-center items-center">

                        <div className='w-full flex flex-col justify-start gap-2.5 items-start   '>
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
                        </div>
                    </div>
                </div>
                
            </section>

            <LanguageModal
                languageModal={languageModal} 
                setLanguageModal={setLanguageModal}
            />
            <LogoutModal
                logoutModal={logoutModal}
                setLogoutModal={setLogoutModal}
            />
            <ChangePasswordModal
                changePasswordModal={changePasswordModal}
                setChangePasswordModal={setChangePasswordModal}
            />
            <ContactUsModal
                contactUsModal={contactUsModal}
                setContactUsModal={setContactUsModal}
            />
        </>
    )
}

export default Settings
