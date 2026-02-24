import React from 'react'
import woodenbrownjudge from '../assets/woodenbrownjudge.png'

const RequestModal = ({
    userRequest,
    requestSelect,
    requestModal,
    setRequestModal
}) => {


    const selectedRequest = userRequest[requestSelect];
    return (
        <>
            {requestModal && <div className="fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                    <div className='min-h-screen w-full flex justify-center items-center  '>
                        <div onClick={(e) => e.stopPropagation()} className="flex overflow-clip relative w-full max-w-[563px] z-50 transition-all duration-1000 p-6 gap-3 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">

                            <img src={woodenbrownjudge} alt={`wooden brown judge image`} className=" absolute -bottom-6 -right-14 opacity-40 w-full max-w-[438px] transition-all duration-200 h-full max-h-[319px] " />
                            <div className='flex w-full flex-col justify-center gap-1 items-center'>
                                <div className='md:w-[150px] w-[120px] overflow-hidden rounded-[18px] md:h-[150px] h-[120px]'>

                                    <img src={selectedRequest.image} alt={`${selectedRequest.image} image`} className="hover:scale-105 w-full transition-all duration-200 h-full " />
                                </div>
                                <p className=" roboto  z-10 text-[#000] text-start text-[20px] font-[500]"> {selectedRequest.name}</p>
                                <p className=" roboto  z-10 text-[#28160A8C] text-start text-[15px] font-[400]">{selectedRequest.time} {selectedRequest.date}</p>
                                <div className='flex w-full flex-col pb-3 mt-5 border-b-[2px] border-dashed border-[#E5E5E5] justify-start items-center'>
                                    <p className=" roboto  z-10 text-[#28160A8C] text-start  text-[16px] font-[400]">{selectedRequest.decs}</p>
                                </div>
                            </div>
                            <div className='flex w-full flex-col gap-1 '>
                                <p className=" roboto  z-10 text-[#28160A8C] text-start  text-[16px] font-[400]">Case Title : <span className="  text-[#28160A] text-start  text-[16px] font-[500]">Tax Lawyer</span></p>
                                <p className=" roboto  z-10 text-[#28160A] text-start  text-[16px] font-[400]">Description  : {selectedRequest.decs}</p>
                                <p className=" roboto  z-10 text-[#28160A] text-start  text-[37px] font-[700]">{selectedRequest.amount}</p>
                            </div>
                            <div className="flex w-full justify-center md:gap-5 gap-3 items-center">
                                <button
                                    onClick={() => setRequestModal(false)}
                                    className="w-full p-3 text-[16px] inter  z-30 text-[#030712] font-[500] rounded-full inter bg-[#ffff]/70  cursor-pointer border-[1px] border-[#E6E7E9] cursor-pointer shadow-[#80808040] hover:shadow-sm">
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setRequestModal(false)}
                                    className="w-full p-3 text-[#FFFFFF] z-30 cursor-pointer rounded-full inter bg-[#4F3F31]/90 shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#4F3F31] drop-shadow-[3px]">
                                    Next
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

export default RequestModal
{/*
<h1>{selectedRequest.amount}</h1>
<p>{selectedRequest.decs}</p> */}