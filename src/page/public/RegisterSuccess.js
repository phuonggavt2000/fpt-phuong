import { useEffect, useRef } from "react";
import icons from "../../ultis/icons";
import { Helmet } from "react-helmet";

function RegisterSuccess() {
    const { BsFillCheckCircleFill } = icons;
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
        });
    }, []);
    return (
        <div
            className="bg-[#f3f3f3] flex px-4 lg:pt-[70px] pt-[50px]"
            ref={ref}
        >
            <Helmet>
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, user-scalable=yes"
                />
                <title>Bạn đã gửi thông tin thành công</title>
                <meta
                    name="keywords"
                    CONTENT="internet fpt, mạng fpt, mạng internet fpt, lắp đặt internet fpt, lắp mạng fpt, lắp internet fpt, đăng ký internet fpt, đăng ký mạng fpt, lắp đặt fpt, đăng ký fpt, đăng ký lắp đặt fpt"
                />
                <meta
                    name="description"
                    CONTENT="FPT Telecom HCM khuyến mãi đăng ký lắp đặt internet FPT cực sốc tháng 04/2023 ✓ Miễn phí lắp mạng ✓ Miễn phí WiFi 5G cực mạnh ✓ Tặng cước từ 2-4 tháng, lắp đặt siêu tốc trong 24h"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="FPT Telecom HCM" />
                <link
                    rel="canonical"
                    href="https://fptshoptq.com/dang-ky-thanh-cong"
                />
                <link
                    rel="alternate"
                    media="handheld"
                    href="https://fptshoptq.com/dang-ky-thanh-cong"
                />
                <meta
                    property="og:image"
                    content="https://hcmfpt.vn/vnt_upload/service/01_2020/thumbs/500_1.jpg"
                />
            </Helmet>
            <div className="w-[736px] mx-auto bg-white my-6 rounded-xl text-center py-6 flex flex-col justify-center items-center text-[#38E54D] text-2xl gap-y-4 lg:px-20 px-10">
                <BsFillCheckCircleFill className="text-5xl" />
                <span className="font-bold uppercase text-3xl   ">
                    Gửi thành công
                </span>
                <span className="text-secondary text-xl font-medium">
                    Thông tin của bạn đã được gửi đến cho bộ phận CSKH, trong
                    vòng 5 - 10 phút sẽ có nhân viên liên lạc để hỗ trợ cho bạn
                </span>
            </div>
        </div>
    );
}

export default RegisterSuccess;
