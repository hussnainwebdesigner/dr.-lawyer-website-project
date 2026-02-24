import { useState, useRef, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import profilImg from '../assets/profilImg.png'
import camera from '../assets/camera.png'
import flag1 from '../assets/flag1.png'
import angleIcon from '../assets/angleIcon.png'
import card from '../assets/card.png'
import { FaAngleLeft } from 'react-icons/fa6'
import DeleteModal from '../DeleteModal/DeleteModal';
import { useAuth } from '../../../AuthContext/AuthContext';

const EditProfile = () => {
    const countryOptions = [
        { img: flag1 },
        { img: flag1 },
        { img: flag1 },
        { img: flag1 },

    ];
    const [deleteModal, setDeleteModal] = useState(false);
    const navigate = useNavigate()
    const [cardImage, setCardImage] = useState(card);
    const [profileImage, setProfileImage] = useState(profilImg);

    const profileInputRef = useRef(null);
    const cardInputRef = useRef(null);

    const handleProfileClick = () => {
        profileInputRef.current?.click();
    };

    const handleCardClick = () => {
        cardInputRef.current?.click();
    };

    const handleProfileChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0];

        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleCardChange = (e) => {
        e.preventDefault()
        const file = e.target.files[0];

        if (file) {
            setCardImage(URL.createObjectURL(file));
        }
    };


    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(countryOptions[0]);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            e.preventDefault()
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const { role } = useAuth();

    const isLawyer = role === "lawyer";

    useEffect(() => {
        if (!role) navigate("/");
    }, [role, navigate]);
    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">

                    <div className="w-full  md:mt-10 mt-8  flex gap-2 justify-between  items-center">
                        <div className="w-full flex  items-center gap-2  ">

                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5 p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <h1 className="relative inter z-10 tracking-[-5%]  text-start lg:text-[40px] md:text-[32px] text-[18px] font-[600]">
                                Edit Profile
                            </h1>
                        </div>
                        <div className="w-full flex justify-end relative">
                            <button
                                className={` md:w-[200px] w-[110px] py-2.5 lato cursor-pointer  text-center md:text-[18px] text-[13px] font-[700]  rounded-full  transition-all duration-300 bg-[#75683E] text-white `}
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>

                    <div className="flex w-full   mt-2  z-50 transition-all duration-1000 md:p-6 p-4 gap-2.5 bg-[#FFFFFF] rounded-[26px] flex-col  justify-center items-center">

                        <form className='w-full md:p-3 flex justify-center lg:flex-nowrap flex-wrap  items-start gap-3.5'>
                            <div className="flex w-full  lg:max-w-[300px] md:max-w-[220px] flex-col md:order-2 relative justify-center my-5 items-center">
                                <div
                                    className="flex justify-center border-[3px] border-black p-0.5  items-center relative overflow-hidden cursor-pointer rounded-full  lg:w-[168px] w-[120px]  lg:h-[168px] h-[120px]"
                                    onClick={handleProfileClick}
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
                                    className="w-[45px] h-[45px] bg-black rounded-full text-white flex items-center  -translate-y-6 z-30 justify-center font-bold cursor-pointer"
                                >
                                    <img
                                        src={camera}
                                        alt="camera"
                                        className="w-[16px] h-[16px]"
                                    />
                                </label>

                                <input
                                    type="file"
                                    id="file"
                                    ref={profileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleProfileChange}
                                />
                                <div className="flex w-full flex-col gap-2 .5 items-center">
                                    <button onClick={(e) => { e.preventDefault(), setDeleteModal(true) }} className={`${isLawyer ? "bg-[#EAE2CF] text-[#642329]" : "bg-[#642329] text-[#FFFFFF]"} w-full max-w-[166px] p-3   text-center  text-[17px] rounded-full inter transition-all duration-300  cursor-pointer `} >
                                        Delete Account
                                    </button>
                                </div>

                            </div>
                            <div className="flex w-full  max-w-[952px] flex-col relative gap-2.5 items-center">
                                <div className='w-full flex flex-col gap-2.5'>
                                    <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Full name</label>
                                    <input type="password" name='name' placeholder='Marija Lazic' className='text-[16px] font-[400] text-[#ADB3B7]  rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                </div>

                                <div className='w-full flex flex-col gap-2.5'>
                                    <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Email Address</label>
                                    <input type="email" name='email' placeholder='Enter your email' className='text-[16px] font-[400] text-[#ADB3B7]  rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                </div>
                                <div className='w-full flex flex-col gap-2.5'>
                                    <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>
                                        Phone Number
                                    </label>
                                    <div className='text-[16px] relative z-10 flex items-center font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0'
                                    >
                                        <div ref={dropdownRef} className="h-full border-r-[1px] border-[#D0D0D0] flex items-center">
                                            <button
                                                type="button"
                                                onClick={(e) => { e.preventDefault(), setIsOpen(!isOpen) }}
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
                                <div className={`w-full ${isLawyer ? "hidden" : "flex flex-col gap-2.5"} `}>
                                    <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Password</label>
                                    <input type="password" name='password' placeholder='1235432123' className='text-[16px] font-[400] text-[#ADB3B7]  rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                                </div>
                                <div
                                    className={`${isLawyer ? "block" : "hidden"} w-full mt-3  max-w-[949px] h-full md:max-h-[602px]  max-h-[352px]   relative overflow-hidden cursor-pointer rounded-[13.01px] `}
                                    onClick={handleCardClick}
                                >
                                    <img
                                        src={cardImage}
                                        alt="Card"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <input
                                    type="file"
                                    ref={cardInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleCardChange}
                                />
                            </div>

                        </form>

                    </div>
                </div>
            </section>
            <DeleteModal
                deleteModal={deleteModal}
                setDeleteModal={setDeleteModal}
            />



        </>
    )
}

export default EditProfile
