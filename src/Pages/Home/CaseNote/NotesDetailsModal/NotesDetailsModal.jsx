import React, { useState } from 'react'
import { PiDotsThreeCircleFill } from "react-icons/pi";
import editIcon from './assets/editIcon.png'
import deleteIcon from './assets/deleteIcon.png'
import { IoClose } from 'react-icons/io5';

const NotesDetailsModal = ({ notesDetailsModal, setNotesDetailsModal }) => {
    const [modalList, setModalList] = useState(false)

    return (

        <>
            {notesDetailsModal &&
                <div onClick={() => setNotesDetailsModal(false)} className=" fixed inset-0  flex  z-50 bg-[#1A1A1A99] backdrop-blur-[20px] overflow-y-auto p-4 h-screen w-[100%]">

                    <div onClick={(e) => e.stopPropagation()} className="flex relative  w-full max-w-[563px] z-50 transition-all m-auto duration-1000 md:p-6 p-4 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">
                        <button onClick={() => setNotesDetailsModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                            <IoClose className="text-[#FFFFFF] text-[20px] " />
                        </button>
                        <button
                            onClick={() => setModalList(!modalList)}
                            className=" absolute top-4 right-4 text-[#74673E] rounded-full shadow-[#80808040] cursor-pointer  drop-shadow-[3px]">
                            <PiDotsThreeCircleFill size={28} />
                        </button>
                        {modalList && <div className="absolute top-8 right-8 z-30 p-4 w-[140px] bg-white border border-[#E5E5E5] shadow-lg rounded-l-[16px] rounded-b-[16px] flex flex-col gap-3">
                            <button
                                onClick={() => { setModalList(false), setNotesDetailsModal(false) }}
                                className="flex items-center gap-3 cursor-pointer pb-2 border-b border-dashed border-[#E5E5E5] text-left"
                            >
                                <img src={editIcon} alt="Edit" className="w-[17px]" />
                                <span className="text-[16px] font-roboto font-medium">Edit</span>
                            </button>

                            <button
                                onClick={() => { setModalList(false), setNotesDetailsModal(false) }}
                                className="flex items-center gap-3 cursor-pointer text-left"
                            >
                                <img src={deleteIcon} alt="Delete" className="w-[17px]" />
                                <span className="text-[16px] font-roboto font-medium">Delete</span>
                            </button>
                        </div>
                        }


                        <h1 className=" text-[24px] roboto font-[600]">
                            Notes Details
                        </h1>

                        <div className='w-full flex flex-col justify-start gap-1 items-start   '>
                            <h2 className=" text-[20px] inter font-[500]">
                                Brooklyn Simmons
                            </h2>
                            <p className=" roboto  text-[#ADB3B7] text-start tracking-[4%] leading-[21.12px] md:text-[16px] text-[13px] font-[400]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br></br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>

            }

        </>


    )
}

export default NotesDetailsModal