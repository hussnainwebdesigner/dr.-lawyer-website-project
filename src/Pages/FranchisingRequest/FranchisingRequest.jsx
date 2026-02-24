import React, { useState, useRef, useEffect } from 'react'
import signupimg from './assets/signupimg.png'
import drlayerlogo4 from './assets/drlayerlogo4.png'
import angleIcon from './assets/angleIcon.png'
import { useNavigate } from "react-router-dom"
import { FaAngleLeft } from 'react-icons/fa6'

const FranchisingRequest = () => {

    const [open, setOpen] = useState(null);
    const [data, setData] = useState({});

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const fields = [
        { label: "Country", options: ["Pakistan", "UAE", "USA", "UK"] },
        { label: "Cash to Invest", options: ["$1,000", "$5,000", "$10,000+", "$50,000+"] },
        { label: "Timeframe", options: ["3 Months", "6 Months", "1 Year", "Long Term"] },
        { label: "Preferred Location", options: ["Local", "International", "Remote"] },
    ];



    const navigate = useNavigate()

    const navigateSignUp = (e) => {
        e.preventDefault()
        navigate("")
    }
    return (
        <>
            <section className=' bg-[#F6F0E4] h-screen w-full  flex justify-between items-center '>
                <div className='h-screen  w-full overflow-y-auto overflow-scroll  p-4'>
                    <div className='flex  flex-col w-full mx-auto max-w-[422px]   items-start '>
                        <div className="flex mt-8 justify-start items-center gap-2.5">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5 p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <img src={drlayerlogo4} alt={`${drlayerlogo4} logo`} className='w-[168px] h-[41px]' />
                        </div>
                    </div>
                    <div className="  w-full mx-auto max-w-[502px] ">
                        <div className="  lg:mt-18 mt-6 w-full ">
                            <h1 className="poppins md:text-[35.12px] text-[24px]  text-[#000000] font-[600] ">Franchising Request</h1>
                            <p className="text-[14px]  tracking-[-1%] inter  text-[#565450]  font-[400]">
                                Ullamco nostrud veniam Lorem dolor excepteur veniam <br className='md:block hidden'></br> Lorem fugiat ipsum
                            </p>
                        </div>

                        <form className='w-full mt-5 flex flex-col gap-5'>

                            <div ref={dropdownRef} className="w-full  space-y-4 bg-[#F7F1E7]  rounded-xl">
                                {fields.map((field, i) => (
                                    <div key={i} className="relative ">

                                        <button
                                            onClick={(e) => { e.preventDefault(), setOpen(open === i ? null : i) }}
                                            className="w-full flex bg-white  text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] lg:h-[60px] h-[50px] rounded-[8px] lg:p-3 p-2.5 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-sm bg-[#FFFF] border justify-between items-center "
                                        >
                                            <span className="font-medium text-gray-800">
                                                {data[i] || field.label}
                                            </span>
                                            <img src={angleIcon}
                                                className={`w-5 h-5  transition ${open === i ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {open === i && (
                                            <div className="transition w-full absolute h-auto z-50 shadow-[#80808040] drop-shadow-sm  bg-white rounded-[8px] py-2 border-[1px] border-[#E6E7E9]">
                                                {field.options.map((option) => (
                                                    <div
                                                        key={option}
                                                        onClick={(e) => {
                                                            setData({ ...data, [i]: option });
                                                            e.preventDefault();
                                                            setOpen(null);
                                                        }}
                                                        className=" py-2 px-4 cursor-pointer hover:bg-gray-100"
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>



                            <button onClick={navigateSignUp} className=' w-full md:max-w-[422px] max-w-[400px] mx-auto mt-5 mb-8 p-3 text-[#FFFF] hover:bg-[#3c2022f8] text-center bg-[#301619] rounded-full inter transition-all duration-300  cursor-pointer' >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className='w-full  lg:flex hidden justify-center p-4 items-center h-screen'>
                    <img src={signupimg} alt="" className='w-full h-full   ' />
                </div>

            </section>

        </>
    )
}

export default FranchisingRequest
