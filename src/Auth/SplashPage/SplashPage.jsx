import React, { useEffect, useState } from 'react'
import drlayervedio from "../assets/drlayervedio.mp4"
import drlayerlogo2 from "../assets/drlayerlogo2.png"
import { useNavigate } from 'react-router-dom'

const SplashPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 11000);
        return () => clearTimeout(timer);
    }, [])



    const handleRole = (role) => {
        navigate(`/login?role=${role}`);
    };



    return (

        <div className="w-full min-h-screen   relative  ">
           
            <div className=" fixed inset-0 flex overflow-y-auto overflow-y-auto overflow-scroll    justify-center items-center z-30 bg-[#30161999]  h-[100%] w-[100%]">
                <div className='h-screen w-full   overflow-y-auto overflow-scroll p-4 '>
                    {isLoading ? (
                        <div className="flex min-h-screen flex-col   justify-center items-center">
                            <img src={drlayerlogo2} alt="" className='md:w-[222px] w-[180px] transition-all duration-1000' />
                        </div>

                    ) : (

                        <div className="flex min-h-screen flex-col   justify-center items-center">
                            <div className="flex  w-full max-w-[563px] transition-all duration-1000 p-6 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">
                                <h2 className="text-[28px]  inter  font-[200]">
                                    Sign Up
                                </h2>
                                <div className="flex w-full justify-center gap-5 my-4 items-center">
                                    <button onClick={() => handleRole("Lawyer")} className="w-full p-3 text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                        Lawyer
                                    </button>
                                    <button onClick={() => handleRole("User")} className="w-full p-3 text-[#FFFFFF] rounded-full inter bg-[#75683E]  shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#806f37] drop-shadow-[3px]">
                                        User
                                    </button>
                                </div>
                                <p className="text-[14px] inter text-[#000000CC] font-[500]">
                                    I already have an account
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="fixed object-cover z-0 h-[100%] w-[100%]">

                <video
                    className="fixed object-cover object-bottom z-0 h-full w-full"
                    autoPlay
                    loop
                    muted
                >
                    <source src={drlayervedio} type="video/mp4" />
                </video>

            </div>
        </div>
    )
}

export default SplashPage