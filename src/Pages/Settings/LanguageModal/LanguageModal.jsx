import React from 'react'
import { IoClose } from 'react-icons/io5';
const LanguageModal = ({ languageModal, setLanguageModal }) => {
    if (!languageModal) return null;

    return (
        <>

            <div onClick={() => setLanguageModal(false)} className="fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                    <div className='min-h-screen w-full flex justify-center items-center  '>
                        <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[461px] z-50 transition-all duration-1000 p-6 gap-3 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">

                            <button onClick={() => setLanguageModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                                <IoClose className="text-[#FFFFFF] text-[20px] " />
                            </button>
                            <h4 className='md:text-[24px] text-[20px] font-[600] poppins'>Language</h4>
                            <div className='w-full flex gap-3 justify-center items-center'>
                                <button
                                    className="w-full p-4.5  text-[14px] font-[500] text-[##000000] rounded-full inter shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer shadow-sm">
                                    English
                                </button>
                                <button
                                    className="w-full p-4.5  text-[14px] font-[500] text-[##000000]  rounded-full inter shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer  shadow-sm">
                                    Arabic
                                </button>
                            </div>
                            <button
                                onClick={() => setLanguageModal(false)}
                                className="w-full max-w-[235px] p-3 mt-2 text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default LanguageModal