



import { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const FilterModal = ({

    filterModal,
    setFilterModal,
}) => {


    const filterMethods = [
        {
            title: "Price : Low to High",
        },
        {
            title: "Price : High to Low ",
        },
        {
            title: "Time: Latest ",
        },
        {
            title: "Time: Oldest",
        },
    ]
    const paymentStyles = {
        selected: "bg-[#EEDDD3]",
        unselected: "bg-[#E8E6EA]"
    }
    const [selected, setSelected] = useState(0)

    return (
        <>
            {filterModal &&
                <div onClick={() => setFilterModal(false)} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#30161999] backdrop-blur-[20px]  h-[100%] w-[100%]">
                    <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                        <div className='min-h-screen w-full flex justify-center items-center  '>

                            <div onClick={(e) => e.stopPropagation()} className="flex relative w-full max-w-[563px] z-50 transition-all duration-1000 md:p-6 p-4 bg-[#FFFFFF] rounded-[16px] flex-col  justify-between gap-2 items-center">
                                <button onClick={() => setFilterModal(false)} className='absolute  hover:bg-[#642329] shadow-[#80808040] cursor-pointer  shadow-sm rounded-full  bg-[#642329] right-3 top-3 p-1 '>
                                    <IoClose className="text-[#FFFFFF] text-[20px] " />
                                </button>
                                <h2 className=" text-[24px]  roboto -translate-y-1 font-[600]">
                                   Filter
                                </h2>

                                <div className='w-full flex flex-col  justify-start gap-0.5 items-start   '>


                                    {filterMethods.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelected(index)}
                                            className={`flex items-center w-full justify-between  md:p-4 p-2.5 mb-3 rounded-[8px]  transition-all duration-1000 cursor-pointer ${selected === index
                                                ? "  shadow-sm  border-[3px] border-[#642329]"
                                                : " shadow-[#80808040] border-[1px] border-[#E6E7E9]  hover:shadow-sm text-[#28160A]"}
                                                   `}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[14px] inter  font-[500]">{item.title}</span>
                                            </div>

                                            <div
                                                className={`w-[22px] h-[22px] transition-all duration-1000 rounded-full flex items-center justify-center   ${selected === index
                                                    ? " bg-[#642329]"
                                                    : " bg-[#E8E6EA]"}`}
                                            >
                                                <div className="w-[10px] h-[10px] shadow-[1px] drop-shadow-[#00000040] bg-[#ffff] rounded-full" />

                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <div className="flex w-full justify-center  items-center">
                                    
                                    <button
                                        onClick={() => setFilterModal(false)}
                                        className="w-full max-w-[235px] p-3 text-[#FFFFFF] rounded-full inter bg-[#642329] shadow-[#80808040] border-[1px] border-[#E6E7E9] cursor-pointer hover:bg-[#75262d] drop-shadow-[3px]">
                                       Continue
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

export default FilterModal




