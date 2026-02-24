import React, { useState } from 'react'
import SuccessModal from '../SuccessModal/SuccessModal'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'
import applelogo from '../../assets/applelogo.png'
import googlepay from '../../assets/googlepay.png'
import { IoClose } from 'react-icons/io5'

const PaymentModal = ({

   setSubsctPlanModal,
    paymentModal,
    setPaymentModal,
    setSuccessModal
}) => {


    const paymentMethods = [
        {
            id: "card",
            title: "Master / Visa",
            icons: [
                { img: visa, width: "w-[51px]", alt: "Visa" },
                { img: mastercard, width: "w-[30px]", alt: "Mastercard" }
            ]
        },
        {
            id: "apple",
            title: "Apple Pay",
            icons: [
                { img: applelogo, width: "w-[28px]", alt: "Apple Pay" }
            ]
        },
        {
            id: "google",
            title: "Google Pay",
            icons: [
                { img: googlepay, width: "w-[23px]", alt: "Google Pay" }
            ]
        }
    ]
    const paymentStyles = {
        selected: "bg-[#EEDDD3]",
        unselected: "bg-[#E8E6EA]"
    }
    const [selected, setSelected] = useState("card")

    return (
        <>
            {paymentModal &&
                <div onClick={() => {
                    setPaymentModal(false),
                        setSubsctPlanModal(true)
                }} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>

                            <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[563px] z-50 transition-all duration-1000 p-6 pb-7 bg-[#FFFFFF] rounded-[16px] flex-col  justify-between gap-2 items-center">
                                <button onClick={() => {
                                    setPaymentModal(false),
                                        setSubsctPlanModal(true)
                                }} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] right-3 top-3 p-1 '>
                                    <IoClose className="text-[#FFFFFF] text-[20px] " />
                                </button>
                                <h2 className=" text-[24px]  roboto -translate-y-1 font-[600]">
                                    Payment
                                </h2>

                                <div className='w-full flex flex-col  justify-start gap-0.5 items-start   '>


                                    {paymentMethods.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => setSelected(item.id)}
                                            className={`flex items-center w-full justify-between  md:p-4 p-2.5 mb-3 rounded-[8px]  transition-all duration-1000 cursor-pointer ${selected === item.id
                                                ? "  shadow-sm  border-[3px] border-[#642329]"
                                                : " shadow-[#80808040] border-[1px] border-[#E6E7E9]  hover:shadow-sm text-[#28160A]"}
                                                   `}
                                        >
                                            <div className="flex items-center gap-3">
                                                {item.icons.map((icon, index) => (
                                                    <img
                                                        key={index}
                                                        src={icon.img}
                                                        alt={icon.alt}
                                                        className={` ${icon.width} `}
                                                    />
                                                ))}
                                                <span className="text-[14px] inter  font-[500]">{item.title}</span>
                                            </div>

                                            
                                            <div
                                                className={`w-[22px] h-[22px] transition-all duration-1000 rounded-full flex items-center justify-center   ${selected === item.id
                                                    ? " bg-[#642329]"
                                                    : " bg-[#E8E6EA]"}`}
                                            >
                                                <div className="w-[10px] h-[10px] shadow-[1px] drop-shadow-[#00000040] bg-[#ffff] rounded-full" />

                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <div className="flex w-full justify-center md:gap-5 gap-3 items-center">
                                    <button
                                        onClick={() => setPaymentModal(false)}
                                        className="w-full p-3 text-[16px] inter text-[#030712] font-[500] rounded-full inter bg-[#ffff]   border-[1px] border-[#E6E7E9] cursor-pointer shadow-[#80808040] hover:shadow-sm">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSuccessModal(true)
                                            setPaymentModal(false)
                                        }}
                                        className="w-full p-3 text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
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

export default PaymentModal


// onClick={navigateLogin}

