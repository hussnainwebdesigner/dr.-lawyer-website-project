
import { useState, useEffect } from 'react'
import heroimage1 from './assets/heroimage1.png'
import priorityImage1 from './assets/priorityImage1.png'
import priorityImage2 from './assets/priorityImage2.png'
import priorityImage3 from './assets/priorityImage3.png'
import priorityImage4 from './assets/priorityImage4.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext'
import AddACaseSubmitModal from './Modals/AddACaseSubmitModal/AddACaseSubmitModal'
import AddACaseModal from './Modals/AddACaseModal/AddACaseModal'


const Home = () => {
    const [priorityCases, setPriorityCases] = useState([
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
    ])
    const [cases, setCases] = useState([
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
    ])
    const [addACaseModal, setAddACaseModal] = useState(false)
    const [addACaseSubmitModal, setAddACaseSubmitModal] = useState(false)


    const { role } = useAuth();
    const navigate = useNavigate();
    const isLawyer = role === "lawyer";

    useEffect(() => {
        if (!role) navigate("/");
    }, [role, navigate]);


    return (
        <section className="w-full min-h-screen">

            {/* <div
                className="relative w-full flex md:h-screen  h-[400px] items-center justify-center"
            >
                <img
                    src={heroimage1}
                    alt="Hero Background"
                    className="w-full h-screen md:block hidden "
                />
                <img
                    src={heroimage1}
                    alt="Hero Background"
                    className="w-full h-[400px] md:hidden block object-cover "
                /> */}
                
 <div
        className="relative w-full flex md:h-screen  h-[400px]  items-center justify-center"
      >
       <img
          src={heroimage1}
          alt="Hero Background"
          className="w-full md:h-screen  h-[400px] object-cover lg:object-fill"
        />
                <div className="absolute inset-0  flex  justify-center items-center bg-[#00000080]">
                    <div className="   w-full  max-w-[1357px] p-5   flex flex-col justify-center items-center">
                        <h1 className="relative kalnia z-10 tracking-[-5%] leading-[124%] text-white text-center lg:text-[61px] md:text-[45px] text-[30px] font-[400]">
                            We Are Your Unwavering <br className="md:block hidden"></br>
                            Advocates in Justice!
                        </h1>
                        <p className="relative roboto tracking-[3px] z-10 text-white text-center md:text-[22.14px] text-[16px] font-[400]">Guiding you through legal labyrinths with <br className="md:block hidden"></br>
                            expertise and compassion.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1357px] p-5 mx-auto">
                <div className="w-full flex items-center justify-between ">
                    <h1 className="relative lato z-10 tracking-[-5%]  text- text-center lg:text-[60px] md:text-[40px] text-[24px] font-[700]">
                        Priority Cases
                    </h1>
                    <button
                        onClick={() => (isLawyer ? navigate("/home/all-cases") : setAddACaseSubmitModal(true))}
                        className={`relative roboto cursor-pointer text-[#28160A] z-10 text-center md:text-[20px] text-[16px] font-[400] ${isLawyer ? "" : "bg-[#F0F0F0] md:px-5 px-3 py-2 rounded-full"}`}
                    >
                        {isLawyer ? "See All" : "Add a Case"}
                    </button>
                </div>
                <p className="relative roboto mt-1.5  z-10 text-[#28160A] text-start xl:text-[26px] md:text-[22px] text-[16px] font-[400]">Tax Lawyer are experts in the US tax system. They help businesses and individuals understand <br className="xl:block hidden"></br> complex tax rules and regulations...</p>

                <div className="w-full p-3 overflow-x-auto overflow-scroll flex gap-4 ">
                    {priorityCases.map((cases, index) => (
                        <div key={index} className="w-full hover:shadow-lg transition-all duration-200   md:min-w-[300px] md:max-w-[426px] min-w-[265px] max-w-[380px] flex flex-col justify-center items-center  border-[1px] p-2 border-[#E5E5E5]  rounded-[28px]">
                            <img src={cases.image} alt={`${cases.image} image`} className="w-full h-full rounded-[28px]" />
                            <div className="w-full p-2 border-b-[1.27px] border-dashed border-[#E5E5E5] ">
                                <p className=" roboto  z-10 text-[#28160A] text-start md:text-[17px] text-[15px] font-[400]">Title : <span className=" roboto z-10 text-[#28160A] text-start md:text-[18px] text-[16px] font-[500]">{cases.title}</span> </p>
                                <p className=" roboto mt-1 z-10 text-[#28160A] text-start md:text-[17px] text-[15px] font-[400]">Description : <span className="text-[15px]">{cases.decs}</span> </p>
                            </div>
                            <button onClick={() => navigate("/home/all-cases")} className="relative my-auto py-1 inter cursor-pointer text-[#28160A] z-10 text- text-center  md:text-[20px] text-[16px] font-[400]">
                                view all
                            </button>
                        </div>
                    ))}
                </div>
                <div className="w-full flex items-center justify-between ">
                    <h1 className="relative lato z-10 tracking-[-5%]  text- text-center lg:text-[60px] md:text-[40px] text-[26px] font-[700]">
                        Cases
                    </h1>
                    <button onClick={() => navigate("/home/all-cases")} className="relative roboto cursor-pointer text-[#28160A] z-10 text- text-center  md:text-[20px] text-[16px] font-[400]">
                        See all
                    </button>
                </div>
                <div className="w-full p-3 overflow-x-auto overflow-scroll flex gap-4 ">
                    {cases.map((singleCase, index) => (
                        <div key={index} className="w-full hover:shadow-lg transition-all duration-200  md:min-w-[300px] md:max-w-[426px] min-w-[265px] max-w-[380px] flex flex-col justify-center items-center  border-[1px] p-2 border-[#E5E5E5]  rounded-[28px]">
                            <img src={singleCase.image} alt={`${singleCase.image} image`} className="w-full h-full rounded-[28px]" />
                            <div className="w-full p-2 border-b-[1.27px] border-dashed border-[#E5E5E5] ">
                                <p className=" roboto  z-10 text-[#28160A] text-start md:text-[17px] text-[15px] font-[400]">Title : <span className=" roboto z-10 text-[#28160A] text-start md:text-[18px] text-[16px] font-[500]">{singleCase.title}</span> </p>
                                <p className=" roboto mt-1 z-10 text-[#28160A] text-start md:text-[17px] text-[15px] font-[400]">Description : <span className="text-[15px]">{singleCase.decs}</span> </p>
                            </div>
                            <button onClick={() => navigate("/home/all-cases")} className="relative my-auto py-1 inter cursor-pointer text-[#28160A] z-10 text- text-center  md:text-[20px] text-[16px] font-[400]">
                                view all
                            </button>
                        </div>
                    ))}
                </div>

            </div>


            <AddACaseModal
                addACaseModal={addACaseModal}
                setAddACaseModal={setAddACaseModal}
                addACaseSubmitModal={addACaseSubmitModal}
                setAddACaseSubmitModal={setAddACaseSubmitModal}
                />
            <AddACaseSubmitModal
               
                setAddACaseModal={setAddACaseModal}
                addACaseSubmitModal={addACaseSubmitModal}
                setAddACaseSubmitModal={setAddACaseSubmitModal}  
            />
        </section>
    )
}

export default Home
