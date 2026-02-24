import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import addIcon from './assets/addIcon.png'
import closeIcon from './assets/closeIcon.png'
import user1 from './assets/user1.png'

const SendOfferModal = ({ isSendOfferModal, setIsSendOfferModal }) => {

    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        const newImages = files.map((file) => ({
            id: crypto.randomUUID(),
            url: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...newImages]);
        e.target.value = "";
    };

    const removeImage = (id) => {
        setImages(images.filter((img) => img.id !== id));
    };
    const handleNavigate = () => {
        setIsSendOfferModal(false)
        navigate("/home/priority-cases-submit")
    };



    return (

        <>
            {isSendOfferModal &&
                <div onClick={() => setIsSendOfferModal(false)} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>

                            <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[563px] z-50 transition-all duration-1000 md:p-6 p-4 gap-2.5 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">
                                <button onClick={() => setIsSendOfferModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                                    <IoClose className="text-[#FFFFFF] text-[20px] " />
                                </button>
                                <h2 className=" text-[24px]  roboto font-[600]">
                                    Send Offer
                                </h2>
                                <div className='w-full flex flex-col justify-start gap-2.5 items-start   '>
                                    <div className='flex  justify-start gap-2.5 w-full items-center  h-[52px] rounded-[8px] p-3 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] '>
                                        <img src={user1} alt="" className='w-[36px] h-[36px] rounded-full' />
                                        <p className=' text-[14px] inter font-[400] tracking-[-1%] text-[#000]  '>Brooklyn Simmons</p>
                                    </div>
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Offer Price</label>
                                        <input type="text" name='price' placeholder='$473.85' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Case Description</label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="5"
                                            placeholder="Tax lawyer are experts in the US tax system. They help businesses and individuals understand complex tax rules and regulations and enable them to stay compliant with local, state, and federal tax laws."

                                            className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0'
                                        >
                                        </textarea>
                                    </div>
                                    <div className='w-full flex mt-2 flex-col gap-2.5'>
                                        <p className='md:text-[27px] text-[18px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Case Attachment</p>

                                        <div className="flex md:justify-start justify-center gap-4 flex-wrap">
                                            <label htmlFor="file" className='w-[107px] h-[101px] flex justify-center items-center rounded-[22.62px] bg-[#ffff] shadow-[#80808040] shadow-md'>
                                                <img
                                                    src={addIcon}
                                                    alt="add Icon"
                                                    className="w-[31px] h-[31px]"
                                                />
                                            </label>
                                            <input
                                                type="file"
                                                id="file"
                                                multiple
                                                onChange={handleFileChange}
                                                className="mb-4 hidden"
                                            />
                                            {images.map((img) => (
                                                <div
                                                    key={img.id}
                                                    className="relative w-[107px]  overflow-hidden h-[101px] shadow-[#80808040]  shadow-md  border border-gray-300 rounded-[22.62px]"
                                                >
                                                    <img
                                                        src={img.url}
                                                        alt="preview"
                                                        className="w-full h-full object-cover  "
                                                    />
                                                    <button
                                                        onClick={() => removeImage(img.id)}
                                                        className="absolute top-2.5 right-2.5 rounded-full flex items-center justify-center cursor-pointer"
                                                    >
                                                        <img
                                                            src={closeIcon}
                                                            alt="add Icon"
                                                            className="w-[16px] h-[16px]"
                                                        />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[16px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Your Signature</label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="10"
                                            rows="5"
                                            placeholder=""
                                            className='w-full max-w-[414px] text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0'
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="flex w-full md:flex-nowrap flex-wrap justify-center gap-5  mt-3 items-center">
                                    <button
                                        // onClick={() => setPaymentModal(false)}
                                        className=" p-3 w-full text-[#030712] text-[16px] font-[500] rounded-full inter bg-[#ffff] border-[1.27px] border-[#E6E7E9] cursor-pointer hover:bg-[#F0F0F0] shadow-[#80808040] shadow-sm">
                                        Upload Document
                                    </button>
                                    <button
                                        onClick={handleNavigate}
                                        className="p-3 w-full  text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] text-[16px] font-[500] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                        Submit
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

export default SendOfferModal
