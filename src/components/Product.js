import Slider from "react-slick";
import imgStart from "../asset/imgs/star-icon.png";
import { Link } from "react-router-dom";
import PrevBanner from "./PrevBanner";
import NextBanner from "./NextBanner";
import path from "../ultis/path";

function Product({ img, products, title = "cáp quang FPT" }) {
    const settings = {
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
    return (
        <div className=" max-w-[1200px] mx-auto my-6">
            <div className="flex flex-col justify-center items-center gap-y-2 lg:mt-10 mt-4">
                <img
                    src={img}
                    alt="internet fpt"
                    className="bg-primary rounded-full lg:px-3 lg:py-4 px-1 py-2 text-center"
                />

                <h1 className="font-bold text-primary lg:text-2xl text-lg text-center uppercase">
                    {title}
                </h1>
            </div>
            <Slider {...settings}>
                {products.map((item, index) => {
                    return (
                        <div key={index} className="px-6 py-10">
                            <div className="bg-white flex overflow-hidden relative h-full justify-center items-center flex-col lg:py-8 py-4 gap-y-2 text-center rounded-lg shadow-card">
                                {item.isRecommend && (
                                    <img
                                        src={imgStart}
                                        alt="fpt telecom"
                                        className="absolute top-0 left-0 w-[30%]"
                                    />
                                )}
                                {item.type === "combo" ? (
                                    <span className="text-2xl font-bold">
                                        Combo
                                    </span>
                                ) : (
                                    <></>
                                )}
                                <span className="font-bold text-4xl text-[#4eb848] italic">
                                    {item.title}
                                </span>
                                <div className="w-[113px] mx-auto border-t">
                                    <img
                                        src={item.img}
                                        alt="fpt telecom"
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium">Chỉ từ</span>

                                    <span class="animate-charcter text-xl font-bold">
                                        {" "}
                                        {item.price} đ/tháng
                                    </span>
                                </div>

                                <div className="text-xs lg:pb-4 pb-1 px-16">
                                    <p>
                                        {item.desc} <br />
                                        {item.subDesc}
                                    </p>
                                </div>
                                <div className="text-sm px-10 flex-col flex gap-y-2 ">
                                    <p className="lg:pt-6 pt-2 border-t">
                                        {item.obj}
                                    </p>

                                    <div className="flex flex-col">
                                        <span className="pop-outin text-primary font-bold">
                                            {item.gift}
                                        </span>
                                        <span className="pop-outin text-primary font-bold">
                                            {item.gifts}
                                        </span>
                                        <span className="pop-outin text-primary font-bold">
                                            {item.giftPlus}
                                        </span>
                                    </div>
                                    <p>
                                        Ưu tiên lắp đặt trong 12h - 36h
                                        <br />
                                        Hỗ trợ kỹ thuật 24/7
                                    </p>
                                </div>

                                <Link
                                    to={`/${path.REGISTER}`}
                                    className="border-2 hover:bg-[#dfffde] lg:mt-4 mt-2 font-semibold border-[#4eb848] text-[#4eb848]  font rounded-full px-6 py-2"
                                >
                                    Đăng ký ngay
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Product;
