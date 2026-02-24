import React from 'react'
import invoiceIcon from '../assets/invoiceIcon.png'
import barcode from '../assets/barcode.png'

const InvoiceModal = ({ invoiceModal, setInvoiceModal }) => {

    if (!invoiceModal) return;
    return (

        <>
            <div onClick={() => setInvoiceModal(false)} className=" fixed inset-0  flex overflow-y-auto  justify-center items-center z-50 bg-[#1A1A1A99] backdrop-blur-[20px]  h-[100%] w-[100%]">
                <div className='h-screen w-full  overflow-y-auto overflow-scroll  p-4 '>
                    <div className='min-h-screen w-full flex justify-center items-center my-4  '>
                        <div className="stamp-mask w-full max-w-[580px] h-auto rounded-[34.44px] aspect-[1.5] pt-[var(--r)] bg-[#fff]" >
                            <div className='w-full flex flex-col items-center'>
                                <div className='w-full flex flex-col items-center md:p-4 p-2 border-b-[2px] border-dashed border-[#E5E5E5]'>
                                    <div className='p-2 bg-[#D9CBB112] flex justify-center items-center md:w-[155px] w-[100px] md:h-[155px] h-[100px] rounded-full'>
                                        <img src={invoiceIcon} alt="invoice Icon" className='md:w-[63px] w-[43px] md:h-[69px] h-[49px]' />
                                    </div>
                                    <div className='w-full flex flex-col items-center '>
                                        <h1 className='font-[600] text-center text-[#28160A] inter md:text-[41px] text-[25px]'>Invoice Success</h1>
                                        <p className='font-[400] text-[#ADB3B7] text-center roboto md:text-[27px] text-[18px]'>You have successfully sent invoice.</p>
                                    </div>
                                    <div className='w-full flex flex-col mt-4 items-center '>
                                        <p className='font-[400] text-[#ADB3B7] text-center roboto md:text-[27px] text-[18px]'>Total Invoice</p>
                                        <h1 className='font-[600] text-center text-[#28160A] inter md:text-[34px] text-[25px]'>$800.00</h1>
                                    </div>

                                </div>
                                <div className='w-full flex flex-col items-center p-4'>
                                    <div className='p-2 bg-[#D9CBB112] flex justify-center items-center'>
                                        <img src={barcode} alt="invoice Icon" className='w-full max-w-[370px] w-[43px] md:h-[96px] h-[60px]' />
                                    </div>

                                    <div className="flex  w-full md:px-4 justify-center md:gap-5 gap-3 my-4 items-center">
                                        <button
                                            onClick={() => setInvoiceModal(false)}
                                            className="w-full md:max-w-[224px] md:p-4 p-2.5 md:text-[18px] text-[15px] lato text-[#030712] font-[700] rounded-full inter bg-[#ffff]   border-[1px] border-[#E6E7E9] cursor-pointer shadow-[#80808040] hover:shadow-sm">
                                            Direct Pay
                                        </button>
                                        <button
                                            onClick={() => setInvoiceModal(false)}
                                            className="w-full md:max-w-[224px] md:p-4 p-2.5 md:text-[18px] text-[15px]  lato text-[#fff] font-[700] rounded-full inter bg-[#642329]   border-[1px] border-[#E6E7E9] cursor-pointer shadow-[#80808040] hover:shadow-sm">
                                            Stripe Pay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceModal

{/* <div
  className="
    h-[250px]
    aspect-[1.5]
    p-[var(--r)]
    bg-[#b3b39c]
    [--r:20px]
    [mask:radial-gradient(50%_50%,#0000_66%,#000_67%)_round_var(--r)_var(--r)/calc(2*var(--r))_calc(2*var(--r)),conic-gradient(#000_0_0)_content-box]
  "
></div> */}