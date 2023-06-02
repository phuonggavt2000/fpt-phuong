import { useEffect, useRef } from "react";
import imgCam from "../../asset/camera";
import ProductCamera from "../../components/ProductCamera";

function Camera() {
    const ref = useRef();

    useEffect(() => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
        });
    }, []);

    return (
        <div className="lg:pt-[70px] pt-[50px]" ref={ref}>
            <div className="absolute lg:top-[70px] top-[50px] right-0 left-0 ">
                <img
                    src={imgCam.banner}
                    alt="truyen hinh fpt"
                    className="absolute inset-0 lg:h-auto h-[300px] object-cover"
                />
            </div>
            <div className=" gap-y-4 font-semibold relative z-10 text-white flex flex-col justify-center items-center pt-8 lg:pt-14">
                <h1 className="text-4xl">CAMERA FPT</h1>
                <p className=" text-center">An toàn mọi lúc mọi nơi</p>
            </div>
            <ProductCamera />
        </div>
    );
}

export default Camera;
