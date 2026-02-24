import { useState } from 'react'
import priorityImage1 from './assets/priorityImage1.png'
import priorityImage2 from './assets/priorityImage2.png'
import priorityImage3 from './assets/priorityImage3.png'
import priorityImage4 from './assets/priorityImage4.png'


const History = () => {
    const priorityCases = [
        {
            image: priorityImage4,
            title: "Constitutional Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues.",
        },
        {
            image: priorityImage1,
            title: "Family Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues.",
        },
        {
            image: priorityImage2,
            title: "Labor Lawyer",
            decs: "Labor and employment lawyers focus on matters concerning employers and employees.",
        },
        {
            image: priorityImage4,
            title: "Constitutional Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues.",
        },
        {
            image: priorityImage1,
            title: "Family Lawyer",
            decs: "Family lawyers are well versed in all laws concerning domestic relations and family-related issues.",
        },
        {
            image: priorityImage2,
            title: "Labor Lawyer",
            decs: "Labor and employment lawyers focus on matters concerning employers and employees.",
        },
    ]

    const buttons = [
        { btnTitle: "Interested", bgBtn: "bg-[#75683E] text-white" },
        { btnTitle: "Not interested", bgBtn: "bg-[#53453B] text-white" },
        { btnTitle: "Postponed", bgBtn: "bg-[#53453B] text-white" },
    ]

    const [activeButton, setActiveButton] = useState(0)
    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex md:flex-nowrap flex-wrap items-center md:mt-10 mt-8 gap-3 justify-between ">
                        <div className="w-full  ">
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                                History
                            </h1>
                        </div>

                        <div className="w-full flex items-center  justify-end gap-2">
                            {buttons.map((btn, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveButton(index)}
                                    className={`w-[112px] py-3 roboto hover:shadow-lg transition-all duration-200  cursor-pointer border-[1.27px] text-center text-[12px] font-[400]  border-[#53453B] rounded-full  transition-all duration-300
      ${activeButton === index ? btn.bgBtn : "bg-[#F6F0E4] "} `}
                                >
                                    {btn.btnTitle}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div className="w-full py-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 ">
                        {priorityCases.map((cases, index) => (
                            <div key={index} className="w-full relative hover:shadow-lg transition-all duration-200  bg-[#FFFF] flex flex-col justify-center items-center  p-2   rounded-[28px]">
                                <span
                                    className={`absolute top-5 right-5 px-3 py-1 rounded-full text-white text-sm
                  ${buttons[activeButton].bgBtn}`}
                                >
                                    {buttons[activeButton].btnTitle}
                                </span>
                                <img src={cases.image} alt={`${cases.image} image`} className="w-full h-full rounded-[28px]" />
                                <div className="w-full p-2 border-b-[1.27px] border-dashed border-[#E5E5E5] ">
                                    <p className=" roboto  z-10 text-[#28160A] text-start text-[17px] font-[400]">Title : <span className=" roboto z-10 text-[#28160A] text-start text-[18px] font-[500]">{cases.title}</span> </p>
                                    <p className=" roboto mt-1 z-10 text-[#28160A] text-start text-[17px] font-[400]">Description : <span className="text-[15px]">{cases.decs}</span> </p>
                                </div>
                                <button className="relative my-auto py-1 inter cursor-pointer text-[#28160A] z-10 text- text-center  md:text-[20px] text-[16px] font-[400]">
                                    view all
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default History
