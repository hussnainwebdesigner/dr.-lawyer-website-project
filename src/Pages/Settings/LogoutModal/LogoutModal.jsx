import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext/AuthContext';
// import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ logoutModal, setLogoutModal }) => {
    if (!logoutModal) return null;

    const { logout } = useAuth();
    const navigate = useNavigate()

    const navigateSignUp = (e) => {
        e.preventDefault()
        logout()
        navigate("/login")
        setLogoutModal(false)
    }

    return (
        <>
            <div onClick={() => setLogoutModal(false)} className="fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                    <div className='min-h-screen w-full flex justify-center items-center  '>
                        <div onClick={(e) => e.stopPropagation()} className="flex  w-full max-w-[563px] z-50 transition-all duration-1000 p-6 gap-3 bg-[#F6F0E4] rounded-[16px] flex-col  justify-center items-center">
                            <h4 className='md:text-[24px] text-[20px] font-[600] roboto'>Log Out</h4>
                            <p className=' text-[#ADB3B7] text-center tracking-[-1%] leading-[22px] text-[16px] font-[400] roboto'>
                                If logged out, you will not be able to receive shift  <br className='md:block hidden'></br>notifications to your phone, are you sure you'd <br className='md:block hidden'></br> like to proceed and continue logging out?
                            </p>
                            <div className='w-full flex gap-3 justify-center items-center'>
                                <button
                                    onClick={() => setLogoutModal(false)}
                                    className=" p-3 w-full text-[#030712] text-[16px] font-[500] rounded-full inter bg-[#ffff] border-[1.27px] border-[#E6E7E9] cursor-pointer hover:bg-[#F0F0F0] shadow-[#80808040] shadow-sm">
                                    Cancel
                                </button>
                                <button
                                    onClick={navigateSignUp}
                                    className="p-3 w-full  text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] text-[16px] font-[500] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                    Logout
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoutModal