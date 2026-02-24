


import React, { useState } from 'react'
import tick1 from '../../assets/tick1.png'
import tick2 from '../../assets/tick2.png'
import cross from '../../assets/cross.png'
import PaymentModal from '../PaymentModal/PaymentModal'
import { IoClose } from 'react-icons/io5'

const SubscriptionsPlanModal = ({
    setSubsctTypeModal,
    subsctPlanModal,
    setSubsctPlanModal,
    setPaymentModal,
}) => {

    const [subsctPlans, setSubsctPlans] = useState([

        {
            name: "Basic Plan",
            price: 30,
            currency: "£",
            duration: "Per Month",
            features: [
                { label: "Unlimited Support", available: tick1 },
                { label: "5GB Server Space", available: tick1 },
                { label: "2 Users per Project", available: tick1 },
                { label: "Email Integration", available: cross },
                { label: "Unlimited Download", available: cross }
            ]
        },
        {
            name: "Standard Plan",
            price: 70,
            currency: "£",
            duration: "Per Month",
            features: [
                { label: "Unlimited Support", available: tick1 },
                { label: "10GB Server Space", available: tick1 },
                { label: "5 Users per Project", available: tick1 },
                { label: "Email Integration", available: tick1 },
                { label: "Unlimited Download", available: cross }
            ]
        },
        {
            name: "Premium Plan",
            price: 150,
            currency: "£",
            duration: "Per Month",
            features: [
                { label: "Unlimited Support", available: tick2 },
                { label: "25GB Server Space", available: tick2 },
                { label: "10 Users per Project", available: tick2 },
                { label: "Email Integration", available: tick2 },
                { label: "Unlimited Download", available: tick2 }
            ]
        }
    ])


    return (
        <>
            {subsctPlanModal &&
                <div onClick={() => {
                    setSubsctTypeModal(true),
                        setSubsctPlanModal(false)
                }} className="fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>
                            <div onClick={(e) => e.stopPropagation()} className="flex relative  w-full max-w-[1198px] z-50 transition-all duration-1000 p-5 pb-6.5 bg-[#FFFFFF] rounded-[16px] flex-col  justify-between items-center">
                                <button onClick={() => {
                                    setSubsctTypeModal(true),
                                        setSubsctPlanModal(false)
                                }} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] right-3 top-3 p-1 '>
                                    <IoClose className="text-[#FFFFFF] text-[20px] " />
                                </button>
                                <h2 className="lg:text-[35.9px] text-[20px] -translate-y-1 inter  font-[600]">
                                    Subscriptions Plan
                                </h2>
                                <p className="text-[14px] inter text-center text-[#000000B2] font-[500]">
                                    Ullamco nostrud veniam Lorem dolor excepteur veniam <br className='md:block hidden '></br>Lorem fugiat ipsum
                                </p>

                                <div className=" w-full grid lg:grid-cols-3 md:grid-cols-3 mt-11 grid-cols-1 lg:gap-5 md:gap-5  gap-12">

                                    {subsctPlans.map((plan, index) => (

                                        <div key={index} className='w-full hover:shadow-lg  rounded-[11px] py-4 px-5.5 border-[1.07px] border-[#E5E5E5]'>
                                            <div className='w-full max-w-[185px] -translate-y-11 flex flex-col justify-center items-center mx-auto  shadow-[#75683E] shadow-sm rounded-[11px] bg-[#75683E] p-2 '>
                                                <h4 className="lg:text-[19.32px] text-[17px] text-[#FFFFFF] inter  font-[500]" >
                                                    {plan.name}</h4>
                                                <h2 className="lg:text-[25.76px] text-[21px] -my-1.5 text-[#FFFFFF] inter  font-[700]">
                                                    {plan.currency} {plan.price}
                                                </h2>
                                                <h4 className="lg:text-[19.32px] text-[17px] text-[#FFFFFF] inter  font-[500]">
                                                    {plan.duration}
                                                </h4>
                                            </div>
                                            <div className='w-full -translate-y-4.5  flex flex-col justify-start gap-0.5 items-start   '>
                                                {plan.features.map((feature, index) => (
                                                    <div key={index} className='flex justify-start gap-4 items-center'>
                                                        <img src={feature.available} alt="" className='w-[11px] h-[11px]' />
                                                        <p className='lg:text-[17px] text-[15px]'>{feature.label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div
                                                onClick={() => {
                                                    setSubsctPlanModal(false)
                                                    setPaymentModal(true)
                                                }}
                                                className='w-full flex  justify-center '>
                                                <button className="w-full max-w-[268px] p-3 text-[#FFFFFF] rounded-full inter bg-[#28160A] shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer lg:text-[17px] text-[15px] hover:bg-[#2d1a0de3] drop-shadow-[3px]">
                                                    Select Plan
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default SubscriptionsPlanModal


// onClick={navigateLogin}
