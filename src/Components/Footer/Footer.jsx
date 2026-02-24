import React from 'react'
import { Link } from 'react-router-dom'
import drlayerlogo5 from "./assets/drlayerlogo5.png";

const Footer = () => {
    const footerData = [
        {
            title: "Legal Information",
            links: [
                { label: "Privacy Policy", url: "#" },
                { label: "Terms Of Service", url: "#" },
                { label: "Copyrights", url: "#" },
            ],
        },
        {
            title: "Social Media",
            links: [
                { label: "Facebook", url: "https://facebook.com" },
                { label: "Instagram", url: "https://instagram.com" },
                { label: "LinkedIn", url: "https://linkedin.com" },
                { label: "Twitter", url: "https://twitter.com" },
            ],
        },
    ];


    return (
        <>
            <footer className='bg-[#301619] px-5 py-12  flex justify-center items-center'>
                <div className="w-full max-w-[1357px] flex md:flex-nowrap flex-wrap md:gap-8 gap-4 justify-between items-center">
                    <div>
                        <Link to="/home" className="  w-[160px] h-[43px]  flex justify-start items-center  ">
                            <img src={drlayerlogo5} alt="dr.layer logo" className=" flex   items-center " />
                        </Link>
                        <p className=" roboto  z-10 text-[#fff] mt-4 text-start xl:text-[26px] md:text-[20px] text-[16px] font-[400]">
                            Copyright @ 2023 All Rights Reserved
                        </p>
                    </div>
                    <div className="w-full max-w-[450px]  grid grid-cols-2 gap-8">


                        {footerData.map((section, i) => (
                            <div key={i}>
                                <h3 className=" roboto  z-10 text-[#fff] text-start xl:text-[26px] md:text-[22px] text-[16px] font-[400]">{section.title}</h3>

                                <ul className="space-y-1.5 mt-1.5 text-gray-200">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <Link
                                                to={link.url}
                                                className="hover:text-white transition md:text-[20px] text-[13px] font-[400]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
