import path from "./path";
import icons from "./icons";
import imgProduct from "../asset/products";
import img from "../asset/imgs/img";
import { IoBusinessOutline } from "react-icons/io5";
import imgCam from "../asset/camera";
import imgs from "../asset/icloud";

const {
    FaPen,
    BsMessenger,
    FaFacebookF,
    FaYoutube,
    AiFillInstagram,
    SiZalo,
    TbPlayerTrackNext,
    FaRegPaperPlane,
    RiMoneyDollarCircleLine,
    AiOutlineShareAlt,
    ImVideoCamera,
    BiHeadphone,
    FiClock,
    MdOutlineSystemUpdateAlt,
    TfiWrite,
    RiGlobalFill,
    AiFillAndroid,
    FaInbox,
    IoDesktop,
    AiFillApple,
    AiOutlineHome,
    AiOutlineWifi,
    BsPencil,
    AiOutlinePlaySquare,
    BsInboxes,
    BsFillTelephoneFill,
} = icons;

export const headers = [
    {
        title: "Trang chủ",
        path: path.HOME,
        icon: <AiOutlineHome />,
    },
    {
        title: "Internet FPT",
        path: path.INTERNET,
        icon: <AiOutlineWifi />,
    },
    {
        title: "Internet + Truyền hình FPT",
        path: path.INTERNET_TV,
        icon: <BsInboxes />,
    },
    {
        title: "Internet doanh nghiệp FPT",
        path: path.INTERNET_BUSINESS,
        icon: <IoBusinessOutline />,
    },
    {
        title: "Camera FPT",
        path: path.CAMERA,
        icon: <AiOutlinePlaySquare />,
    },
    {
        title: "Đăng ký Online",
        path: path.REGISTER,
        icon: <BsPencil />,
    },
];

export const underBanners = [
    {
        title: "Đăng ký Online",
        icon: <FaPen className="text-white" />,
        bg: "bg-[#1169b0]",
        hover: "hover:text-[#1169b0]",
        to: "dang-ky-fpt",
    },
    {
        title: "0375 956 703",
        icon: <BsFillTelephoneFill className="text-white" />,
        bg: "bg-[#ff701d]",
        hover: "hover:text-[#ff701d]",
        to: "tel:0375956703",
    },
    {
        title: "Liên lạc",
        icon: <BsMessenger className="text-white" />,
        bg: "bg-[#00d574]",
        hover: "hover:text-[#00d574]",
        to: "https://www.messenger.com/t/108503272047244",
    },
];

export const socialFooter = [
    {
        icons: <FaFacebookF />,
        to: "https://www.facebook.com/FptTelecom/",
    },
    {
        icons: <FaYoutube />,
        to: "https://www.youtube.com/user/likefpt",
    },
    {
        icons: <SiZalo />,
        to: "https://zalo.me/0933336706",
    },
    {
        icons: <AiFillInstagram />,
        to: "https://www.instagram.com/fpt.telecom/",
    },
];

export const footerIntroduce = [
    {
        title: "Giới thiệu chung",
        to: "#",
    },
    {
        title: "Liên kết - Thành viên",
        to: "#",
    },
    {
        title: "Khách hàng - Đối tác",
        to: "#",
    },
    {
        title: "Quan hệ cổ đông ",
        to: "#",
    },
    {
        title: "Tập đoàn FPT",
        to: "#",
    },
];

export const fptClient = [
    {
        title: "Hướng dẫn sử dụng dịch vụ",
        to: "#",
    },
    {
        title: "Giới thiệu bạn bè",
        to: "#",
    },
    {
        title: "Thanh toán Online",
        to: "#",
    },
    {
        title: "Góp ý khách hàng",
        to: "#",
    },
    {
        title: "Lịch phát sóng",
        to: "#",
    },
];

