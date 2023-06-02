import bannerService from "../../asset/banner/bannerPagepg.jpg";
import { internetProducts } from "../../ultis/static";
import imgInternet from "../../asset/imgs/quang-ca-nhan.png";

import Product from "../../components/Product";
import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import Register from "./Register";
import DescInternet from "../../components/DescInternet";

function Internet({
    product = internetProducts,
    imgProduct = imgInternet,
    title = "Cáp quang FPT",
    tv = false,
    business = false,
}) {
    const ref = useRef();

    useEffect(() => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
        });
    }, []);

    return (
        <div className="lg:pt-[70px] pt-[50px]" ref={ref}>
            <Helmet>
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=yes"
                />
                <title>
                    Đăng ký lắp đặt internet FPT khuyến mãi tháng 04/2023
                </title>
                <meta
                    name="keywords"
                    CONTENT="internet fpt, mạng fpt, mạng internet fpt, lắp đặt internet fpt, lắp mạng fpt, lắp internet fpt, đăng ký internet fpt, đăng ký mạng fpt, lắp đặt fpt, đăng ký fpt, đăng ký lắp đặt fpt"
                />
                <meta
                    name="description"
                    CONTENT="FPT Telecom khuyến mãi đăng ký lắp đặt internet FPT cực sốc tháng 04/2023 ✓ Miễn phí lắp mạng ✓ Miễn phí WiFi 5G cực mạnh ✓ Tặng cước từ 2-4 tháng, lắp đặt siêu tốc trong 24h"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="FPT Telecom HCM" />
                <link
                    rel="canonical"
                    href="https://fptshoptq.com/internet-fpt"
                />
                <link
                    rel="alternate"
                    media="handheld"
                    href="https://fptshoptq.com/internet-fpt"
                />
                <meta
                    property="og:image"
                    content="https://hcmfpt.vn/vnt_upload/service/01_2020/thumbs/500_1.jpg"
                />
            </Helmet>

            <img
                src={bannerService}
                alt="internet-fpt"
                className="lg:h-auto h-[180px] object-cover"
            />

            <Product img={imgProduct} products={product} title={title} />
            <Register classPlus="bg-white px-0" />
            <DescInternet tv={tv} business={business} />
        </div>
    );
}

export default Internet;
