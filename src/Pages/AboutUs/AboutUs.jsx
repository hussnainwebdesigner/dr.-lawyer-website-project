
import { useState } from 'react'
import aboutusImage1 from './assets/aboutusImage1.png'
import aboutusImage2 from './assets/aboutusImage2.png'
import aboutusImage3 from './assets/aboutusImage3.png'
import aboutusImage4 from './assets/aboutusImage4.png'
import { FaAngleLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'



const AboutUs = () => {

    const images = [
        { id: 1, url: aboutusImage1, alt: "about us Image 1" },
        { id: 2, url: aboutusImage2, alt: "about us Image 2" },
        { id: 3, url: aboutusImage2, alt: "about us Image 2" },
        { id: 4, url: aboutusImage4, alt: "about us Image 3" },
        { id: 5, url: aboutusImage3, alt: "about us Image 4" },
        { id: 6, url: aboutusImage1, alt: "about us Image 1" },
        { id: 7, url: aboutusImage2, alt: "about us Image 2" },
        { id: 8, url: aboutusImage2, alt: "about us Image 2" },
        { id: 9, url: aboutusImage4, alt: "about us Image 3" },
        { id: 10, url: aboutusImage3, alt: "about us Image 4" },
        { id: 11, url: aboutusImage3, alt: "about us Image 4" },
        { id: 12, url: aboutusImage1, alt: "about us Image 1" },
        { id: 13, url: aboutusImage2, alt: "about us Image 2" },
        { id: 14, url: aboutusImage2, alt: "about us Image 2" },
        { id: 15, url: aboutusImage4, alt: "about us Image 3" },
        { id: 16, url: aboutusImage3, alt: "about us Image 4" },

    ];

    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);
    const sliceCount = 4;

    const displayImages = images.slice(startIndex, startIndex + sliceCount);
    const remainingCount = images.length - (startIndex + sliceCount);

    const handleOverlayClick = () => {
        if (remainingCount > 0) {
            setStartIndex(startIndex + sliceCount);
        } else {

            setStartIndex(0);
        }
    };

    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex  items-center gap-2 mt-10 ">

                        <button
                            onClick={() => navigate(-1)}
                            className="bg-[#642329] cursor-pointer hover:shadow-lg p-1.5 rounded-full text-xl text-white"
                        >
                            <FaAngleLeft />
                        </button>
                        <h1 className="relative inter z-10 tracking-[-5%]   text- text-start lg:text-[40px] md:text-[32px] text-[26px] font-[600]">
                            About Us
                        </h1>
                    </div>

                    <div className=" w-full h-auto  mt-2  z-50 transition-all duration-1000 md:p-6 p-4  bg-[#FFFFFF] rounded-[26px] ">
                        <div className="w-full  gap-10 grid lg:grid-cols-2  grid-cols-1">
                            <div className="w-full ">
                                <p className=' text-[#ADB3B7]  tracking-[0.64px] leading-[21.12px] md:text-[18px] text-[16px] font-[400] roboto'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    <br className='md:block hidden'></br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            {/* w-full max-w-[476px] h-full max-h-[428px]  */}
                            <div className=" w-full   h-full ">
                                <div className="grid w-full  md:grid-cols-3 grid-cols-1 gap-3">
                                    {/* <div className=" col-span-6 row-end-6 overflow-hidden rounded-[6px] cursor-pointer group"> */}
                                    <div className="col-span-2 row-span-2 w-full max-w-[476px] h-full max-h-[428px]  overflow-hidden rounded-[6px] cursor-pointer group">
                                        <img
                                            src={displayImages[0].url}
                                            alt={displayImages[0].alt}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    {/* <div className="w-full grid h-auto md:grid-rows-3  grid-rows-0 md:grid-cols-0 grid-cols-3 gap-3"> */}
                                    <div className="w-full grid h-auto grid-cols-3 md:grid-cols-1 md:grid-rows-3 gap-3">
                                        {displayImages.slice(1).map((img, index) => (
                                            <div
                                                key={img.id}
                                                className={`overflow-hidden  rounded-[6px] w-full max-w-[217px] h-full max-h-[136px]  ${index === 0 ? "" : ""
                                                    } ${index === 2 ? " relative group cursor-pointer" : ""}`}
                                                onClick={index === 2 && remainingCount > 0 ? handleOverlayClick : undefined}
                                            >
                                                <img
                                                    src={img.url}
                                                    alt={img.alt}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                {index === 2 && remainingCount > 0 && (
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                                                        <span className="text-white text-3xl font-semibold">+{remainingCount}</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-2 ">
                            <p className=' text-[#ADB3B7]  tracking-[0.64px] leading-[21.12px] md:text-[18px] text-[16px] font-[400] roboto'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