export const notClient = [
    {
        title: "Đăng kí Online",
        to: "dang-ky-fpt",
    },
    {
        title: "Dịch vụ Internet",
        to: "internet-fpt",
    },
    {
        title: "Dịch vụ Camera",
        to: "#",
    },
    {
        title: "Dịch vụ Internet và truyền hình",
        to: "internet-truyen-hinh-fpt",
    },
    {
        title: "Tin tức",
        to: "#",
    },
];

export const internetProducts = [
    {
        type: "internet",
        title: "Giga",
        price: "180.000",
        img: imgProduct.giga,
        desc: "Tốc độ Download 150 Mbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "Trang bị Modem 2 băng tần Wifi 5G và 2.4Ghz",
        giftPlus: "Miễn phí lắp đặt",
        isRecommend: true,
    },
    {
        type: "internet",
        title: "Sky",
        price: "230.000",
        img: imgProduct.sky,
        desc: "Tốc độ download không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với hộ gia đình lớn",
        gift: "Trang bị Modem 2 băng tần Wifi 5G và 2.4Ghz",
        giftPlus: "Miễn phí lắp đặt",
        isRecommend: true,
    },
    {
        type: "internet",
        title: "Meta",
        price: "330.000",
        img: imgProduct.meta,
        desc: "Tốc độ download & upload không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "Trang bị Modem 2 băng tần Wifi 5G và 2.4Ghz",
        giftPlus: "Miễn phí lắp đặt",
    },
    {
        type: "internet",
        title: "Wifi 6 - Sky",
        price: "320.000",
        img: imgProduct.lux500,
        desc: "Tốc độ Download 1000 Mbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "Tích hợp gói hỗ trợ Game thủ - Ultrafast",
        giftPlus: "Miễn phí lắp đặt",
    },
    {
        type: "internet",
        title: "Wifi 6 - Meta",
        price: "390.000",
        img: imgProduct.lux800,
        desc: "Tốc độ download & upload không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "Tích hợp gói hỗ trợ Game thủ - Ultrafast",
        giftPlus: "Miễn phí lắp đặt",
    },
];

export const comboProducts = [
    {
        type: "combo",
        title: "Giga",
        price: "200.000",
        img: imgProduct.giga,
        desc: "Tốc độ Download 150 Mbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
        isRecommend: true,
    },
    {
        type: "combo",
        title: "Sky",
        price: "250.000",
        img: imgProduct.sky,
        desc: "Tốc độ download không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "Tốc độ Upload 150 Mbps",
        obj: "Phù hợp với hộ gia đình lớn",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
        isRecommend: true,
    },
    {
        type: "combo",
        title: "Meta",
        price: "340.000",
        img: imgProduct.meta,
        desc: "Tốc độ download & upload không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
        subDesc: "",
        obj: "Phù hợp với cá nhân/ Hộ gia đình",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
    },
    {
        type: "combo",
        title: "Wifi 6 - Sky",
        price: "520.000",
        img: imgProduct.lux500,
        desc: "Tốc độ Download 1000 Mbps",
        subDesc: "Tốc độ Upload 500 Mbps",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
    },
    {
        type: "combo",
        title: "Wifi 6 - Meta",
        price: "580.000",
        img: imgProduct.lux800,
        desc: "Tốc độ Download 800 Mbps",
        subDesc: "Tốc độ Upload 800 Mbps",
        obj: "Sử dụng modem Wi-Fi 6",
        gift: "200+ kênh truyền hình đặc sắc",
        giftPlus: "Trang bị Modem 2 băng tần & Box thế hệ mới",
    },
];

