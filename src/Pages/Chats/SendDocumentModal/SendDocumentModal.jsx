



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import addIcon from './assets/addIcon.png'
import closeIcon from './assets/closeIcon.png'
import { IoClose } from 'react-icons/io5'

const SendDocumentModal = ({ sendDocumentModal, setSendDocumentModal }) => {

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
        setIsSendDocumentModal(false)
        navigate("/home/priority-cases-submit")
    };



    return (

        <>
            {sendDocumentModal &&
                <div onClick={() => setSendDocumentModal(false)} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#30161999] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>

                            <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[563px] z-50 transition-all duration-1000 md:p-6 p-4 gap-2.5 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">
                                <button onClick={() => setSendDocumentModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                                    <IoClose className="text-[#FFFFFF] text-[20px] " />
                                </button>
                                <div className='bg-[#E6E6E6] rounded-full w-[125px] h-[9px]'>

                                </div>
                                <h2 className=" lg:text-[37.63px]  md:text-[32px] text-[28px] roboto font-[600]">
                                    Send Document
                                </h2>
                                <div className='w-full flex flex-col justify-start gap-2.5 items-start   '>
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
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Case Description</label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="5"
                                            placeholder=""

                                            className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0'
                                        >
                                        </textarea>
                                    </div>

                                </div>
                                <div className="flex w-full max-w-[400px] md:flex-nowrap flex-nowrap justify-center md:gap-5 gap-3  mt-3 items-center">
                                    <button
                                        onClick={() => setSendDocumentModal(false)}
                                        className=" md:p-4 p-2.5 w-full text-[#030712]  text-[21px] font-[700] rounded-full lato bg-[#F6F0E4] cursor-pointer hover:bg-[#faf1df] shadow-[#80808040] shadow-sm">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => setSendDocumentModal(false)}
                                        className="md:p-4 p-2.5 w-full  text-[#FFFFFF] rounded-full text-[21px] font-[700] rounded-full lato bg-[#642329] shadow-[#80808040] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                        Send
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

export default SendDocumentModal
