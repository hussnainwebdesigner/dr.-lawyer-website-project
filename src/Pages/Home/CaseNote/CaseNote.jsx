import { useState } from 'react'
import AddNotesModal from './AddNotesModal/AddNotesModal'
import NotesDetailsModal from './NotesDetailsModal/NotesDetailsModal'
import { FaAngleLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'



const CaseNote = () => {
    const navigate = useNavigate()
    const [addNotesModal, setAddNotesModal] = useState(false)
    const [notesDetailsModal, setNotesDetailsModal] = useState(false)
    const [caseNotes, setCaseNotes] = useState([
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },
        {
            personName: "Brooklyn Simmons",
            decs: "Tax lawyer are experts in the US tax system. They help businesses and individuals...",
        },

    ])



    return (
        <>
            <section className="w-full min-h-screen bg-[#F6F0E4]">
                <div className="w-full max-w-[1357px] p-5 md:mt-16 mt-14  mx-auto">
                    <div className="w-full flex items-center md:mt-10 mt-8  justify-between ">
                        <div className="w-full flex  items-center gap-2 ">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5  p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <h1 className="relative inter z-10 tracking-[-5%] flex w-full  text-start  lg:text-[40px] md:text-[26px] text-[24px] font-[600]">
                                Case Notes
                            </h1>
                        </div>


                        <div className=" flex items-center  justify-end gap-2">
                            <button
                                onClick={() => setAddNotesModal(true)}
                                className={`px-4 md:w-[144px] w-[92px] md:py-3 py-2 roboto cursor-pointer border-[1.27px] text-center text-[12px] font-[400]  border-[#53453B] rounded-full  transition-all duration-300 bg-[#75683E] text-white `}
                            >
                                Add Notes
                            </button>
                        </div>
                    </div>

                    <div className="w-full py-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {caseNotes.map((cases, index) => (
                            <div key={index} onClick={() => setNotesDetailsModal(true)} className="w-full relative  bg-[#FFFF] hover:shadow-lg transition-all duration-200 flex flex-col cursor-pointer justify-center items-center  md:px-5 px-3.5 md:py-8 py-6.5   rounded-[28px]">
                                <div className="w-full p-2 ">
                                    <p className=" roboto text-[#030712] text-start text-[18px] font-[500]"> {cases.personName} </p>
                                    <p className=" roboto mt-1 text-[#ADB3B7] text-start md:text-[16px] text-[14px] font-[400]">{cases.decs} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <AddNotesModal
                addNotesModal={addNotesModal} setAddNotesModal={setAddNotesModal}
            />

            <NotesDetailsModal
                notesDetailsModal={notesDetailsModal} setNotesDetailsModal={setNotesDetailsModal}
            />
        </>
    )
}

export default CaseNote
