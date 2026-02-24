import { useEffect, useRef, useState } from "react";
import { MdOutlineList } from "react-icons/md";

import chatuser1 from './assets/chatuser1.png'
import chatuser2 from './assets/chatuser2.png'
import chatuser3 from './assets/chatuser3.png'
import chatuser4 from './assets/chatuser4.png'
import chatuser5 from './assets/chatuser5.png'
import searchicon from './assets/searchicon.png'
import invoice from './assets/invoice.png'
import dubletick from './assets/dubletick.png'
import uploadIcon from './assets/uploadIcon.png'
import sendicon from './assets/sendicon.png'
import pdfIcon from './assets/pdfIcon.png'
import cameraIcon from './assets/cameraIcon.png'
import galleryIcon from './assets/galleryIcon.png'
import InvoiceModal from "./InvoiceModal/InvoiceModal";
import SendDocumentModal from "./SendDocumentModal/SendDocumentModal";

const Chats = () => {

  const chats = [
    {
      image: chatuser1,
      name: "Smith Mathew",
      time: "29 mar",
      status: "Active Now",
      inbox: 2,
      type: "Chat",
      message: "Hi, David. Hope you’re doing...."
    },
    {
      image: chatuser2,
      name: "Merry An.",
      time: "12 mar",
      status: "Offline Now",
      inbox: null,
      type: "Case Chat",
      message: "Are you ready for today’s part.."
    },
    {
      image: chatuser3,
      name: "John Walton",
      time: "12 mar",
      status: "Active Now",
      inbox: null,
      type: "Case Chat",
      message: "Hope you’re doing well today.."
    },
    {
      image: chatuser4,
      name: "Innoxent Jay",
      time: "12 mar",
      status: "Active Now",
      inbox: null,
      type: "Chat",
      message: "Let’s get back to the work, You.."
    },
    {
      image: chatuser5,
      name: "Innoxent Jay",
      time: "12 mar",
      status: "Offline Now",
      inbox: null,
      type: "Case Chat",
      message: "Let’s get back to the work, You.."
    },
    {
      image: chatuser2,
      name: "Merry An.",
      time: "12 mar",
      status: "Active Now",
      inbox: null,
      type: "Case Chat",
      message: "Are you ready for today’s part.."
    },
    {
      image: chatuser3,
      name: "John Walton",
      time: "12 mar",
      status: "Offline Now",
      inbox: null,
      type: "Case Chat",
      message: "Hope you’re doing well today.."
    },
    {
      image: chatuser4,
      name: "Innoxent Jay",
      time: "12 mar",
      status: "Active Now",
      inbox: null,
      type: "Chat",
      message: "Let’s get back to the work, You.."
    },
    {
      image: chatuser2,
      name: "Merry An.",
      time: "12 mar",
      status: "Active Now",
      inbox: null,
      type: "Case Chat",
      message: "Are you ready for today’s part.."
    },
    {
      image: chatuser3,
      name: "John Walton",
      time: "12 mar",
      status: "Offline Now",
      inbox: null,
      type: "Case Chat",
      message: "Hope you’re doing well today.."
    },
    {
      image: chatuser4,
      name: "Monica Randawa",
      time: "12 mar",
      status: "Active Now",
      inbox: null,
      type: "Case Chat",
      message: "Let’s get back to the work, You.."
    },

  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Are you still travelling?",
      sender: "other",

    },
    {
      id: 2,
      text: "Yes, I’m at Istanbul..",
      sender: "me",
      time: "3:00 PM",
      read: dubletick
    },
    {
      id: 3,
      text: "OoOo, that’s so cool!",
      sender: "other",

    },
    {
      id: 4,
      text: "Raining??",
      sender: "other",

    },
    {
      id: 5,
      text: "Yes, I’m at Istanbul..",
      sender: "me",
      time: "3:00 PM",
      read: dubletick
    },
    {
      id: 6,
      text: null,
      messagesImage: invoice,
      sender: "other",

    },
    {
      id: 7,
      text: "Yes, I’m at Istanbul..",
      sender: "me",
      time: "3:00 PM",
      read: dubletick
    },
    {
      id: 8,
      text: "Raining??",
      sender: "other",

    },
    {
      id: 9,
      text: "Yes, I’m at Istanbul..",
      sender: "me",
      time: "3:00 PM",
      read: dubletick
    },

  ]);

  const [sendDocumentModal, setSendDocumentModal] = useState(false)
  const [modalList, setModalList] = useState(false)
  const [openChatlist, setopenChatlist] = useState(true);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Chat");
  const dropdownRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setModalList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);




  const filteredChats = chats.filter((chat) => {
    const matchesChat = filter === "Chat" || chat.type === filter;
    const matchesSearch = chat.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesChat && matchesSearch;
  });



  return (
    <>
      <section className='w-full relative  flex bg-[#FFFFFF]'>

        <div className="lg:max-w-[408px] md:max-w-[340px] w-full border-r border-[#E9E9E9] flex flex-col h-screen">
          <div className="md:mt-24 mt-20 p-6">
            <h1 className='text-[20px] font-[500] text-[#000]'>Message</h1>
            <div className='bg-[#F0F0F0] rounded-full flex my-2 justify-center items-center p-1'>
              {["Chat", "Case Chat"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`w-full py-2 rounded-full text-[12px] font-semibold transition
                  ${filter === type
                      ? "bg-white shadow"
                      : "text-[#000000B2]"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <h1 className='text-[16px] font-[500] text-[#000]'>{filter === "Chat" ? "Chat" : "Case Chat"}</h1>
            <div className='bg-[#F6F6F6] rounded-full flex my-2  justify-center items-center pl-3'>
              <img src={searchicon} className="w-[12px] h-[12px]" />
              <input
                type="text"
                placeholder="Search here.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={` text-[#E4E4E4D] p-3 outline-none transition-all duration-300 w-full  text-[12px] font-[500]`}
              />
            </div>
            <h1 className='text-[12px] font-[500] text-[#000]'>RECENT CHAT</h1>
          </div>
          <div className="flex-1 overflow-y-auto overflow-scroll   px-6 pb-4">
            <ul className="md:space-y-2">
              {filteredChats.map((chat, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setopenChatlist(true)
                    setSelectedIndex(index);
                  }}
                  className={`py-3 lg:pl-3 w-full flex justify-start gap-2 items-center cursor-pointer transition 
                   `}
                >
                  <img src={chat.image} className='md:w-[50px] w-[35px] md:h-[50px] h-[35px]' />
                  <div className="flex flex-col w-full ">
                    <div className="flex justify-between items-center ">
                      <h4 className="truncate font-[500] md:text-[18px] text-[13px] ">
                        {chat.name}
                        {chat.inbox && (
                          <span className="ml-2 text-[10px] bg-[#4F3F31]  text-white px-1.5 py-0.5 rounded-full">
                            {chat.inbox}
                          </span>
                        )}
                      </h4>
                      <span className="md:text-[14px] text-[11px] text-[#C5BDBD] font-[400] whitespace-nowrap ">
                        {chat.time}
                      </span>
                    </div>
                    <p className={`${selectedIndex === index ? "text-[#9C9797]" : "text-[#E4E4E4D4]"}  font-[500] md:text-[16px] text-[12px] truncate`}>
                      {chat.message}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`flex flex-col w-full absolute sm:relative inset-0 h-screen  bg-white  transition-transform duration-300 ease-in  ${openChatlist ? "translate-x-0 opacity-100" : "translate-x-full hidden opacity-0"}    md:translate-x-0`}>
          <div className="w-full md:mt-24 mt-20 md:p-6 p-4 flex justify-between items-center border-b-2 gap-4 border-[#E9E9E9]  ">
            <div className=" w-full  flex justify-start items-center gap-4  ">
              <img src={chats[selectedIndex]?.image} className='md:w-[50px] w-[40px] md:h-[50px] h-[40px]' />
              <div className="  ">
                <h2 className=" md:text-[18px] text-[15px]  font-[500] ">
                  {chats[selectedIndex].name}
                </h2>
                <div className=" flex justify-start items-center ">
                  <p className="text-[#DEDEDE] font-[400] text-[10px] font-[400]">
                    {chats[selectedIndex].status}
                  </p>
                  <span className={`ml-2  ${chats[selectedIndex].status === "Active Now" ? "bg-[#55A99D] " : "bg-[#ee100c] "}  p-1 rounded-full`}>
                  </span>
                </div>
              </div>
            </div>
            <div className="  md:hidden flex justify-end items-center   ">
              <button onClick={() => setopenChatlist(false)} className="cursor-pointer border-2 bg-[#E4E4E4D4] text-[#9C9797]   border-[#9C9797] p-1 rounded-full" >
                <MdOutlineList className="text-[30px]" />
              </button>
            </div>
          </div>

          <div className="flex-1 h-full   overflow-scroll  overflow-y-auto  p-8 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-5 ${msg.sender === "me" ? "justify-end" : "justify-start items-end"
                  }`}
              >  {msg.sender === "other" && (
                <div className="relative  rounded-full md:w-[50px] w-[40px] md:h-[50px] h-[40px]">
                  <img src={chats[selectedIndex]?.image} className='' />
                  <span className={`absolute right-1 top-0.5 ml-2   ${chats[selectedIndex].status === "Active Now" ? "bg-[#55A99D] " : "bg-[#ee100c] "}  border-2 border-white p-1 rounded-full`}>

                  </span>
                </div>
              )}
                {msg.text && (
                  <>
                    <div>
                      <span className={`px-4 py-2 flex rounded-full poppins w-full font-[400] text-[15.97px] ${msg.sender === "me"
                        ? "bg-[#FFF7EE] text-[#D9CBB1]  rounded-br-none"
                        : "bg-[#E4E4E4D4] text-[#9C9797]  rounded-bl-none"
                        }`}>
                        {msg.text}
                      </span>
                      {msg.sender === "me" ? (
                        <>
                          <div className="flex justify-end mt-2 gap-1 items-center">
                            <img
                              src={msg.read}
                              alt=" read message"
                              className="w-[13px] h-[7px] max-w-full"
                            />
                            <p className="text-[#9C9797] font-[400] text-[10px] ">{msg.time}</p>
                          </div>
                        </>
                      )
                        : <></>
                      }
                    </div>
                  </>
                )}
                {msg.messagesImage && (
                  <img
                    onClick={() => setInvoiceModal(true)}
                    src={msg.messagesImage}
                    alt="message"
                    className="w-[194px] h-[210] max-w-full"
                  />
                )}
              </div>
            ))}

          </div>
          <div ref={dropdownRef} className=" justify-center items-end   w-full flex p-4">
            <div className=" w-full relative text-[#000000] border-[1px] p-3 rounded-full flex items-center justify-center p border-[#E5E6E9] flex gap-2">
              {modalList && <div className="absolute bottom-8 left-8 z-30 p-4 w-[176px] bg-white border border-[#E5E5E5] shadow-lg rounded-t-[16px] rounded-r-[16px] flex flex-col items-center gap-3">
                <button
                  onClick={() => setModalList(false)}
                  className="flex w-full items-center justify-center gap-3 cursor-pointer pb-2 border-b border-dashed border-[#E5E5E5] "
                >
                  <img src={galleryIcon} alt="gallery Icon" className="w-[17px]" />
                  <span className="text-[16px] font-roboto font-medium">Gallery</span>
                </button>
                <button
                  onClick={() => setModalList(false)}
                  className="flex w-full items-center justify-center gap-3 cursor-pointer pb-2 border-b border-dashed border-[#E5E5E5] "
                >
                  <img src={cameraIcon} alt="camera Icon " className="w-[17px]" />
                  <span className="text-[16px] font-roboto font-medium">Camera</span>
                </button>
                <button
                  onClick={() => {setModalList(false),setSendDocumentModal(true)}}
                  className="flex w-full cursor-pointer items-center justify-center gap-3  "
                >
                  <img src={pdfIcon} alt="pdf Icon" className="w-[17px]" />
                  <span className="text-[16px] font-roboto font-medium">Document</span>
                </button>
              </div>
              }
              <button
                onClick={() => setModalList(!modalList)}
                className="bg-[#EAE2CF] cursor-pointer   w-[33px] h-[33px] flex items-center justify-center rounded-full  hover:bg-[#EAE2CF]"
              >
                <img src={uploadIcon} alt="" className="w-[17px] h-[16px]" />
              </button>
              <input
                type="text"
                placeholder="Type Message"
                className="flex-1 border-r-2 border-[#E5E5E5] roboto p-1   text-[14px] font-[400]  outline-none "
              />
              <button
                className="bg-[#28160A] cursor-pointer w-[33px] h-[33px] flex items-center justify-center rounded-full text-sm hover:bg-[#321c0e]"
              >
                <img src={sendicon} alt="" className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>
        </div>

      </section>


      <InvoiceModal
        invoiceModal={invoiceModal}
        setInvoiceModal={setInvoiceModal}
      />
      <SendDocumentModal
        sendDocumentModal={sendDocumentModal}
        setSendDocumentModal={setSendDocumentModal}
      />
    </>
  )
}

export default Chats


