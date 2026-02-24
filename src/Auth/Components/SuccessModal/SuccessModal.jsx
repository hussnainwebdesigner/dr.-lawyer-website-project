import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../AuthContext/AuthContext';

const SuccessModal = ({ setPaymentModal, successModal, setSuccessModal }) => {

    const navigate = useNavigate()
    const handleOkay = () => {
        setSuccessModal(false);
        navigate("/home");
    };
    const { role } = useAuth();
    const isLawyer = role === "lawyer";

    useEffect(() => {
        if (!role) navigate("/");
    }, [role, navigate]);
    return (
        <>
            {successModal &&
                <div onClick={() => {
                    setPaymentModal(true),
                    setSuccessModal(false)
                }} className="fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>
                            <div onClick={(e) => e.stopPropagation()} className="flex  w-full max-w-[729px] z-50 transition-all duration-1000 p-6 pb-7 bg-[#FFFFFF] rounded-[16px] flex-col gap-2  justify-between items-center">
                                <h2 className="lg:text-[38px] text-[26px]  inter  font-[500]">
                                    Subscriptions Plan
                                </h2>
                                <p className="lg:text-[26px] text-[16px] inter text-center  text-[#00000066] font-[400]">
                                    Congratulations! You have been <br className='block '></br>successfully authenticated.
                                </p>

                                <button
                                    onClick={handleOkay}
                                    className={`w-full p-3 text-[#FFFFFF] rounded-full inter ${isLawyer ?"bg-[#642329] ":"bg-[#28160A] "} shadow-[#80808040] border-[1px] border-[#80808040] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]`}>
                                    Okay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default SuccessModal