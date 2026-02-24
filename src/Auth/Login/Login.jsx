import { useState, useEffect } from "react";
import loginimg from '../assets/loginimg.png'
import drlayerlogo4 from '../assets/drlayerlogo4.png'
import TabLink from '../Components/TabLink/TabLink'
import { Link, useSearchParams, useNavigate } from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa6";
import { useAuth } from "../../AuthContext/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { login } = useAuth();

    const roleQuery = searchParams.get("role")?.toLowerCase();

    useEffect(() => {
        if (!roleQuery) navigate("/");
    }, [roleQuery, navigate]);

    // const navigateHome = (e) => {
    //     e.preventDefault();
    //     if (!roleQuery) return;
    //     login(roleQuery);
    //     navigate("/home");
    //      console.log(roleQuery,"dkfadbfjadkjdgmfkd,mdn")
    // };

    const navigateHome = (e) => {
        e.preventDefault();

        if (!roleQuery) return;

        login(roleQuery);
        navigate("/home");
    };


    return (
        <>
            <section className=' bg-[#F6F0E4] h-screen w-full  flex justify-between items-center'>
                <div className='h-screen  w-full overflow-y-auto flex  items-center overflow-scroll p-4'>
                    <div className='flex md:h-auto h-screen flex-col w-full mx-auto max-w-[422px] items-start'>
                        <div className="flex mt-10  justify-start items-center gap-2.5">
                            <button
                                onClick={() => navigate("/")}
                                className="bg-[#642329] cursor-pointer hover:shadow-lg md:p-1.5 p-1 rounded-full text-xl text-white"
                            >
                                <FaAngleLeft />
                            </button>
                            <img src={drlayerlogo4} alt={`${drlayerlogo4} logo`} className='w-[168px] h-[41px]' />
                        </div>
                        <div className=" lg:mt-24 mt-12 w-full">
                            <TabLink />
                        </div>
                        <div className=" lg:mt-6 mt-2 w-full">
                            <h1 className="poppins lg:text-[35.12px] md:text-[30px] text-[28px]  text-[#000000] leading-[41.71px] font-[600] ">Welcome back! </h1>
                            <p className="text-[14px] md:my-3 my-0 tracking tracking-[-1%] inter leading-[21.95px] text-[#565450]  font-[400]">
                                Ullamco nostrud veniam Lorem dolor excepteur veniam <br className='md:block hidden'></br> Lorem fugiat ipsum
                            </p>

                        </div>
                        <form onSubmit={navigateHome} className='w-full  flex flex-col mt-1 gap-3.5'>
                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email'
                                    className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                            </div>
                            <div className='w-full flex flex-col gap-2.5'>
                                <label htmlFor="" className='text-[14px] font-[500] tracking-[-1%] text-[#00000] leading-[20px]'>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name='password'
                                    placeholder='Enter your password'
                                    className='text-[16px] font-[400] tracking-[-1%] text-[#ADB3B7] leading-[22px] h-[48px] rounded-[8px] p-4 border-[1px] border-[#E6E7E9] shadow-[#80808040] drop-shadow-xs bg-[#FFFF] outline-0' />
                            </div>

                            <button type="submit" className=' w-full  lg:mt-5 mt-3 p-3 text-[#FFFF] hover:bg-[#3c2022f8] text-center bg-[#301619] rounded-full inter transition-all duration-300  cursor-pointer' >
                                Login
                            </button>
                            <p className="text-[14px] lg:my-4 my-2 tracking-[3%] roboto text-center  text-[#565450]  font-[700]">
                                Don’t have account? <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        navigate(`/sign-up?role=${roleQuery}`)
                                    }}
                                    className="text-[14px] tracking-[3%] roboto text-[#28160A] hover:text-[#3c2022f8] hover:underline  font-[700]">Sign Up</button>
                            </p>

                        </form>
                    </div>
                </div>
                <div className='w-full  md:flex hidden justify-center p-4 items-center h-screen'>
                    <img src={loginimg} alt="" className='w-full h-full rounded-[13px]' />
                </div>
            </section>
        </>
    )
}

export default Login