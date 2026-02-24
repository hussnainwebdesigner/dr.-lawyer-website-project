import React, { useState } from 'react'
import notifi1 from './assets/notifi1.png'
import notifi2 from './assets/notifi2.png'
import notifi3 from './assets/notifi3.png'
import notifi4 from './assets/notifi4.png'


const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            imageNotificat: notifi1,
            date: " June 31, 2023",
            notificat: "Digital Marketing Strategies",
            description: <>
                <p>"This comprehensive course dives into the world of digital marketing strategies, covering topics such as search<br /> engine optimization (SEO), social media marketing, content marketing, and more. Learn how to create effective<br /> marketing campaigns, reach your target audience, and grow your online presence."</p>
            </>
        },
        {
            imageNotificat: notifi2,
            date: " June 31, 2023",
            notificat: "Digital Marketing Strategies",
            description: <>
                <p>"This comprehensive course dives into the world of digital marketing strategies, covering topics such as search<br /> engine optimization (SEO), social media marketing, content marketing, and more. Learn how to create effective<br /> marketing campaigns, reach your target audience, and grow your online presence."</p>
            </>,
            bg: "bg-[#EFEFEF]"
        },
        {
            imageNotificat: notifi3,
            date: " June 31, 2023",
            notificat: "Digital Marketing Strategies",
            description: <>
                <p>"This comprehensive course dives into the world of digital marketing strategies, covering topics such as search<br /> engine optimization (SEO), social media marketing, content marketing, and more. Learn how to create effective<br /> marketing campaigns, reach your target audience, and grow your online presence."</p>
            </>,
            bg: "bg-[#EFEFEF]"
        },
        {
            imageNotificat: notifi4,
            date: " June 31, 2023",
            notificat: "Digital Marketing Strategies",
            description: <>
                <p>"This comprehensive course dives into the world of digital marketing strategies, covering topics such as search<br /> engine optimization (SEO), social media marketing, content marketing, and more. Learn how to create effective<br /> marketing campaigns, reach your target audience, and grow your online presence."</p>
            </>,
        },
        {
            imageNotificat: notifi3,
            date: " June 31, 2023",
            notificat: "Digital Marketing Strategies",
            description: <>
                <p>"This comprehensive course dives into the world of digital marketing strategies, covering topics such as search<br /> engine optimization (SEO), social media marketing, content marketing, and more. Learn how to create effective<br /> marketing campaigns, reach your target audience, and grow your online presence."</p>
            </>,
        },
        {
            imageNotificat: notifi4,
            date: " June 31, 2023",
            notificat: "Digital Marketing Strategies",
            description: <>
                <p>"This comprehensive course dives into the world of digital marketing strategies, covering topics such as search<br /> engine optimization (SEO), social media marketing, content marketing, and more. Learn how to create effective<br /> marketing campaigns, reach your target audience, and grow your online presence."</p>
            </>,
        },
    ])

    const [selectNotifications, setSelectNotifications] = useState(0)



    return (
        <>
            <section className="w-full bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">

                    <div className="w-full md:mt-10 mt-8 ">
                        <h1 className="relative inter z-10 tracking-[-5%]  text- text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                            Notifications
                        </h1>
                    </div>

                    <div className="flex w-full   mt-2 py-3 z-50 transition-all duration-1000   bg-[#FFFFFF] rounded-[26px] flex-col gap-1 justify-start">
                        {notifications.map((notifi, index) => (
                            <div key={index} onClick={() => setSelectNotifications(index)} className={`w-full flex py-1.5 md:px-4 px-3 gap-4 transition-all duration-600 cursor-pointer justify-start items-center ${selectNotifications === index ? "bg-[#EFEFEF]" : "hover:bg-[#EFEFEF]"}  `}>
                                <img src={notifi.imageNotificat} alt={notifi.imageNotificat} className='w-[52px]  h-[52px] rounded-full' />
                                <div className='w-full  '>
                                    <p className='text-[8.4px] font-[500] text-[#3F3F3F] truncate line-clamp-2'>{notifi.date}</p>
                                    <h5 className="text-[#000] text-[15px] text-start inter font-[500]">{notifi.notificat}</h5>
                                    <i className="text-[10px] font-[400] text-[#3F3F3F] md:line-clamp-2 line-clamp-3">
                                        {notifi.description}
                                    </i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Notifications