export const internetBusinesss = [
    {
        type: "business",
        title: "Super 250",
        price: "495.500",
        img: imgProduct.super250,
        desc: "Tốc độ Download 250 Mbps",
        subDesc: "Tốc độ Upload 250 Mbps",
        obj: "Phù hợp với cá nhân, doanh nghiệp nhỏ",
        objPlus: "(< 50 thiết bị)",
        gift: "Trang bị Modem cân bằng tải Cty và thiết bị phát Wifi",
        giftPlus: "Miễn phí lắp đặt",
        isRecommend: true,
    },
    {
        type: "business",
        title: "Super 400",
        price: "1.272.700",
        img: imgProduct.super400,
        desc: "Tốc độ Download lên đến 400 Mbps",
        subDesc: "Tốc độ Upload lên đến 400 Mbps",
        obj: "Phù hợp với cá nhân, doanh nghiệp nhỏ",
        objPlus: "(< 70 thiết bị)",
        gift: "Trang bị Modem cân bằng tải Cty và thiết bị phát Wifi",
        giftPlus: "Miễn phí lắp đặt",
        isRecommend: true,
    },
    {
        type: "business",
        title: "Super 500",
        price: "2.272.700",
        img: imgProduct.lux500,
        desc: "Tốc độ Download lên đến 500 Mbps",
        subDesc: "Tốc độ Upload lên đến 500 Mbps",
        obj: "Phù hợp với cá nhân, doanh nghiệp nhỏ",
        objPlus: "(< 100 thiết bị)",
        gift: "Trang bị Modem cân bằng tải Cty và thiết bị phát Wifi",
        giftPlus: "Miễn phí lắp đặt",
    },
    {
        type: "business",
        title: "Lux 500",
        price: "727.000",
        img: imgProduct.lux500,
        desc: "Tốc độ Download lên đến 500 Mbps",
        subDesc: "Tốc độ Upload lên đến 500 Mbps",
        obj: "Phù hợp với cá nhân, doanh nghiệp vừa",
        objPlus: "(< 125 thiết bị)",
        gift: "Trang bị Modem Wi-Fi 6 và thiết bị mở rộng sóng WI-FI 6",
        giftPlus: "Miễn phí lắp đặt",
    },
    {
        type: "business",
        title: "Lux 800",
        price: "909.000",
        img: imgProduct.lux800,
        desc: "Tốc độ Download lên đến 800 Mbps",
        subDesc: "Tốc độ Upload lên đến 800 Mbps",
        obj: "Phù hợp với cá nhân, doanh nghiệp vừa",
        objPlus: "(< 160 thiết bị)",
        gift: "Trang bị Modem Wi-Fi 6 và thiết bị mở rộng sóng WI-FI 6",
        giftPlus: "Miễn phí lắp đặt",
    },
];

export const productCameras = [
    {
        imgs: [imgCam.iq2s1, imgCam.iq2s2, imgCam.iq2s3, imgCam.iq2s4],
        titleDecs: [
            "Loại camera",
            "Độ phân giải",
            "Cảm biến",
            "Tầm nhìn xa hồng ngoại",
            "Lưu trữ dữ liệu",
            "Cân bằng ánh sáng",
            "Độ nhạy sáng",
            "Giảm nhiễm ánh sáng yếu",
            "Điện áp đầu vào",
            "Ống kính",
            "Chuẩn chống nước",
            "Kết nối",
            "Chức năng",
            "Bảo hành",
        ],
        desc: [
            "Ngoài trời",
            "Full HD - 1080p",
            '1/2.8" Sony',
            "15m - 20m",
            "Lưu trữ điện đám mây (cloud)",
            "WDR",
            "0.028Lux @ (F2.0, AGC ON), 0 Lux with IR",
            "2D NR  3D NR",
            "12V - 1A",
            "4.0 mm @F2.0 - góc nhìn 106°",
            "IP66",
            "LAN",
            "Camera an ninh, cảnh báo AI, không đàm thoại",
            "24 tháng, hỗ trợ CSKH 24/7",
        ],
    },
    {
        imgs: [imgCam.iq21, imgCam.iq22, imgCam.iq23, imgCam.iq24],
        titleDecs: [
            "Loại camera",
            "Độ phân giải",
            "Cảm biến",
            "Tầm nhìn xa hồng ngoại",
            "Lưu trữ dữ liệu",
            "Cân bằng ánh sáng",
            "Độ nhạy sáng",
            "Giảm nhiễm ánh sáng yếu",
            "Điện áp đầu vào",
            "Ống kính",
            "Kết nối",
            "Chức năng",
            "Bảo hành",
            "Hệ điều hành",
        ],
        desc: [
            "Trong nhà",
            "Full HD - 1080p",
            '1/2.8" Sony',
            "8m - 10m",
            "Lưu trữ điện đám mây (cloud)",
            "Cân bằng ánh sáng trắng WDR",
            "0.028Lux @ (F2.0, AGC ON), 0 Lux with IR",
            "2D NR  3D NR",
            "12V - 1A",
            "3.6 mm @F2.0 - góc nhìn 102 độ",
            "LAN",
            "Camera an ninh, cảnh báo AI, không đàm thoại",
            "24 tháng, hỗ trợ CSKH 24/7",
            "Android, iOS, PC",
        ],
    },
    {
        imgs: [imgCam.iq3, imgCam.iq31, imgCam.iq32, imgCam.iq33],
        titleDecs: [
            "Loại camera",
            "Độ phân giải",
            "Cảm biến",
            "Tầm nhìn xa hồng ngoại",
            "Lưu trữ dữ liệu",
            "Cân bằng ánh sáng",
            "Độ nhạy sáng",
            "Giảm nhiễm ánh sáng yếu",
            "Điện áp đầu vào",
            "Ống kính",
            "Chuẩn chống nước",
            "Kết nối",
            "Chức năng",
            "Bảo hành",
        ],
        desc: [
            "Ngoài trời",
            "Full HD - 1080p",
            '1/2.8" Sony',
            "15m - 20m",
            "Lưu trữ điện đám mây (cloud)",
            "WDR",
            "0.028Lux @ (F2.0, AGC ON), 0 Lux with IR",
            "2D NR  3D NR",
            "12V - 1A",
            "4.0 mm @F2.0 - góc nhìn 94°",
            "IP66",
            "LAN",
            "Camera an ninh, cảnh báo AI, đàm thoại 2 chiều",
            "24 tháng, hỗ trợ CSKH 24/7",
        ],
    },
    {
        imgs: [
            imgCam.camPlay,
            imgCam.camPlay2,
            imgCam.camPlay3,
            imgCam.camPlay4,
        ],
        titleDecs: [
            "Loại camera",
            "Độ phân giải",
            "Cảm biến",
            "Tầm nhìn xa hồng ngoại",
            "Lưu trữ dữ liệu",
            "Cân bằng ánh sáng",
            "Độ nhạy sáng",
            "Giảm nhiễm ánh sáng yếu",
            "Điện áp đầu vào",
            "Ống kính",
            "Góc quay",
            "Kết nối",
            "Chức năng",
            "Bảo hành",
        ],
        desc: [
            "Ngoài trời",
            "Full HD - 1080p",
            '1/2.8" Sony',
            "15m - 20m",
            "Lưu trữ điện đám mây (cloud)",
            "WDR",
            "0.028Lux @ (F2.0, AGC ON), 0 Lux with IR",
            "2D NR  3D NR",
            "12V - 1A",
            "4.0 mm @F2.0 - góc nhìn 107⁰            ",
            "Pan (Xoay ngang 0-355⁰)",
            "LAN",
            "Camera an ninh, cảnh báo AI, đàm thoại 2 chiều",
            "24 tháng, hỗ trợ CSKH 24/7",
        ],
    },
];

export const featureCams = [
    {
        banner: imgCam.fn1,
        icon: imgCam.icon1,
        desc: "Hình ảnh sắc nét Full HD 1080p",
    },
    {
        banner: imgCam.fn2,
        icon: imgCam.icon2,
        desc: "Hiển thị màu trong điều kiện thiếu sáng",
    },
    {
        banner: imgCam.fn3,
        icon: imgCam.icon3,
        desc: "Phát hiện chuyển động thông minh",
    },
    {
        banner: imgCam.fn4,
        icon: imgCam.icon4,
        desc: "Quản lý và giám sát từ xa trên App",
    },
    {
        banner: imgCam.fn5,
        icon: imgCam.icon5,
        desc: "Kháng nước, kháng bụi chuẩn IP66",
    },
    {
        banner: imgCam.fn6,
        icon: imgCam.icon6,
        desc: "Chăm sóc khách hàng 24/7",
    },
    {
        banner: imgCam.fn7,
        icon: imgCam.icon7,
        desc: "Hỗ trợ kỹ thuật tận tình",
    },
    {
        banner: imgCam.fn8,
        icon: imgCam.icon8,
        desc: "Tiết kiệm chi phí",
    },
];

