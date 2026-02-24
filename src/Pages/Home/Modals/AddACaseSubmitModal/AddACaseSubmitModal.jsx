

import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
const AddACaseSubmitModal = ({ setAddACaseModal, addACaseSubmitModal, setAddACaseSubmitModal }) => {

    if (!addACaseSubmitModal) return null;
    const navigate = useNavigate()

    const [caseTypes, setCaseTypes] = useState([
        { caseName: " Priority" },
        { caseName: " Normal" },
    ])
    const [selectcaseType, setSelectCaseType] = useState(null)

    // selectcaseType
    return (
        <>

            <div onClick={() => {

                setAddACaseSubmitModal(false)
            }} className="fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#28160A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                    <div className='min-h-screen w-full flex justify-center items-center  '>
                        <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[497px] z-50 transition-all duration-1000 p-6 gap-3 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">

                            <button onClick={() => {

                                setAddACaseSubmitModal(false)
                            }} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                                <IoClose className="text-[#FFFFFF] text-[20px] " />
                            </button>
                            <h4 className='md:text-[24px] text-[20px] font-[600] poppins'>Add a Case</h4>
                            <div className='w-full flex gap-3 justify-center items-center'>
                                {caseTypes.map((type, index) => (
                                    <button key={index} onClick={() => setSelectCaseType(index)}
                                        className={`w-full p-4.5 transition-all duration-1000 text-[14px] font-[500] text-[##000000] rounded-[8px] inter shadow-[#80808040] ${selectcaseType===index ?"border-[2px] border-[#450202]":"border-[1px] border-[#80808040]"}  cursor-pointer shadow-sm`}>
                                        {type.caseName}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => {
                                    setAddACaseModal(true)
                                    setAddACaseSubmitModal(false)
                                }}
                                className="w-full p-3 mt-2 text-[#FFFFFF] rounded-full inter bg-[#28160A] shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#2b190d] drop-shadow-[3px]">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddACaseSubmitModal