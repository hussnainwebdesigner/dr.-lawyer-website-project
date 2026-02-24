import React from 'react'
import { IoClose } from 'react-icons/io5'

const AddNotesModal = ({ addNotesModal, setAddNotesModal }) => {
    return (

        <>
            {addNotesModal &&
                <div onClick={() => setAddNotesModal(false)} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>

                            <div onClick={(e) => e.stopPropagation()} className="flex relative  w-full max-w-[563px] z-50 transition-all duration-1000 md:p-6 p-4 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">
                                <button onClick={() => setAddNotesModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                                    <IoClose className="text-[#FFFFFF] text-[20px] " />
                                </button>
                                <h2 className=" text-[24px]  roboto font-[600]">
                                    Add Notes
                                </h2>

                                <div className='w-full flex flex-col justify-start gap-2.5 items-start   '>
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Name</label>
                                        <input type="email" name='email' placeholder='Enter name' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Case Description</label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="7"
                                            placeholder="Tax lawyer are experts in the US tax system. They help businesses and individuals"
                                            className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0'
                                        >

                                        </textarea>

                                    </div>
                                </div>
                                <div className="flex w-full justify-center gap-5 mt-3 items-center">
                                    <button
                                        onClick={() => setAddNotesModal(false)}
                                        className="p-3 w-[235px]  text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] text-[16px] font-[500] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }

        </>


    )
}

export default AddNotesModal