export const features = [
    {
        icon: <TbPlayerTrackNext />,
        desc: "Tốc độ download & upload không giới hạn phụ thuộc vào thiết bị lên tới 1 Gbps",
    },
    {
        icon: <FaRegPaperPlane />,
        desc: "Trang bị thiết bị hai băng tần mới nhất đạt chuẩn Wifi 5 hoặc Wifi 6",
    },
    {
        icon: <RiMoneyDollarCircleLine />,
        desc: "Quản lý cước rõ ràng",
    },
    {
        icon: <FiClock />,
        desc: "Thời gian lắp đặt dịch vụ nhanh chóng, trung bình 12h - 36h",
    },
    {
        icon: <AiOutlineShareAlt />,
        desc: "Thiết bị an toàn (không sợ sét đánh lan truyền trên đường dây)",
    },
    {
        icon: <ImVideoCamera />,
        desc: "Đáp ứng hiệu quả cho các ứng dụng Công nghệ thông tin hiện đại như: Hosting Server riêng, VPN (mạng riêng ảo), Truyền dữ liệu, Game Online, IPTV (truyền hình tương tác), VoD (xem phim theo yêu cầu), Video Conference (hội nghị truyền hình), IP Camera,…",
    },
    {
        icon: <BiHeadphone />,
        desc: "Chăm sóc và hỗ trợ giải đáp khách hàng 24/7",
    },
    {
        icon: <TfiWrite />,
        desc: "Đăng ký dễ dàng, tiện lợi qua tổng đài, trên website trực tuyến, ứng dụng Hi FPT, tổng đài hoặc tại hệ thống các văn phòng giao dịch của FPT Telecom trải dài trên toàn quốc",
    },
    {
        icon: <MdOutlineSystemUpdateAlt />,
        desc: "Dễ dàng nâng cấp băng thông mà không cần kéo cáp mới",
    },
];

export const registerNow = [
    {
        img: img.register,
        title: "Đăng ký ngay",
        to: "/dang-ky-fpt",
        color: "text-[#035690]",
    },
    {
        img: img.hotline,
        title: "Hotline 0375 956 703",
        to: "tel:0375956703",
        color: "text-[#fd6436]",
    },
    {
        img: img.deal,
        title: "Điểm giao dịch",
        to: "#",
        color: "text-[#62b046]",
    },
];

export const packageFptPlayv1 = [
    {
        title: "Gói Vip",
        data: {
            imgLeft: img.vipLeft,
            imgRight: img.vipRight,
            desc: [
                "Tận hưởng kho phim chiếu rạp trong nước & quốc tế",
                "Hơn 200 kênh truyền hình độc quyền trên HBO GO",
                "Trực tiếp và độc quyền SeriA, FA Cup",
                "Đăng nhập đồng thời 5 thiết bị",
            ],
            price: "120.000",
        },
    },
    {
        title: "Gói Max",
        data: {
            imgLeft: img.maxLeft,
            imgRight: img.maxRight,
            desc: [
                "Hơn 200 kênh truyền hình trong nước và quốc tế",
                "Trực tiếp & độc quyền bóng đá: UEFA Champions League, UEFA Europa League, AFC Cup....",
                "Kho Phim Điện Ảnh và (ưu tiên xem trước) Phim bộ phát song song",
                "Đăng nhập và xem cùng lúc 3 thiết bị",
            ],
            price: "88.000",
        },
    },
];
export const packageFptPlayv2 = [
    {
        title: "Gói Sport",
        data: {
            imgLeft: img.sportLeft,
            imgRight: img.sportRight,
            desc: [
                "Gồm các kênh: K+SPORT 1; K+SPORT 2; K+CINE; K+LIFE",
                "Xem trực tiếp Ngoại Hạng Anh (EPL) và các giải thể thao hàng đầu thế giới trên 4 kênh K+",
                "Đăng nhập tối đa 3 thiết bị (chỉ xem cùng lúc tối đa 1 thiết bị)",
            ],
            price: "60.750",
        },
    },
    {
        title: "Gói K+",
        data: {
            imgLeft: img.kLeft,
            imgRight: img.kRight,
            desc: [
                "Gồm các kênh: K+SPORT 1; K+SPORT 2; K+CINE; K+LIFE",
                "Xem trực tiếp Ngoại Hạng Anh (EPL) và các giải thể thao hàng đầu thế giới trên 4 kênh K+",
                "Đăng nhập tối đa 3 thiết bị (chỉ xem cùng lúc tối đa 1 thiết bị)",
            ],
            price: "175.000",
        },
    },
];

