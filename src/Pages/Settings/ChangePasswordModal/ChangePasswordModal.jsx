

import React from 'react'
import { IoClose } from 'react-icons/io5';

const ChangePasswordModal = ({ changePasswordModal, setChangePasswordModal }) => {
    if (!changePasswordModal) return null;



    return (
        <>
            <div onClick={() => setChangePasswordModal(false)} className="fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                    <div className='min-h-screen w-full flex justify-center items-center  '>
                        <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[563px] z-50 transition-all duration-1000 p-6 gap-3 bg-[#F6F0E4] rounded-[16px] flex-col  justify-center items-center">
                            <button onClick={() => setChangePasswordModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                                                                <IoClose className="text-[#FFFFFF] text-[20px] " />
                                                            </button>
                            <h4 className='md:text-[24px] text-[20px] font-[600] roboto'>Change Password</h4>
                            <p className=' text-[#ADB3B7] text-center tracking-[-1%] leading-[22px] text-[16px] font-[400] roboto'>
                                Create a new password for your account by <br className='md:block hidden'></br>filling out the form below.
                            </p>
                            <form className='w-full  flex flex-col gap-3.5'>
                                <div className='w-full flex flex-col gap-2.5'>
                                    <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>New Password</label>
                                    <input type="password" name='password' placeholder='Create a strong password' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                </div>
                                <div className='w-full flex flex-col gap-2.5'>
                                    <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Confirm New Password</label>
                                    <input type="password" name='confirmpassword' placeholder='Re-enter new password' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                </div>

                                <div className='w-full flex justify-center items-center'>
                                    <button
                                        onClick={() => setChangePasswordModal(false)}
                                        className="p-3 w-full max-w-[235px] text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] text-[16px] font-[500] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                        Update Password
                                    </button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePasswordModal