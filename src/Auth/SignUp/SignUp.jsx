import React, { useState, useRef, useEffect } from 'react'
import loginimg from '../assets/loginimg.png'
// import drlayerlogo3 from '../assets/drlayerlogo3.png'
import drlayerlogo4 from '../assets/drlayerlogo4.png'
import TabLink from '../Components/TabLink/TabLink'
import signupimg from '../assets/signupimg.png'
import profilImg from '../assets/profilImg.png'
import add from '../assets/add.png'
import flag1 from '../assets/flag1.png'
import angleIcon from '../assets/angleIcon.png'
import { useNavigate, useLocation, useSearchParams } from "react-router-dom"
import SignImage from '../Components/SignImage/SignImage'
import { FaAngleLeft } from 'react-icons/fa6'
import useModals from '../Hooks/useModals'
import { useAuth } from '../../AuthContext/AuthContext'
import SuccessModal from '../Components/SuccessModal/SuccessModal'






const SignUp = () => {

    const countryOptions = [
        { img: flag1 },
        { img: flag1 },
        { img: flag1 },
        { img: flag1 },
    ];

    const { successModal, setSuccessModal } = useModals()



    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState(profilImg);
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



    const pathname = useLocation();


    const stepMap = {
        "/sign-up": 1,
        "/sign-up/upload-license": 2,
        "/sign-up/complete": 3,
    };

    const totalSteps = 3;
    const currentStep = stepMap[pathname] || 1;


    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(countryOptions[0]);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const { login } = useAuth();
    const [searchParams] = useSearchParams();
    const roleQuery = searchParams.get("role")?.toLowerCase();

    useEffect(() => {
        if (!roleQuery) {
            navigate("/");
        }
    }, [roleQuery, navigate]);

    // console.log(roleQuery, "dkfadbfjadkj")
    const handleNext = (e) => {
        e.preventDefault();
        if (!roleQuery) return;
        login(roleQuery);
        if (roleQuery === "lawyer") {
            navigate(`/sign-up/upload-license?role=${roleQuery}`)
        } else {
            setSuccessModal(true)
        }
    };

    // const handleNext = (e) => {
    //     e.preventDefault();

    //   ;
    // };


    return (
        <>
            <section className=' bg-[#F6F0E4] h-screen w-full  flex justify-between items-center '>
                <div className='h-screen  w-full overflow-y-auto flex  items-center overflow-scroll  p-4'>
                    <div className='flex  xl:h-auto h-screen flex-col w-full mx-auto max-w-[422px]   items-start '>
                        <div className="flex mt-10  justify-start items-center gap-2.5">
                            <button
                                onClick={() => navigate("/")}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5 p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <img src={drlayerlogo4} alt={`${drlayerlogo4} logo`} className='w-[168px] h-[41px]' />

                        </div>
                        <div className=" mt-8  w-full ">
                            <h1 className="poppins lg:text-[35.12px] md:text-[30px] text-[28px]  text-[#000000] leading-[42px] font-[600] ">Welcome back!</h1>
                            <p className="text-[14px] md:my-2 my-0.5 tracking-[-1%] inter leading-[22px] text-[#565450]  font-[400]">
                                Ullamco nostrud veniam Lorem dolor excepteur veniam <br className='md:block hidden'></br> Lorem fugiat ipsum
                            </p>
                        </div>
                        <div className="w-full ">
                            <TabLink />
                        </div>
                        <form onSubmit={handleNext} className='w-full  flex flex-col gap-3'>
                            <div className="flex flex-col relative mt-4.5 items-center">
                                <div
                                    className="flex justify-center border-[3px] border-[#EAE2CF] p-0.5  items-center relative overflow-hidden cursor-pointer rounded-full  lg:w-[130px] w-[120px]  lg:h-[130px] h-[120px]"
                                    onClick={handleImageClick}
                                    tabIndex={0}
                                    role="button"
                                    aria-label="Upload profile picture"
                                >
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <label
                                    htmlFor="file"
                                    className="w-[41px] h-[41px]   bg-black rounded-full text-white flex items-center border-[4px] -translate-y-6 border-[#EAE2CF] z-50 justify-center font-bold cursor-pointer"
                                >
                                    <img
                                        src={add}
                                        alt="Profile"
                                        className="w-[16px] h-[16px]"
                                    />
                                </label>
                                <p className="text-[14px] -translate-y-2 tracking-[0.12em] lato leading-[100%] text-[#565450]  font-[400]">Profile Photo</p>
                                <input
                                    type="file"
                                    id="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Email</label>
                                <input type="email" name='email' placeholder='Enter your email' className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                            </div>
                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>
                                    Phone Number
                                </label>

                                <div
                                    className='text-[16px] relative z-10 flex items-center font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0'
                                >
                                    <div ref={dropdownRef} className="h-full border-r-[1px] border-[#D0D0D0] flex items-center">
                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="flex items-center gap-2  w-[50px]  h-full"
                                        >
                                            <img src={selected.img} alt="flag" className="w-[20px] h-[16px]" />
                                            <img src={angleIcon} alt="arrow" className="w-[12px] h-[12px]" />
                                        </button>

                                        {isOpen && (
                                            <ul className="absolute  top-full left-0 p-4   w-[60px] bg-white border border-[#E6E7E9] flex flex-col gap-3 rounded-lg shadow-lg z-40">
                                                {countryOptions.map((option, index) => (
                                                    <li
                                                        key={index}
                                                        onClick={() => handleSelect(option)}
                                                        className="flex  cursor-pointer hover:bg-gray-100"
                                                    >
                                                        <img src={option.img} alt="flag" className="w-[20px] h-[16px]" />
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        placeholder="+1 222 333 444"
                                        className="w-full h-full px-3 text-[16px] text-[#ADB3B7] outline-none"
                                    />
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Password</label>
                                <input type="password" name='password' placeholder='Enter your password' className='text-[16px] font-[400] z-[1]  tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                            </div>

                            <button type="submit" className=' w-full   lg:mt-5 mt-3 mb-8 p-3 text-[#FFFF] hover:bg-[#3c2022f8] text-center bg-[#301619] rounded-full inter transition-all duration-300  cursor-pointer' >
                                Next
                            </button>
                        </form>
                    </div>
                </div>
                <div className='w-full  md:flex hidden justify-center p-4 items-center h-screen'>
                    <SignImage
                        currentStep={currentStep}
                        totalSteps={totalSteps}
                    />
                </div>

            </section>
            <SuccessModal
                successModal={successModal}
                setSuccessModal={setSuccessModal}
            />
        </>
    )
}

export default SignUp