export const cardPlayboxs = [
    {
        img: img.playboxHbo,
        title: "Kho phim HBO Go",
        desc: "Thư viện phim không lồ cùng các nội dung độc quyền",
    },
    {
        img: img.playboxTvShow,
        title: "200 kênh truyền hình",
        desc: "Bao gồm các nhóm kênh truyền hình Việt Nam, Quốc tế và kênh địa phương",
    },
    {
        img: img.playboxSport,
        title: "Độc quyền giải đấu",
        desc: "Trực tiếp và độc quyền các giải đấu: Champions League, Europa League, World Cup 2022 Qualifiers, AFC U23 Asian Cup,...",
    },
    {
        img: img.playboxAds,
        title: "Không quảng cáo",
        desc: "Trải nghiệm tốt hơn khi xem VOD không có quảng cáo",
    },
    {
        img: img.playboxCinema,
        title: "Kho phim đặc sắc",
        desc: "Kho phim điện ảnh đặc sắc gồm nhiều phim lẻ và phim chiếu rạp",
    },
    {
        img: img.playboxFilm,
        title: "Phim bộ chất lượng",
        desc: "Phim bộ phát song song và VIP ưu tiên xem trước hàng ngàn phim bộ bom tấn",
    },
];

// camera
export const cardCameras = [
    {
        img: imgCam.card1,
        title: "Quản lý giám sát từ xa",
        desc: "Bạn có thể theo dõi những hình ảnh được ghi từ Camera một cách dễ dàng thông qua các ứng dụng trên điện thoại",
    },
    {
        img: imgCam.card2,
        title: "Hình ảnh Full HD",
        desc: "Hình ảnh sắc nét Full HD 1080p cùng góc nhìn rộng giúp quan sát dễ dàng hơn",
    },
    {
        img: imgCam.card3,
        title: "Khả năng chống nước tối ưu IP66",
        desc: "FPT Camera có khả năng chống nước kháng bụi tối ưu đại tiêu chuẩn IP66",
    },
    {
        img: imgCam.card4,
        title: "An tâm mọi lúc mọi nơi",
        desc: "Dịch vụ lưu trữ Cloud của FPT Camera cho phép người dùng truy cập để xem trực tiếp, lưu trữ, xem lại dữ liệu chất lượng cao",
    },
    {
        img: imgCam.card5,
        title: "Hiển thị trong điều kiện ánh sáng yếu",
        desc: "Dịch vụ lưu trữ Cloud của FPT Camera cho phép người dùng truy cập để xem trực tiếp, lưu trữ, xem lại dữ liệu chất lượng cao",
    },
    {
        img: imgCam.card6,
        title: "Khả năng phát hiện chuyển động",
        desc: "Sự thông minh của FPT Camera mang đến khả năng tiết kiệm năng lượng cũng như bảo vệ an toàn tốt hơn cho nhà bạn.",
    },
];

