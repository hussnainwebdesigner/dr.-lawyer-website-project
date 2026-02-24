import React from 'react'
import SubscriptionsPlanModal from '../SubscriptionsPlanModal/SubscriptionsPlanModal'
import { IoClose } from 'react-icons/io5'

const SubscriptionModal = ({
    subsctTypeModal,
    setSubsctTypeModal,
    setSubsctPlanModal,

}) => {
    return (
        <>
            {subsctTypeModal && <div onClick={() => setSubsctTypeModal(false)} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                    <div className='min-h-screen w-full flex justify-center items-center  '>

                        <div onClick={(e) => e.stopPropagation()} className="flex relative  w-full max-w-[563px] z-50 transition-all duration-1000 p-6 bg-[#FFFFFF] rounded-[16px] flex-col gap-3.5  justify-between items-center">
                            <button onClick={() => setSubsctTypeModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer shadow-sm rounded-full  bg-[#642329] right-3 top-3 p-1 '>
                                <IoClose className="text-[#FFFFFF] text-[20px] " />
                            </button>
                            <h2 className="lg:text-[28px] text-[22px]  inter  font-[600]">
                                Subscription Type
                            </h2>

                            <div className="flex w-full justify-center md:gap-5 gap-3  items-center">
                                <button
                                    onClick={() => {
                                        setSubsctTypeModal(false)
                                        setSubsctPlanModal(true)
                                    }}
                                    className="w-full p-3 text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                    Individual
                                </button>
                                <button
                                    onClick={() => {
                                        setSubsctTypeModal(false)
                                        setSubsctPlanModal(true)
                                    }} className="w-full p-3 text-[#FFFFFF] rounded-full inter bg-[#75683E]  shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#806f37] drop-shadow-[3px]">
                                    Team
                                </button>
                            </div>
                            <p className="text-[14px] inter text-[#000000CC] font-[500]">
                                One Month Free Trial
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            }

        </>
    )
}

export default SubscriptionModal


// onClick={navigateLogin}

