

import { useState } from 'react'

import case1 from '../../assets/case1.png'
import case2 from '../../assets/case2.png'
import case3 from '../../assets/case3.png'
import case4 from '../../assets/case4.png'
import case5 from '../../assets/case5.png'
import case6 from '../../assets/case6.png'
import signature from '../../assets/signature.png'
import addIcon from '../SendOfferModal/assets/addIcon.png'
import closeIcon from '../SendOfferModal/assets/closeIcon.png'
import { PiDotsThreeCircleFill } from 'react-icons/pi'
import editIcon from '../SendOfferModal/assets/editIcon.png'
import deleteIcon from '../SendOfferModal/assets/deleteIcon.png'
import { FaAngleLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'


const PriorityCasesSubmit = () => {



    // const cases = [
    //     { casesImage: case1 },
    //     { casesImage: case2 },
    //     { casesImage: case3 },
    //     { casesImage: case4 },
    //     { casesImage: case5 },
    //     { casesImage: case6 },
    // ]

    const navigate = useNavigate();
    const [modalList, setModalList] = useState(false);
    const [images, setImages] = useState([]);
    const buttons = [
        { btnTitle: "Interested", bgBtn: "bg-[#75683E] text-white" },
        { btnTitle: "Not interested", bgBtn: "bg-[#53453B] text-white" },
        { btnTitle: "Postponed", bgBtn: "bg-[#53453B] text-white" },
    ]

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
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex md:flex-nowrap flex-wrap items-center md:mt-10 mt-8 gap-3 justify-between ">
                        <div className="w-full flex  items-center gap-2 ">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg p-1.5 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                                Priority Cases Detail
                            </h1>
                        </div>

                        <div className="w-full flex items-center md:flex-nowrap flex-wrap  justify-end gap-2">

                            <button
                                onClick={() => navigate('/home/all-offers')}
                                className={` lg:w-[112px] w-[88px] py-3 roboto hover:shadow-lg transition-all duration-200  cursor-pointer border-[1px] border-[#E5E5E5] text-center text-[12px] font-[700]  bg-white rounded-full  transition-all duration-300   `}
                            >
                                Case Note
                            </button>

                            <div className='relative'>
                                {/*  */}
                                <button
                                    onClick={() => setModalList(!modalList)}
                                    className="   bg-white rounded-full cursor-pointer ">
                                    <PiDotsThreeCircleFill className="   text-[#74673E] text-[44px]" />
                                </button>
                                {modalList && <div className="absolute top-6 right-6 z-30 p-4 w-[140px] bg-white border border-[#E5E5E5] shadow-lg rounded-l-[16px] rounded-b-[16px] flex flex-col gap-3">
                                    <button
                                        onClick={() => { setModalList(false) }}
                                        className="flex items-center gap-3 cursor-pointer pb-2 border-b border-dashed border-[#E5E5E5] text-left"
                                    >
                                        <img src={editIcon} alt="Edit" className="w-[17px]" />
                                        <span className="text-[16px] font-roboto font-medium">Edit</span>
                                    </button>

                                    <button
                                        onClick={() => { setModalList(false) }}
                                        className="flex items-center gap-3 cursor-pointer text-left"
                                    >
                                        <img src={deleteIcon} alt="Delete" className="w-[17px]" />
                                        <span className="text-[16px] font-roboto font-medium">Delete</span>
                                    </button>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:p-10 p-4  flex flex-col w-full justify-between  gap-6 bg-white mt-6  rounded-[22px] ">
                        <div className="w-full flex flex-col gap-2">
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[32px] md:text-[26px] text-[22px] font-[600]">
                                Tax Lawyer
                            </h1>
                            <p className=" roboto  text-[#28160A] text-start md:tracking-[1px] md:leading-[25px] md:text-[20px] text-[15px] font-[400]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br></br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  md:text-[32px] text-[26px] font-[600]">
                                Case Attachment
                            </h1>
                            <div className=" flex gap-4 flex-wrap">

                                <input
                                    type="file"
                                    id="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="mb-4 hidden"
                                />
                                <div className="flex md:justify-start justify-center gap-4 flex-wrap">
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
                                    <label htmlFor="file" className='w-[107px] h-[101px] flex justify-center items-center rounded-[22.62px] bg-[#ffff] shadow-[#80808040] shadow-md'>
                                        <img
                                            src={addIcon}
                                            alt="add Icon"
                                            className="w-[31px] h-[31px]"
                                        />
                                    </label>
                                </div>
                            </div>
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[32px] md:text-[26px] text-[22px] font-[600]">
                                Case Notes
                            </h1>
                            <p className=" roboto  text-[#28160A] text-start md:tracking-[1px] md:leading-[25px] md:text-[20px] text-[15px] font-[400]">
                                Since the US tax system is complex and subject to frequent changes, tax lawyers must be up to date with all IRS regulations and any amendments to the tax law.
                            </p>

                            <div className="flex w-full justify-between items-center  ">
                                <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[32px] md:text-[26px] text-[22px] font-[600]">
                                    Your Signature
                                </h1>
                                <button className="relative   inter cursor-pointer text-[#D9CBB1] text- text-center  md:text-[18px] text-[16px] font-[500] underline  underline-offset-2  underline-[#D9CBB1]">
                                    Clear
                                </button>
                            </div>
                            <div className="flex w-full justify-center border-[1px] rounded-[6px] border-[#E6E7E9] items-center max-w-[572px] p-5 ">
                                <img src={signature} className="w-full max-w-[334px]" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PriorityCasesSubmit
