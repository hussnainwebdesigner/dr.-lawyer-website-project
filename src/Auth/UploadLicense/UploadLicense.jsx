


import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"

// import drlayerlogo3 from '../assets/drlayerlogo3.png'
import drlayerlogo4 from '../assets/drlayerlogo4.png'
import TabLink from '../Components/TabLink/TabLink'
// import signupimg from '../assets/signupimg.png'
import licenseaphoto from '../assets/licenseaphoto.png'
import camera from '../assets/camera.png'
import SignImage from '../Components/SignImage/SignImage'
import { FaAngleLeft } from "react-icons/fa6";




const UploadLicense = () => {
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState(licenseaphoto);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const objectUrlRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        if (objectUrlRef.current) {
            URL.revokeObjectURL(objectUrlRef.current);
        }
        setFile(selectedFile);

        const previewUrl = URL.createObjectURL(selectedFile);
        setProfileImage(previewUrl);
    };



    const { pathname } = useLocation();
    const stepMap = {
        "/sign-up": 1,
        "/sign-up/upload-license": 2,
        "/sign-up/complete": 3,
    };

    const totalSteps = 3;
    const currentStep = stepMap[pathname] || 1;
   




    const navigateSignUp = (e) => {
        e.preventDefault()
        navigate("/sign-up/bank-details")
    }
    return (
        <>
            <section className=' bg-[#F6F0E4] h-screen w-full  flex justify-between items-center '>
                <div className='h-screen  w-full overflow-y-auto overflow-scroll  p-4'>
                    <div className='flex h-screen flex-col w-full mx-auto max-w-[422px]   items-start '>

                        <div className="flex mt-8 justify-start items-center gap-2.5">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5 p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <img src={drlayerlogo4} alt={`${drlayerlogo4} logo`} className='w-[168px] h-[41px]' />
                        </div>

                        <div className=" mt-8  w-full ">
                            <h1 className="poppins lg:text-[35.12px] md:text-[30px] text-[28px]  text-[#000000] leading-[42px] font-[600] ">Upload your License</h1>
                            <p className="text-[14px] md:my-2 my-0.5 tracking-[-1%] inter leading-[22px] text-[#565450]  font-[400]">
                                Ullamco nostrud veniam Lorem dolor excepteur veniam <br className='md:block hidden'></br> Lorem fugiat ipsum
                            </p>
                        </div>
                        <div className="w-full mt-1">
                            <TabLink />
                        </div>
                        <div className='w-full  flex flex-col gap-3.5'>
                            <div className="flex flex-col border-[3px] p-4 border-dashed bg-[#FBF9F4] rounded-3xl border-[#E6E7E9] relative my-5 items-center gap-2">
                                <p className="text-[20px]   lato leading-[100%] text-[#28160A]  font-[600]">
                                    License Photo
                                </p>
                                <div
                                    className="flex justify-center my-2  shadow shadow-[#C5C3BF] rounded-3xl  items-center relative overflow-hidden cursor-pointer w-full   md:h-[236px] h-[200px] "
                                    onClick={handleImageClick}
                                    tabIndex={0}
                                    role="button"
                                    aria-label="Upload profile picture"
                                >
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full h-full object-fill "
                                    />
                                </div>
                                <label
                                    htmlFor="file"
                                    className="w-[41px] h-[41px]  bg-[#75683E] rounded-full text-white flex items-center  w-full  gap-1.5  h-[41px]  justify-center cursor-pointer"
                                >
                                    <img
                                        src={camera}
                                        alt="Profile"
                                        className="w-[15px] h-[12.5px]"
                                    />
                                    <span className='inter mt-1 text-[10px] font-[600] '>Upload</span>
                                </label>

                                <input
                                    type="file"
                                    id="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <button onClick={navigateSignUp} className=' w-full  md:mt-5 mt-3 mb-8 p-3 text-[#FFFF] hover:bg-[#3c2022f8] text-center bg-[#301619] rounded-full inter transition-all duration-300  cursor-pointer' >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full  md:flex hidden justify-center p-4 items-center h-screen'>
                    <SignImage
                        currentStep={currentStep}
                        totalSteps={totalSteps}
                    />
                </div>
            </section>
        </>
    )
}

export default UploadLicense




