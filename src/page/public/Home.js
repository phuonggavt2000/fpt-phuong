import Banner from "../../components/Banner";
import icons from "../../ultis/icons";
import { underBanners } from "../../ultis/static";
import { Link } from "react-router-dom";
import imgTv from "../../asset/recommend/Tv.jpg";
import imgCam from "../../asset/recommend/camera.jpg";
import imgInternetP from "../../asset/recommend/internetPlus.png";
import path from "../../ultis/path";
import Product from "../../components/Product";
import {
    internetProducts,
    comboProducts,
    internetBusinesss,
} from "../../ultis/static";
import img from "../../asset/imgs/img";
import Register from "./Register";
import { useEffect, useRef } from "react";
import DescInternet from "../../components/DescInternet";

function Home() {
    const { MdNavigateNext } = icons;
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
        });
    }, []);
    return (
        <div className="relative lg:pt-[70px] pt-[50px] " ref={ref}>
            <Banner />

            <div className="lg:px-8 pb-10">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:px-8 px-4 gap-5 text-2xl font-semibold mt-4 ">
                    {underBanners.map((item, key) => (
                        <Link
                            to={item.to}
                            key={key}
                            className={`flex items-center gap-4 hover:shadow-lg shadow transition-all bg-[#f8f9fa]  cursor-pointer ${item.hover} py-8 rounded-lg lg:justify-center lg:px-0 px-5`}
                        >
                            <button className={`${item.bg} p-4 rounded-full`}>
                                {item.icon}
                            </button>

                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center items-center flex-col mt-6">
                    <img
                        className="w-[80px] text-center "
                        alt="fpt telecom"
                        src="https://khuyenmai-fpt.shop/wp-content/uploads/2022/07/km.gif"
                    />
                    <h2 className="font-semibold px-4 lg:text-2xl text-lg text-center mt-4 text-primary capitalize flex gap-x-2 justify-center items-center">
                        Chương trình ngày vàng ưu đãi lên đến 3 tháng cước
                    </h2>
                </div>

                <Register classPlus="bg-white" classContainer="pt-1" />
                <Product
                    title="Cáp quang FPT "
                    img={img.private}
                    products={internetProducts}
                />
                <Product
                    title="Internet + Truyền hình"
                    img={img.combo}
                    products={comboProducts}
                />
                <Product
                    title="Internet doanh nghiệp"
                    img={img.internetBusiness}
                    products={internetBusinesss}
                />
                <div className="lg:mt-20 mt-10 px-4">
                    <h1 className="lg:text-4xl text-2xl font-bold text-center mb-12">
                        Sản phẩm dịch vụ FPT
                    </h1>
                    <Link className="relative hidden lg:block" to={path.TV}>
                        <img
                            src={imgTv}
                            alt="truyen-hinh-fpt"
                            className="rounded-lg"
                        />
                        <div className="absolute flex justify-center items-center w-full flex-col bottom-[3%] ">
                            <span className="text-2xl text-orange-500 font-semibold">
                                FPT Play
                            </span>
                            <div className="flex items-center mt-1 gap-x-2 justify-center">
                                <span className="text-blue-600">
                                    Chi tiếp sản phẩm{" "}
                                </span>
                                <button className="p-1 bg-blue-700 rounded-full">
                                    <MdNavigateNext className="text-white" />
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="grid lg:grid-cols-2 lg:px-8 px-5 grid-cols-1 gap-y-2 lg:h-full h-[60%] gap-x-4 mt-5">
                    <Link
                        className="relative lg:h-full w-full"
                        to={path.INTERNET}
                    >
                        <img
                            src={imgInternetP}
                            alt="internet-fpt"
                            className="h-full w-full rounded-lg"
                        />
                        <div className="absolute flex justify-center items-center w-full flex-col bottom-[3%] ">
                            <span className="text-2xl text-orange-500 font-semibold">
                                Internet FPT
                            </span>
                            <div className="flex items-center mt-1 gap-x-2 justify-center">
                                <span className="text-blue-600">
                                    Chi tiếp sản phẩm{" "}
                                </span>
                                <button className="p-1 bg-blue-700 rounded-full">
                                    <MdNavigateNext className="text-white" />
                                </button>
                            </div>
                        </div>
                    </Link>
                    <Link className="relative  lg:h-full" to={path.REGISTER}>
                        <img
                            src={imgCam}
                            alt="camera-fpt"
                            className="h-full w-full rounded-lg "
                        />
                        <div className="absolute flex justify-center items-center w-full flex-col bottom-[3%] ">
                            <span className="text-2xl text-orange-500 font-semibold">
                                Camera FPT
                            </span>
                            <div className="flex items-center mt-1 gap-x-2 justify-center">
                                <span className="text-blue-600">
                                    Chi tiếp sản phẩm{" "}
                                </span>
                                <button className="p-1 bg-blue-700 rounded-full">
                                    <MdNavigateNext className="text-white" />
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <DescInternet />
        </div>
    );
}

export default Home;
