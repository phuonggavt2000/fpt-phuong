import Slider from "react-slick";
import PrevBanner from "../components/PrevBanner";
import NextBanner from "../components/NextBanner";
import SliderPlaybox from "../components/SliderPlaybox";
import { cardPlayboxs } from "../ultis/static";

function DescPackage({ items = cardPlayboxs }) {
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
        <div className="-mx-2">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div className="px-2" key={index}>
                        <SliderPlaybox
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default DescPackage;
