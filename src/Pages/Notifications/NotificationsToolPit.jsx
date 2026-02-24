import React, { useState } from 'react'
import notifi1 from './assets/notifi1.png'
import notifi2 from './assets/notifi2.png'
import notifi3 from './assets/notifi3.png'
import notifi4 from './assets/notifi4.png'


const NotificationsToolPit = () => {
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
            // bg: "bg-[#EFEFEF]"
        },
        {
            imageNotificat: notifi3,
            date: " June 31, 2023",
            notificat: "Digital Marketing Strategies",
            description: <>
                <p>"This comprehensive course dives into the world of digital marketing strategies, covering topics such as search<br /> engine optimization (SEO), social media marketing, content marketing, and more. Learn how to create effective<br /> marketing campaigns, reach your target audience, and grow your online presence."</p>
            </>,
            // bg: "bg-[#EFEFEF]"
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
            <div className=" w-full z-50  relative  transition-all duration-1000 py-6  gap-2.5 bg-[#FFF] rounded-[16px] ">
                <div className='w-full flex justify-start  px-6'>
                    <h2 className="text-[#000] text-[24px] text-start inter font-[600]">
                        Notification
                    </h2>
                </div>
                <div className='w-full flex flex-col gap-1 justify-start  '>
                    {notifications.map((notifi, index) => (
                        <div key={index} onClick={()=>setSelectNotifications(index)} className={`w-full flex py-1.5 px-4 transition-all duration-600 gap-3 cursor-pointer justify-start items-center ${selectNotifications === index ? "bg-[#EFEFEF]" : "hover:bg-[#EFEFEF]"}  `}>
                            <img src={notifi.imageNotificat} alt={notifi.imageNotificat} className='w-[52px]  h-[52px] rounded-full' />
                            <div className='w-full  '>
                                <p className='text-[8.4px] font-[500] text-[#3F3F3F] truncate line-clamp-2'>{notifi.date}</p>
                                <h5 className="text-[#000] text-[15px] text-start inter font-[500]">{notifi.notificat}</h5>
                                <i className='text-[10px] font-[400] text-[#3F3F3F] truncate line-clamp-2'>
                                    {notifi.description}
                                </i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NotificationsToolPit