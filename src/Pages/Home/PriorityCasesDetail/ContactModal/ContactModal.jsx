import React, { useState } from 'react'
import chat from './assets/chat.png'
import phone from './assets/phone.png'
import whatsapp from './assets/whatsapp.png'

const ContactModal = ({ isContactModal, setIsContactModal }) => {
    const [isContact, setIsContact] = useState([
        { icon: phone, text: "Phone Number" },
        { icon: whatsapp, text: "WhatsApp" },
        { icon: chat, text: "Direct Chat" },
    ])
    const [isSelect, setIsSelect] = useState(null)


    return (

        <>
            {isContactModal &&
                <div onClick={() => setIsContactModal(false)} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>

                            <div onClick={(e) => e.stopPropagation()} className="flex  w-full max-w-[563px] z-50 transition-all duration-1000 md:p-6 p-4 gap-2.5 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">
                                <h2 className=" text-[24px] roboto font-[600]">
                                    Contact
                                </h2>
                                <div className='w-full flex flex-col justify-start gap-2.5 items-start   '>
                                    {isContact.map((contact, index) => (
                                        <div key={index}
                                            onClick={() => setIsSelect(index)}
                                            className={`flex  justify-start gap-2.5 w-full items-center  h-[52px] rounded-[8px] p-3 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs ${isSelect === index ? "bg-[#d3d1d1]" : "bg-[#FFFF]"} `}>
                                            <span className='w-[36px] h-[36px] flex justify-center items-center p-1.5 bg-[#F6F0E4] rounded-full'>

                                                <img src={contact.icon} alt="" className='w-[18px] h-[18px] ' />
                                            </span>
                                            <p className=' text-[14px] inter font-[400] tracking-[-1%] text-[#000]  '>{contact.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex w-full flex-nowrap  justify-center md:gap-8 gap-4 mt-3 items-center">
                                    <button
                                        onClick={() => setIsContactModal(false)}
                                        className=" p-3 w-full text-[#030712] text-[16px] font-[500] rounded-full inter bg-[#ffff] border-[1.27px] border-[#E6E7E9] cursor-pointer hover:bg-[#F0F0F0] shadow-[#80808040] shadow-sm">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => setIsContactModal(false)}
                                        className="p-3 w-full  text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] text-[16px] font-[500] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                        Okay
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

export default ContactModal