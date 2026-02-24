


import { useState } from 'react'
import requestImage1 from './assets/requestImage1.png'
import requestImage2 from './assets/requestImage2.png'
import requestImage3 from './assets/requestImage3.png'
import requestImage4 from './assets/requestImage4.png'
import requestImage5 from './assets/requestImage5.png'
import requestImage6 from './assets/requestImage6.png'
import requestImage7 from './assets/requestImage7.png'
import requestImage8 from './assets/requestImage8.png'
import RequestModal from './RequestModal/RequestModal'


const Request = () => {
    const [userRequest] = useState([
        {
            image: requestImage1,
            name: "Jane Cooper",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
        {
            image: requestImage2,
            name: "Brooklyn Simmons",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
        {
            image: requestImage3,
            name: "Devon Lane",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
        {
            image: requestImage4,
            name: "Constitutional Lawyer",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
        {
            image: requestImage5,
            name: "Jane Cooper",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
        {
            image: requestImage6,
            name: "Jane Cooper",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
        {
            image: requestImage7,
            name: "Jane Cooper",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
        {
            image: requestImage8,
            name: "Jane Cooper",
            time: "03:30 PM",
            date: "10/15/2024",
            amount: "$300.00",
            decs: "For certain types of law careers, you need to be an expert on very specific laws. As a bankruptcy lawyer you’ll need...",
        },
    ])


    const [requestSelect, setRequestSelect] = useState(0)
    const [requestModal, setRequestModal] = useState(false)

    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex md:flex-nowrap flex-wrap items-center md:mt-10 mt-8 gap-3 justify-between ">
                        <div className="w-full  ">
                            <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                                Request
                            </h1>
                        </div>
                    </div>


                    <div className="w-full py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
                        {userRequest.map((request, index) => (
                            <div key={index}
                                onClick={() => {
                                    setRequestSelect(index)
                                    setRequestModal(true)
                                }}
                                className="w-full h-[438px] group relative overflow-hidden    hover:shadow-lg transition-all cursor-pointer duration-400 flex flex-col justify-center items-center rounded-[18px]">

                                <img src={request.image} alt={`${request.image} image`} className="group-hover:scale-105 w-full transition-all duration-400 h-full rounded-[18px]" />
                                <div className="absolute inset-0 bg-[#00000080] px-5 py-4 flex flex-col justify-end items-start     ">
                                    <p className=" roboto  z-10 text-[#FFFFFF] text-start text-[19px] font-[500]"> {request.name}</p>
                                    <p className=" roboto  z-10 text-[#FFFFFF] text-start text-[18px] font-[400]">{request.time} {request.date}</p>
                                    <p className=" roboto mt-1 z-10 text-[#FFFFFF] text-start text-[14px] font-[300]">{request.decs}</p>
                                    <div className='flex w-full justify-end'>
                                        <p className=" roboto  z-10 text-[#FFFFFF] text-end text-[24px] font-[700]"> {request.amount}</p>

                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <RequestModal
                userRequest={userRequest}
                requestSelect={requestSelect}
                setRequestSelect={setRequestSelect}
                requestModal={requestModal}
                setRequestModal={setRequestModal}
            />
        </>
    )
}

export default Request

