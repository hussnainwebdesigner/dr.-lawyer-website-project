import { useState } from 'react'
import priorityImage1 from '../assets/priorityImage1.png'
import priorityImage2 from '../assets/priorityImage2.png'
import priorityImage3 from '../assets/priorityImage3.png'
import priorityImage4 from '../assets/priorityImage4.png'
import { useNavigate } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa6'


const AllCases = () => {
    const priorityCases = [
        {
            image: priorityImage1,
            title: "Family Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues. When people think of family lawyers...",
        },
        {
            image: priorityImage2,
            title: "Labor Lawyer",
            decs: "Labor and employment lawyers focus on matters concerning the relationship between employers, employees, and unions...",
        },
        {
            image: priorityImage3,
            title: "Personal Injury Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues. When people think of family lawyers...",
        },
        {
            image: priorityImage4,
            title: "Constitutional Lawyer ",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues. When people think of family lawyers...",
        },
        {
            image: priorityImage1,
            title: "Family Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues. When people think of family lawyers...",
        },
        {
            image: priorityImage2,
            title: "Labor Lawyer",
            decs: "Labor and employment lawyers focus on matters concerning the relationship between employers, employees, and unions...",
        },
        {
            image: priorityImage3,
            title: "Personal Injury Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues. When people think of family lawyers...",
        },
        {
            image: priorityImage4,
            title: "Constitutional Lawyer ",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues. When people think of family lawyers...",
        },
    ]

    const [activeButton, setActiveButton] = useState(0)
    const buttons = [
        { btnTitle: "Priority Cases", bgBtn: "bg-[#75683E] text-white  border-[1.27px] border-[#675C37]" },
        { btnTitle: "Cases", bgBtn: "bg-[#75683E] text-white  border-[1.27px] border-[#675C37]" },
    ]

    const navigate = useNavigate()

    const casesNotes = () => navigate("/home/case-note")
    const priorityDetail = () => navigate("/home/priority-cases-detail")



    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex md:flex-nowrap flex-wrap items-center md:mt-10 mt-8 gap-3 justify-between ">
                        <div className="w-full  flex items-center gap-2 ">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg p-1.5 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                                {buttons[activeButton].btnTitle}
                            </h1>
                        </div>

                        <div className="w-full flex items-center    justify-end ">
                            <div className="  w-full max-w-[379px] border-[1.27px]  border-[#E5E5E5] flex items-center p-2 bg-[#FFFF]   border-[#53453B] rounded-full justify-center ">
                                {buttons.map((btn, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveButton(index)}
                                        className={` md:py-4 py-3 w-full lato cursor-pointer  text-center md:text-[16px] text-[14px] font-[600] rounded-full hover:bg-[#75683E] hover:text-white   transition-all duration-300 ${activeButton === index ? btn.bgBtn : " "} `}
                                    >
                                        {btn.btnTitle}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className={`w-full py-4 grid ${activeButton ? "lg:grid-cols-3 gap-6" : "lg:grid-cols-4 gap-4 "}  md:grid-cols-2 grid-cols-1  `}>
                        {priorityCases.map((cases, index) => (
                            <div key={index} className="w-full relative hover:shadow-lg transition-all duration-200   bg-[#FFFF] flex flex-col justify-center items-center  p-2   rounded-[28px]">


                                <button onClick={casesNotes} className={`absolute top-5 right-5 px-3 py-1 rounded-full text-white  inter cursor-pointer bg-[#75683E]  z-10 text- text-center  text-[16px] font-[400] ${activeButton ? "block" : "hidden"}`}>
                                    Case Note
                                </button>

                                <img src={cases.image} alt={`${cases.image} image`} className="w-full h-full rounded-[28px]" />
                                <div className="w-full p-2 border-b-[1.27px] border-dashed border-[#E5E5E5] ">
                                    <p className=" roboto  z-10 text-[#28160A] text-start text-[17px] font-[400]">Title : <span className=" roboto z-10 text-[#28160A] text-start text-[18px] font-[500]">{cases.title}</span> </p>
                                    <p className=" roboto mt-1 z-10 text-[#28160A] text-start text-[17px] font-[400]">Description : <span className="text-[15px]">{cases.decs}</span> </p>
                                </div>
                                <div className={`   ${activeButton ? "flex items-center justify-center gap-6" : " flex items-center justify-center gap-0"} `}>
                                    <button onClick={!activeButton ? priorityDetail : undefined} className="relative my-auto py-1 inter cursor-pointer text-[#28160A] z-10 text- text-center  md:text-[20px] text-[16px] font-[400]">
                                        {activeButton ? "view all" : "Details"}
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllCases





