import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import icons from "../ultis/icons";
import path from "../ultis/path";

function DropForm({ toggleForm }) {
    const { BsHeadset, GrClose, AiOutlineLoading3Quarters } = icons;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const form = useRef();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        setIsLoading(true);
        emailjs
            .sendForm(
                "service_thnnwrx",
                "template_yw2bfl7",
                form.current,
                "uRbsevw3iRyxpsOhh"
            )
            .then(
                () => {
                    window.dataLayer.push({ event: "sendForm" });
                    navigate(`/${path.REGiSTER_SUCCESS}`);
                    toggleForm();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div
            className="fixed inset-0 bg-dark-alpha-50 z-[9999] flex justify-center items-center"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    toggleForm();
                }
            }}
        >
            <div className=":g:w-[50%] w-[70%] bg-white px-6 py-5 rounded-lg relative">
                <form
                    className="flex flex-col mt-4"
                    ref={form}
                    onSubmit={(e) => {
                        handleSubmitForm(e);
                    }}
                >
                    <button
                        className="absolute right-3 text-lg top-3 "
                        onClick={toggleForm}
                    >
                        <GrClose />
                    </button>
                    <button className="h-[60px] w-[60px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 rounded-full bg-gradient-to-r flex items-center justify-center text-4xl text-white from-green-400 to-[#38E54D]">
                        <BsHeadset />
                    </button>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="lg:col-span-1 col-span-2">
                            <label
                                htmlFor="nameF"
                                className="uppercase text lg:pb-2 pb-1 text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Họ và tên
                            </label>
                            <input
                                required
                                placeholder="Nguyễn Văn A"
                                type="text"
                                id="nameF"
                                name="user_name"
                                className="bg-[#DDE6ED] py-2 px-4 rounded-lg outline-none w-full"
                            />
                        </div>
                        <div className="lg:col-span-1 col-span-2">
                            <label
                                htmlFor="phoneF"
                                className="uppercase text lg:pb-2 pb-1 text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Số Điện Thoại
                            </label>
                            <input
                                required
                                placeholder="0375956703"
                                type="phone"
                                id="phoneF"
                                name="phone"
                                className="bg-[#DDE6ED] py-2 px-4 rounded-lg outline-none w-full"
                            />
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="addressF"
                                className="uppercase text lg:pb-2 pb-1 text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Địa Chỉ
                            </label>
                            <input
                                required
                                placeholder="Tên Đường, Quận/Huyện, Thành Phố"
                                type="text"
                                id="addressF"
                                name="address"
                                className="bg-[#DDE6ED] py-2 px-4 rounded-lg outline-none w-full"
                            />
                        </div>
                    </div>
                    {isLoading ? (
                        <button
                            type="submit"
                            className="bg-gradient-to-r mt-4 flex items-center justify-center gap-x-2 from-green-400 to-[#38E54D] py-2 font-semibold rounded-lg text-white"
                        >
                            <span>Đang gửi...</span>
                            <AiOutlineLoading3Quarters className="text-lg animate-spin" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-gradient-to-r mt-4 from-green-400 to-[#38E54D] py-2 font-semibold rounded-lg text-white hover:from-green-200 hover:text-green-600 border-2 border-transparent  hover:border-2 hover:border-green-600 hover:to-green-200"
                        >
                            Tư vấn miễn phí
                        </button>
                    )}

                    <span className="text-center text-sm text-[#767676] ">
                        Hỗ trợ lắp ngay trong ngày!
                    </span>
                </form>
            </div>
        </div>
    );
}

export default DropForm;