export const suportCameras = [
    { icon: imgCam.sp1, title: "Bảo hành 1 đổi 1 trong vòng 24 tháng" },
    { icon: imgCam.sp2, title: "Bảo trì trọn đời" },
    { icon: imgCam.sp3, title: "Hỗ trợ khách hàng 24/7" },
];
export const infoCams = [
    {
        title: "Nếu dùng mạng không phải của FPT có lắp được FPT Camera không?",
        subTitle:
            "Có. Hiện FPT Camera có thể lắp được trên cả đường truyền không phải của FPT",
    },
    {
        title: "FPT Camera khi mất kết nối Internet có ghi hình không?",
        subTitle:
            "Có (Ghi hình vào bộ nhớ đệm có khả năng lưu trữ tối thiểu 24h)",
    },
    {
        title: "FPT Camera có gì khác biệt so với các camera ngoài thị trường?",
        subTitle: `- FPT Camera sử dụng lưu trữ trên điện toán đám mây (Cloud) do đội ngũ FPT Telecom xây dựng, tính bảo mật, an toàn cao. \n - So với hệ thống camera thông thường hoạt động cồng kềnh, nhiều dây, khách hàng có thể tiết kiệm được chi phí lắp đặt lưu trữ trên ổ cứng, đầu ghi hình. \n - Dịch vụ chăm sóc khách hàng và hỗ trợ kỹ thuật luôn đồng hành cùng khách hàng trong suốt quá trình sử dụng.`,
    },
    {
        title: "FPT Camera bảo hành trong bao lâu?",
        subTitle:
            "Thời gian bảo hành đối với sản phẩm FPT Camera là 24 tháng kể từ ngày FPT bàn giao Camera cho khách hàng (ngày bàn giao được ghi nhận tại biên bản nghiệm thu, thông báo hoàn tất triển khai, hoặc tại website www.fpt.vn). Mỗi Camera sẽ có số seri, số MAC để ghi nhận các thông tin thời hạn bảo hành của thiết bị.",
    },
    {
        title: "Thời hạn sử dụng Cloud của Camera có bị ràng buộc với thời hạn sử dụng của Internet không?",
        subTitle:
            "Không, vì HĐ camera và HĐ Internet là khác nhau, nên 2 thời hạn là độc lập với nhau.",
    },
    {
        title: "Nếu Camera đang sử dụng mà hết hạn Cloud, khách hàng còn sử dụng Camera không?",
        subTitle: "Không. Khách hàng cần đăng ký Cloud để sử dụng dịch vụ",
    },
    {
        title: "Nếu Camera đang sử dụng mà hết hạn đường truyền Internet mà hạn Cloud vẫn còn thì còn được xem Camera không?",
        subTitle:
            "Không, vì muốn dữ liệu đẩy lên Cloud thì phải có đường truyền Internet.",
    },
    {
        title: "Dữ liệu của FPT - Cloud Camera được lưu trữ tại đâu?",
        subTitle: "Được lưu trữ tại server đặt ở Việt Nam",
    },
    {
        title: "Khách hàng có thể chỉ sử dụng 1 trong 2 sản phẩm: hoặc chỉ Camera hoặc chỉ Cloud của FPT Camera có được không?",
        subTitle:
            "Không, FPT Camera bao gồm cả 2 sản phẩm dịch vụ này mới quan sát được.",
    },
    {
        title: "Nếu mất điện thì dữ liệu xem lại có bị mất không?",
        subTitle:
            "Không. Mất điện chỉ khiến camera ngừng hoạt động, không ghi được dữ liệu trong khoảng thời gian mất điện. Những dữ liệu đã được ghi trước đó không bị ảnh hưởng.",
    },
];

