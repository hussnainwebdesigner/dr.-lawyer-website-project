
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import add from '../assets/add.png'
import closeIcon from '../assets/closeIcon.png'


const AddACaseModal = ({ addACaseModal, setAddACaseModal, setAddACaseSubmitModal }) => {

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




    return (

        <>
            {addACaseModal &&
                <div onClick={() => {
                    setAddACaseModal(false)
                    setAddACaseSubmitModal(true)
                }} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#28160A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>

                            <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[563px] z-50 transition-all duration-1000 md:p-6 p-4 gap-2.5 bg-[#FFFFFF] rounded-[16px] flex-col  justify-center items-center">
                                <button onClick={() => {
                                    setAddACaseModal(false)
                                    setAddACaseSubmitModal(true)
                                }} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] left-3 top-3 p-1 '>
                                    <IoClose className="text-[#FFFFFF] text-[20px] " />
                                </button>
                                <h2 className=" text-[24px]  roboto font-[600]">
                                    Add a Case
                                </h2>
                                <div className='w-full flex flex-col justify-start gap-2.5 items-start   '>

                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[20px] font-[500] tracking-[-1%] text-[#00000] leading-[20px] roboto'>Title</label>
                                        <input type="text" name='name' placeholder='Marija Lazic' className='text-[16px] font-[400] tracking-[-1%]  leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                    </div>
                                    <div className='w-full flex flex-col gap-2.5'>
                                        <label htmlFor="" className='text-[20px] font-[500] tracking-[-1%] text-[#00000] leading-[20px] roboto'>Description</label>
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="5"
                                            placeholder="Tax lawyer are experts in the US tax system. They help businesses and individuals"

                                            className='text-[16px] font-[400] tracking-[-1%]  leading-[22px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0'
                                        >
                                        </textarea>
                                    </div>
                                    <div className='w-full flex mt-2 flex-col gap-2.5'>
                                        <p className='text-[20px] font-[500] tracking-[-1%] text-[#00000] leading-[20px] roboto'>Case Attachment</p>

                                        <div className="flex md:justify-start justify-center gap-4 flex-wrap">
                                            <label htmlFor="file" className='md:w-[120px] w-[100px] md:h-[120px] h-[100px] flex justify-center border-[1px] border-[#0000001A] items-center rounded-[8px] bg-[#ffff] shadow-[#80808040] shadow-md'>
                                                <span className='w-[41px] h-[41px] bg-[#28160A] border-[4px] border-[#EAE2CF] flex justify-center items-center rounded-full'>
                                                    <img
                                                        src={add}
                                                        alt="add Icon"
                                                        className="w-[17px] h-[17px]"
                                                    />
                                                </span>
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
                                                    className="relative  overflow-hidden  shadow-[#80808040]  shadow-md md:w-[120px] w-[100px] md:h-[120px] h-[100px] flex justify-center border-[1px] border-[#0000001A] items-center rounded-[8px]"
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

                                </div>
                                <div className="flex w-full md:flex-nowrap flex-nowrap justify-center gap-5  mt-3 items-center">
                                    <button
                                        onClick={() => setAddACaseModal(false)}
                                        className=" p-3 w-full text-[#030712] text-[16px] font-[500] rounded-full inter bg-[#ffff] border-[1.27px] border-[#E6E7E9] cursor-pointer hover:bg-[#F0F0F0] shadow-[#80808040] shadow-sm">
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => {
                                            setAddACaseModal(false)
                                            navigate("/home/all-cases")
                                        }}
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

export default AddACaseModal
