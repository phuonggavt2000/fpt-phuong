import { useState } from "react";
import icons from "../ultis/icons";
import {
    cardCameras,
    featureCams,
    feedbackUser,
    iclouds,
    infoCams,
    productCameras,
    suportCameras,
} from "../ultis/static";
import { Link } from "react-router-dom";
import DescPackage from "./DescPackageTv";
import InfoCam from "./InfoCam";
import Register from "../page/public/Register";
import imgCam from "../asset/camera";
import Slider from "react-slick";
import PrevBanner from "../components/PrevBanner";
import NextBanner from "../components/NextBanner";

function ProductCamera() {
    const nameProducts = ["IQ 2S", "IQ 2", "IQ 3", "Camera Play"];
    const priceCameras = [
        { main: "1.000.000đ", sub: "1.400.000đ" },
        { main: "900.000đ", sub: "1.300.000đ" },
        { main: "1.890.000đ", sub: "2.500.000đ" },
        { main: "1.600.000đ", sub: "2.130.000đ" },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevBanner />,
        nextArrow: <NextBanner />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    const settingIclouds = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevBanner />,
        nextArrow: <NextBanner />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    const [numActive, setNumActive] = useState(0);
    const [numProduct, setNumProduct] = useState(0);
    const { GrPrevious, GrNext, BsTicket } = icons;

    return (
        <div className="lg:w-[1106px] w-full mx-auto lg:px-0 px-4">
            <div className="relative w-full mx-auto mt-4 z-[1]  rounded-lg bg-white lg:px-20 px-6 py-3  border-b-2 pb-2">
                <div className="flex items-center border-b-2 lg:text-base text-sm whitespace-nowrap">
                    {nameProducts.map((item, index) => (
                        <button
                            onClick={() => {
                                setNumProduct(index);
                            }}
                            key={index}
                            className={`px-4 py-2 rounded-tl-md rounded-tr-md ${
                                index === numProduct
                                    ? "bg-primary text-white"
                                    : " text-black"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row mt-4 gap-x-8 mb-8 gap-y-8">
                    <div className="lg:w-[50%] w-full flex flex-col justify-center items-center gap-y-4">
                        <img
                            src={productCameras[numProduct].imgs[numActive]}
                            alt="fpt telecom"
                            className="h-full w-full rounded-lg object-cover"
                        />
                        <div className="flex gap-x-2">
                            <button
                                onClick={() => {
                                    if (numActive <= 0) {
                                        console.log("ok");
                                        setNumActive(
                                            productCameras[numProduct].imgs
                                                .length - 1
                                        );
                                    } else {
                                        setNumActive(numActive - 1);
                                    }
                                }}
                            >
                                <GrPrevious className="text-2xl" />
                            </button>
                            {productCameras[numProduct].imgs.map(
                                (item, index) => (
                                    <img
                                        onClick={() => {
                                            setNumActive(index);
                                        }}
                                        key={index}
                                        src={item}
                                        alt="fpt telecom"
                                        className={`h-[46px] w-[46px] lg:h-[69px] lg:w-[69px] cursor-pointer  rounded-md border-2  object-cover ${
                                            numActive === index
                                                ? "border-primary"
                                                : "border-transparent"
                                        }`}
                                    />
                                )
                            )}
                            <button
                                onClick={() => {
                                    if (
                                        numActive >=
                                        productCameras[numProduct].imgs.length -
                                            1
                                    ) {
                                        setNumActive(0);
                                    } else {
                                        setNumActive(numActive + 1);
                                    }
                                }}
                            >
                                <GrNext className="text-2xl" />
                            </button>
                        </div>
                    </div>
                    <div className="flex lg:w-[50%] w-full gap-y-4  flex-col">
                        {productCameras[numProduct].titleDecs.map(
                            (item, index) => (
                                <div
                                    className="flex w-full gap-x-6"
                                    key={index}
                                >
                                    <span className="font-bold text-sm w-1/3">
                                        {item}
                                    </span>
                                    <span className="text-sm w-2/3">
                                        {productCameras[numProduct].desc[index]}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className="border-t-2 flex pt-6 pb-4 lg:flex-row flex-col gap-y-5">
                    <div className="w-1/2 flex gap-x-4 items-center">
                        <div>
                            <span className=" text-primary font-semibold text-xl">
                                {priceCameras[numProduct].main}
                            </span>{" "}
                        </div>
                        <div className="flex items-end">
                            <span className="line-through font-semibold text-xl">
                                {priceCameras[numProduct].sub}
                            </span>{" "}
                            <span>/camera</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex lg:justify-end">
                        <Link
                            to={`tel:0375956703`}
                            className="ml-auto w-full flex whitespace-nowrap justify-center items-center  h-[48px] bg-primary text-white rounded-lg font-semibold hover:text-primary hover:bg-[#ff894033] border-primary border"
                        >
                            Hotline: 0375956703
                        </Link>
                    </div>
                </div>
            </div>
            <Register
                options="Camera trong nhà"
                classPlus="bg-white px-0"
                classContainer
                camera
            />
            <div className="-mx-2">
                <Slider {...settingIclouds}>
                    {iclouds.map((item, index) => (
                        <div key={index} className="px-2">
                            <div
                                className={`${item.border} flex flex-col justify-center items-center border-2 relative  rounded-lg mt-5`}
                            >
                                <div className="px-6">
                                    {item.recommend && (
                                        <img
                                            src={item.recommend}
                                            className="absolute -top-7 -right-5"
                                            alt="fpt telecom"
                                        />
                                    )}

                                    <img src={item.img} alt="fpt telecom" />
                                    <div className="flex flex-col pb-4 font-semibold text-secondary">
                                        {item.descs.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className={`flex ${item.bg} px-6 py-2 w-full`}
                                >
                                    <div className="relative flex flex-col">
                                        <span className="bg-white rounded-xl px-4 text-sm py-2 font-semibold my-auto">
                                            Cloud/Camera
                                        </span>
                                    </div>

                                    <div className="flex flex-col ml-auto font-semibold text-white text-lg">
                                        <span>{item.price}</span>
                                        <span>30 ngày</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 my-8">
                {featureCams.map((item, index) => (
                    <div
                        className="relative rounded-2xl overflow-hidden h-[150px]"
                        key={index}
                    >
                        <img
                            src={item.banner}
                            className="relative object-cover h-full w-full"
                            alt="fpt telecom"
                        />
                        <div className="absolute inset-0 gap-y-4  flex flex-col justify-center px-6">
                            <img
                                src={item.icon}
                                alt="fpt telecom"
                                className="w-[40px] h-[40px]"
                            />
                            <span className="text-white font-semibold text-sm">
                                {item.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <DescPackage items={cardCameras} />
            <div className="grid grid-cols-3 gap-x-3 my-4">
                {suportCameras.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white font-semibold text-sm py-6 px-4 rounded-lg shadow  "
                    >
                        <img src={item.icon} alt="fpt camera" />
                        <span className="pt-4 block">{item.title}</span>
                    </div>
                ))}
            </div>
            <div className="bg-white py-4 px-4 rounded-md mb-4">
                <div className="flex gap-x-4 items-center font-semibold pb-2">
                    <BsTicket className="text-primary text-lg" />
                    <span>Câu hỏi thường gặp</span>
                </div>
                {infoCams.map((item, index) => (
                    <InfoCam
                        key={index}
                        title={item.title}
                        subTitle={item.subTitle}
                    />
                ))}
            </div>
            <div className="flex items-center gap-x-3 font-semibold my-8">
                <img src={imgCam.iconUser} alt="fpt camera" />
                <span>Phản hồi khách hàng</span>
            </div>
            <Slider {...settings}>
                {feedbackUser.map((item, index) => (
                    <div className="px-2" key={index}>
                        <div className="bg-white shadow px-4  py-4 rounded-lg">
                            <div className="flex items-center gap-x-4 mb-4">
                                <img
                                    src={item.img}
                                    className="w-[50px] h-[50px] rounded-full"
                                    alt="fpt camera"
                                />
                                <div className="flex flex-col font-semibold">
                                    <span>{item.name}</span>
                                    <span className="text-primary">
                                        {item.country}
                                    </span>
                                </div>
                            </div>
                            <span className="font-semibold text-sm ">
                                {item.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="grid grid-cols-4 mb-6"></div>
        </div>
    );
}

export default ProductCamera;