export const iclouds = [
    {
        img: imgs.icloud1,
        descs: [
            "• Chất lượng Full HD",
            "• 1 ngày lưu trữ toàn bộ",
            "• Phát hiện người nhờ AI",
            "• Miễn phí bảo trì",
            "• Miễn phí bảo trì",
        ],
        price: "22.000đ",
        border: "border-[#31b5ba]",
        bg: "bg-[#31b5ba]",
    },
    {
        img: imgs.icloud2,
        descs: [
            "• Chất lượng Full HD",
            "• 3 ngày lưu trữ toàn bộ",
            "• Phát hiện người nhờ AI",
            "• Miễn phí bảo trì",
            "• Miễn phí bảo trì",
        ],
        price: "44.000đ",
        recommend: imgs.recommend,
        border: "border-[#fb6e50]",
        bg: "bg-[#fb6e50]",
    },
    {
        img: imgs.icloud3,
        descs: [
            "• Chất lượng Full HD",
            "• 7 ngày lưu trữ toàn bộ",
            "• Phát hiện người nhờ AI",
            "• Miễn phí bảo trì",
            "• Miễn phí bảo trì",
        ],
        price: "99.000đ",
        border: "border-[#0861bd]",
        bg: "bg-[#0861bd]",
    },
];

export const feedbackUser = [
    {
        name: "Thanh Tùng",
        country: "Hà Nội",
        desc: "Nhà tôi có con nhỏ, lại ở chung cư và đi làm cả ngày nên rất muốn biết tình hình 2 mẹ con ở nhà thế nào. Vì thế tôi quyết định mua FPT Camera về lắp đặt trong nhà. Giờ đây khi đi làm tôi cảm thấy rất an tâm khi có thể kiểm tra, quan sát tình hình ở nhà 1 cách dễ dàng thông qua ứng dụng trên điện thoại",
        img: imgCam.avt1,
    },
    {
        name: "Nguyễn Hạnh",
        country: "Hải Phòng",
        desc: "Camera chất lượng tốt, hàng Việt Nam, giá cả phù hợp, hỗ trợ lắp đặt tận nhà, lại còn được bảo hành 24 tháng nên tôi rất hài lòng.",
        img: imgCam.avt2,
    },
    {
        name: "Lương Thị Hường",
        country: "Hải Dương",
        desc: "Mình mua FPT Camera về dùng dù đã được gần 8 tháng nhưng chất lượng vẫn vô cùng tốt nhé. Hình ảnh nét rõ và lưu trữ đám mây tiện lợi, xem được mọi lúc mọi nơi.",
        img: imgCam.avt3,
    },
    {
        name: "Duy Chinh",
        country: "Thái Bình",
        desc: "Do tính chất công việc thường xuyên đi công tác xa nhà, bố mẹ lại lớn tuổi lại hay đau ốm nên tôi rất lo. Nhưng từ khi được giới thiệu và lắp đặt FPT Camera, du đi xa tôi vẫn có thể quan sát tình hình bố mẹ ở nhà ra sao và cảm thấy yên tâm hơn rất nhiều.",
        img: imgCam.avt4,
    },
    {
        name: "Lương Phương",
        country: "Xuân Mai",
        desc: "Những hàng xóm của tôi đã sử dụng FPT Camera và họ rất hài lòng với chất lượng sản phẩm, đồng thời cũng khuyên tôi nên lắp đặt để bảo vệ ngôi nhà của mình. Tôi tìm hiểu thấy đây là camera thương hiệu Việt Nam, giá cả khá phải chăng, các thông số cũng ok nên đã đặt mua luôn 3 cái về lắp đặt tại nhà. Giờ đây chỉ với 1 chiếc điện thoại tôi có thể quan sát mọi ngóc ngách trong và ngoài nhà. Yên tâm hơn rất nhiều.",
        img: imgCam.avt5,
    },
];

export const featurePlayboxs = [
    {
        icon: <RiGlobalFill />,
        title: "Web",
    },
    {
        icon: <IoDesktop />,
        title: "TV",
    },
    {
        icon: <FaInbox />,
        title: "TV Box",
    },
    {
        icon: <AiFillAndroid />,
        title: "Android",
    },
    {
        icon: <AiFillApple />,
        title: "IOS",
    },
];
