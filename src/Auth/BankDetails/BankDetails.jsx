


import React, { useState } from 'react'
import loginimg from '../assets/loginimg.png'
import drlayerlogo4 from '../assets/drlayerlogo4.png'
import TabLink from '../Components/TabLink/TabLink'
import { useNavigate, useLocation } from "react-router-dom"
import SignImage from '../Components/SignImage/SignImage'
import SubscriptionModal from '../Components/SubscriptionModal/SubscriptionModal'
import { FaAngleLeft } from "react-icons/fa6";
import useModals from '../Hooks/useModals'
import SubscriptionsPlanModal from '../Components/SubscriptionsPlanModal/SubscriptionsPlanModal'
import PaymentModal from '../Components/PaymentModal/PaymentModal'
import SuccessModal from '../Components/SuccessModal/SuccessModal'

const BankDetails = () => {

    const {
        subsctTypeModal, setSubsctTypeModal,
        subsctPlanModal, setSubsctPlanModal,
        paymentModal, setPaymentModal,
        successModal, setSuccessModal
    } = useModals()
    const { pathname } = useLocation();

    const stepMap = {
        "/sign-up": 1,
        "/sign-up/upload-license": 2,
        "/sign-up/complete": 3,
    };

    const totalSteps = 3;
    const currentStep = stepMap[pathname] || 3;




    const navigate = useNavigate()





    return (
        <>
            <section className=' bg-[#F6F0E4] h-screen w-full relative  flex justify-between items-center '>
                <div className='h-screen  w-full overflow-y-auto overflow-scroll  p-4'>
                    <div className='flex h-screen flex-col w-full mx-auto max-w-[422px]   items-start '>
                        <div className="flex mt-8  justify-start items-center gap-2.5">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5 p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <img src={drlayerlogo4} alt={`${drlayerlogo4} logo`} className='w-[168px] h-[41px]' />

                        </div>
                        <div className=" lg:mt-24 md:mt-14  mt-8 w-full ">
                            <h1 className="poppins lg:text-[35.12px] md:text-[30px] text-[28px] text-[#000000] leading-[42px] font-[600] ">Bank Details</h1>
                            <p className="text-[14px] md:my-2 my-0.5  tracking-[-1%] inter leading-[22px] text-[#565450]  font-[400]">
                                Ullamco nostrud veniam Lorem dolor excepteur veniam <br className='md:block hidden'></br> Lorem fugiat ipsum
                            </p>
                        </div>
                        <div className="  my-2 w-full ">
                            <TabLink />
                        </div>
                        <form className='w-full  flex flex-col  gap-3.5'>
                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>
                                    Account Name
                                </label>
                                <input type="text" name='account' placeholder='Enter your account name' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                            </div>

                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>
                                    Bank Name
                                </label>
                                <input type="text" name='account' placeholder='Enter your bank name' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                            </div>

                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>
                                    Account Number or IBAN
                                </label>
                                <input type="text" name='account' placeholder='Enter your account number or IBAN' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                            </div>


                            <button onClick={(e) => {
                                e.preventDefault()
                                setSubsctTypeModal(true)
                            }} className=' w-full  mt-5 mb-8  p-3 text-[#FFFF] hover:bg-[#3c2022f8] text-center bg-[#301619] rounded-full inter transition-all duration-300  cursor-pointer' >
                                Sign Up
                            </button>


                        </form>
                    </div>
                </div>
                <div className='w-full  md:flex hidden justify-center p-4 items-center h-screen'>
                    <SignImage
                        currentStep={currentStep}
                        totalSteps={totalSteps}
                    />
                </div>


                <SubscriptionModal
                    subsctTypeModal={subsctTypeModal}
                    setSubsctTypeModal={setSubsctTypeModal}
                    setSubsctPlanModal={setSubsctPlanModal}
                />

                <SubscriptionsPlanModal
                    setSubsctTypeModal={setSubsctTypeModal}
                    subsctPlanModal={subsctPlanModal}
                    setSubsctPlanModal={setSubsctPlanModal}
                    setPaymentModal={setPaymentModal}
                />

                <PaymentModal
                    setSubsctPlanModal={setSubsctPlanModal}
                    paymentModal={paymentModal}
                    setPaymentModal={setPaymentModal}
                    setSuccessModal={setSuccessModal}

                />
                <SuccessModal
                    setPaymentModal={setPaymentModal}
                    successModal={successModal}
                    setSuccessModal={setSuccessModal}
                />
            </section>
        </>
    )
}

export default BankDetails
