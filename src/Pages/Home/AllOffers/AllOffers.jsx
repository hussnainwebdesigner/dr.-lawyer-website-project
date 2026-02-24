import { useState } from 'react'

import userOffer1 from './assets/userOffer1.png'
import userOffer2 from './assets/userOffer2.png'
import userOffer3 from './assets/userOffer3.png'
import userOffer4 from './assets/userOffer4.png'
import userOffer5 from './assets/userOffer5.png'
import userOffer6 from './assets/userOffer6.png'
import edit from './assets/edit.png'
import deleteIcon from './assets/deleteIcon.png'
import filterIcon from './assets/filterIcon.png'
import FilterModal from './FilterModal/FilterModal'


const AllOffers = () => {
    const [filterModal, setFilterModal] = useState(false)
    const allOffers = [
        {
            image: userOffer1,
            nameUser: "Brooklyn Simmons",
            offerAmount: "$473.85",
            decs: "Tax lawyer are experts in the US tax system.They help businesses and individuals...",
        },
        {
            image: userOffer2,
            nameUser: "Kathryn Murphy",
            offerAmount: "$779.58",
            decs: "Tax lawyer are experts in the US tax system.They help businesses and individuals...",
        },
        {
            image: userOffer3,
            nameUser: "Wade Warren",
            offerAmount: "$601.13",
            decs: "Tax lawyer are experts in the US tax system.They help businesses and individuals...",
        },
        {
            image: userOffer4,
            nameUser: "Jerome Bell",
            offerAmount: "$106.58",
            decs: "Tax lawyer are experts in the US tax system.They help businesses and individuals...",
        },
        {
            image: userOffer5,
            nameUser: "Albert Flores",
            offerAmount: "$630.44",
            decs: "Tax lawyer are experts in the US tax system.They help businesses and individuals...",
        },
        {
            image: userOffer6,
            nameUser: "Esther Howard",
            offerAmount: "$943.65",
            decs: "Tax lawyer are experts in the US tax system.They help businesses and individuals...",
        },
    ]


    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex items-center md:mt-10 mt-8 gap-3 justify-between ">

                        <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                            All Offers
                        </h1>
                        <button onClick={()=>setFilterModal(true)} className="roboto cursor-pointer text-[#28160A] z-10  p-1.5 pr-2.5 text-center flex rounded-[8px] gap-1.5 justify-between items-center border-[1.4px] shadow-sm bg-[#FFFF] shadow-[#E5E5E5] border-[#f6dada] md:text-[21px] text-[16px] font-[500]">
                            <span className='flex justify-center p-2  rounded-[7px] bg-[#75683E] items-center'>
                                <img src={filterIcon} alt={`image`} className="md:w-[22px] w-[18px] md:h-[22px] h-[18px] " />
                            </span>
                            Filter
                        </button>

                    </div>

                    <div className="w-full py-4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 ">
                        {allOffers.map((offer, index) => (
                            <div key={index} className="w-full relative hover:shadow-lg transition-all duration-200  bg-[#FFFF] flex flex-col justify-center items-center  p-5.5   rounded-[28px]">

                                <div className="w-full flex md:flex-nowrap flex-wrap mt-2 pb-2 border-b-[1.99px] gap-4 border-dashed border-[#E5E5E5] justify- items-start ">
                                    <img src={offer.image} alt={`${offer.image} image`} className="w-[72px] h-[72px] rounded-full" />
                                    <div className="w-full  ">
                                        <div className="w-full flex md:flex-nowrap flex-wrap  justify-between items-center ">
                                            <h5 className=" roboto  z-10 text-[#030712] text-start md:text-[28px] text-[20px] font-[500]">{offer.nameUser} </h5>
                                            <h5 className=" roboto  z-10 text-[#28160A] text-start md:text-[32px] text-[20px] font-[600]">{offer.offerAmount} </h5>
                                        </div>
                                        <p className=" roboto mt-1 z-10 text-[#ADB3B7] text-start md:text-[24px] text-[16px] font-[400]">
                                            {offer.decs}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex mt-4 justify-center   gap-4 items-center ">
                                    <button className="relative my-auto inter cursor-pointer text-[#28160A] z-10 text- text-center flex rounded-full md:px-10 px-8 py-3 gap-1.5 justify-center bg-[#FFFF] items-center border-[1.4px] shadow-sm shadow-[#E5E5E5] border-[#E5E5E5] md:text-[20px] text-[16px] font-[400]">
                                        <img src={edit} alt={`edit image`} className="w-[27px] h-[27px] " />
                                        Edit
                                    </button>
                                    <button className="relative my-auto inter cursor-pointer text-[#28160A] z-10 text- text-center flex rounded-full md:px-10 px-8 py-3 gap-1.5 justify-center bg-[#FFFF] items-center  shadow-sm shadow-[#E5E5E5]  md:text-[20px] text-[16px] font-[400]">
                                        <img src={deleteIcon} alt={`delete image`} className="w-[27px] h-[27px] " />
                                        Delete
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <FilterModal filterModal={filterModal} setFilterModal={setFilterModal} />
        </>
    )
}

export default AllOffers
