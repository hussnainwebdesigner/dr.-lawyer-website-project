import { useState, useEffect } from "react";
import signupimg from "../../assets/signupimg.png";
import loginimg from "../../assets/loginimg.png";
import slidImage from "../../assets/slidImage.png";

const SignImage = ({ currentStep = 1, totalSteps = 3 }) => {
   


    const images = [signupimg, loginimg, slidImage];
    // const currentImage = images[currentStep - 1] || images[0];
    const [currentIndex, setCurrentIndex] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, [images.length]);


    const [activeFill, setActiveFill] = useState(0);

    useEffect(() => {
        setActiveFill(0);

        const interval = setInterval(() => {
            setActiveFill((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);
        return () => clearInterval(interval);
    }, [currentStep]);



    return (
        <div
            className="bg-no-repeat bg-cover relative bg-white w-full lg:py-50 py-40 rounded-3xl transition-all duration-700"
            style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
            }}
        >

            <div className="absolute w-full h-full rounded-3xl flex p-8 items-end  bg-gradient-to-t from-[#0000004D] left-0 z-50 top-0">
                <div className="w-full flex flex-col items-center gap-4">
                    <p className="lg:text-[32px] text-[22px]  tracking-[-1%] lg:leading-[38px] leading-[28px] text-white font-[500] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.
                    </p>
                    <div className="w-full grid grid-cols-3 gap-2">

                        {Array.from({ length: totalSteps }).map((_, index) => {

                            let fill = 0;

                            if (index === currentStep - 1) {
                                fill = activeFill;
                            }
                            return (
                                <div
                                    key={index}
                                    className="w-full h-[6px] rounded-full bg-[#D9D9D999] overflow-hidden"
                                >
                                    <div
                                        className="h-full bg-white w-full rounded-full transition-all duration-1000 ease-linear"
                                        style={{ width: `${fill}%` }}
                                    />
                                </div>
                            );

                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignImage;
