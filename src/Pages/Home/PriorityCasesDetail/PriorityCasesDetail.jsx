

import { useState } from 'react'
import SendOfferModal from './SendOfferModal/SendOfferModal'
import ContactModal from './ContactModal/ContactModal'
import case1 from '../assets/case1.png'
import case2 from '../assets/case2.png'
import case3 from '../assets/case3.png'
import case4 from '../assets/case4.png'
import case5 from '../assets/case5.png'
import case6 from '../assets/case6.png'
import signature from '../assets/signature.png'
import { useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa6'



const PriorityCasesDetail = () => {


    const cases = [
        { casesImage: case1 },
        { casesImage: case2 },
        { casesImage: case3 },
        { casesImage: case4 },
        { casesImage: case5 },
        { casesImage: case6 },
    ]
    const buttons = [
        { btnTitle: "Interested", bgBtn: "bg-[#75683E] text-white  w-full max-w-[110px]" },
        { btnTitle: "Not interested", bgBtn: "bg-[#53453B] text-white  w-full max-w-[116px]" },
        { btnTitle: "Postponed", bgBtn: "bg-[#53453B] text-white  w-full max-w-[110px]" },
    ]
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState(0)
    const [isSendOfferModal, setIsSendOfferModal] = useState(false)
    const [isContactModal, setIsContactModal] = useState(false)
    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex md:flex-nowrap flex-wrap items-center md:mt-10 mt-8 gap-3 justify-between ">
                        <div className="w-full flex  items-center gap-2 ">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5 p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                                Priority Cases Detail
                            </h1>
                        </div>

                        <div className="w-full flex items-center flex-wrap md:flex-nowrap justify-end gap-3 ">
                            <div className=" w-full max-w-[330px] grid grid-cols-3 gap-3 ">
                                {buttons.map((btn, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveButton(index)}
                                        className={` lg:py-3 py-2  roboto hover:shadow-lg cursor-pointer border-[1.27px] text-center lg:text-[14px] text-[12px] font-[400] border-[#53453B] rounded-full transition-all duration-300 ${activeButton === index ? btn.bgBtn : "bg-[#F6F0E4]"
                                            }`}
                                    >
                                        {btn.btnTitle}
                                    </button>
                                ))}
                            </div>
                            <button
                                className={`w-full lg:max-w-[144px] max-w-[110px] lg:py-3 py-2 roboto hover:shadow-lg transition-all duration-200  cursor-pointer border-[1.27px] text-center lg:text-[14px]  text-[13px] font-[400]  border-[#53453B] rounded-full bg-[#75683E] text-white transition-all duration-300 `}
                            >
                                Interested (10)
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:p-10 p-4  flex flex-col w-full justify-between  gap-6 bg-white mt-6  rounded-[22px] ">
                        <div className="w-full flex flex-col gap-2">
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[32px] md:text-[26px] text-[22px] font-[600]">
                                Tax Lawyer
                            </h1>
                            <p className=" roboto  text-[#28160A] text-start md:tracking-[1px] md:leading-[25px] md:text-[20px] text-[15px] font-[400]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br></br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[32px] md:text-[26px] text-[22px] font-[600]">
                                Case Attachment
                            </h1>
                            <div className="flex md:justify-start justify-center flex-wrap gap-3">
                                {cases.map((caseItem, index) => (
                                    <div key={index} className="relative w-[107px] h-[101px] overflow-hidden rounded-[23px] ">
                                        <img src={caseItem.casesImage} className="w-full h-full object-fit" />
                                    </div>
                                ))}
                            </div>
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[32px] md:text-[26px] text-[22px] font-[600]">
                                Case Notes
                            </h1>
                            <p className=" roboto  text-[#28160A] text-start md:tracking-[1px] md:leading-[25px] md:text-[20px] text-[15px] font-[400]">
                                Since the US tax system is complex and subject to frequent changes, tax lawyers must be up to date with all IRS regulations and any amendments to the tax law.
                            </p>

                            <div className="flex w-full justify-between items-center  ">
                                <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[32px] md:text-[26px] text-[22px] font-[600]">
                                    Your Signature
                                </h1>
                                <button className="relative   inter cursor-pointer text-[#D9CBB1] text- text-center  md:text-[18px] text-[16px] font-[500] underline  underline-offset-2  underline-[#D9CBB1]">
                                    Clear
                                </button>
                            </div>
                            <div className="flex w-full justify-center border-[1px] rounded-[6px] border-[#E6E7E9] items-center max-w-[572px] p-5 ">
                                <img src={signature} className="w-full max-w-[334px]" />
                            </div>

                        </div>
                        <div className="flex w-full justify-center md:flex-nowrap flex-nowrap  md:gap-5 gap-3  items-center">
                            <button
                                onClick={() => setIsSendOfferModal(true)}
                                className="w-full  max-w-[299px]  md:p-4 p-3 text-[#030712] text-[18px] font-[500]   rounded-full inter bg-[#F0F0F0]  border-[1.27px] border-[#E6E7E9] cursor-pointer hover:bg-[#F0F0F] shadow-[#80808040] shadow-sm">
                                Send offer
                            </button>
                            <button
                                onClick={() => setIsContactModal(true)}
                                className="w-full  max-w-[299px] md:p-4 p-3 text-[#030712] text-[18px] font-[500]   rounded-full inter bg-[#ffff] border-[1.27px] border-[#E6E7E9] cursor-pointer hover:bg-[#F0F0F0] shadow-[#80808040] shadow-sm">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <SendOfferModal
                isSendOfferModal={isSendOfferModal}
                setIsSendOfferModal={setIsSendOfferModal}
            />
            <ContactModal
                isContactModal={isContactModal}
                setIsContactModal={setIsContactModal}
            />
        </>
    )
}

export default PriorityCasesDetail
