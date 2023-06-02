import { useRef, useState } from "react";
import icons from "../../ultis/icons";
import { useNavigate } from "react-router-dom";
import path from "../../ultis/path";
import emailjs from "@emailjs/browser";

function Register({
    classPlus = "bg-white",
    classContainer = "",
    options = "Internet FPT",
    camera,
}) {
    const { MdInfoOutline, AiOutlineLoading3Quarters } = icons;
    const navigate = useNavigate();
    const form = useRef();
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [packageFpt, setPackageFpt] = useState(options);

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
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div
            className={` flex lg:pt-[70px]  flex-col  ${
                camera ? "px-0" : classContainer ? "px-4" : "px-4 pt-[50px]"
            }`}
        >
            {/* <RegisterPackage /> */}
            <div
                className={`lg:w-[736px] ${classPlus} w-full mx-auto my-6 rounded-xl px-4 py-6 shadow-card`}
            >
                <div className="flex items-center font-bold gap-x-2">
                    <MdInfoOutline className="text-primary text-2xl" />
                    <span>Đăng ký Online</span>
                </div>
                <form
                    className="mt-4"
                    ref={form}
                    onSubmit={(e) => {
                        handleSubmitForm(e);
                    }}
                >
                    <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                        <div className="col-span-2 ">
                            <label
                                htmlFor="name"
                                className="uppercase text text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Họ và Tên
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <input
                                required
                                placeholder="Nguyễn Văn A"
                                type="text"
                                id="name"
                                value={fullName}
                                name="user_name"
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }}
                                className="border-b mt-1 font-semibold w-full pb-2 focus:border-black outline-none text-secondary"
                            />
                        </div>
                        <div className="col-span-2 ">
                            <label
                                htmlFor="address"
                                className="uppercase text text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Địa chỉ
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <input
                                required
                                placeholder="Tên Đường, Quận/Huyện, Thành Phố"
                                type="text"
                                id="address"
                                value={address}
                                name="address"
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                                className="border-b mt-1 font-semibold w-full pb-2 focus:border-black outline-none text-secondary"
                            />
                        </div>
                        <div className="col-span-1 ">
                            <label
                                htmlFor="phone"
                                className="uppercase text text-[#767676] text text-xs font-semibold flex items-center"
                            >
                                Số điện thoại
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <input
                                required
                                placeholder="0375956703"
                                type="number"
                                id="phone"
                                value={phone}
                                name="phone"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                className="border-b mt-1 font-semibold w-full pb-2 focus:border-black outline-none text-secondary"
                            />
                        </div>
                        <div className="col-span-1 flex flex-col">
                            <label
                                htmlFor="country"
                                className="uppercase h-[50%] text-[#767676] text-xs font-semibold flex items-center"
                            >
                                Gói dịch vụ FPT
                                <span className="text-red-500 text-lg ml-2 align-middle	flex items-center">
                                    *
                                </span>
                            </label>
                            <select
                                id="country"
                                name="package"
                                className="w-full h-full border-b outline-none"
                                value={packageFpt}
                                onChange={(e) => {
                                    setPackageFpt(e.target.value);
                                }}
                            >
                                <option>Internet FPT</option>
                                <option>Intertnet + Truyền Hình FPT</option>
                                <option>Intertnet doanh nghiệp</option>
                                <option>Camera trong nhà</option>
                                <option>Camera ngoài trời</option>
                            </select>
                        </div>
                        <div className="flex mt-2 flex-col col-span-2">
                            <p className="uppercase text-[#767676] text-xs font-semibold">
                                Quà tặng
                            </p>
                            <div className="flex mt-2 w-full items-center">
                                <div className="w-1/2 flex items-center">
                                    <input
                                        type="radio"
                                        id="hat"
                                        name="gift"
                                        value="nón bảo hiểm"
                                        className="mr-2"
                                        required
                                    />
                                    <label htmlFor="hat">Mũ bảo hiểm</label>
                                </div>

                                <div className="w-1/2 flex items-center">
                                    <input
                                        type="radio"
                                        id="bottle"
                                        name="gift"
                                        value="bình giữ nhiệt"
                                        className="mr-2"
                                    />
                                    <label htmlFor="bottle">
                                        Bình giữ nhiệt
                                    </label>
                                </div>
                            </div>
                        </div>
                        {isLoading ? (
                            <button
                                type="submit"
                                className="col-span-2 mt-2 flex items-center justify-center gap-4 pointer-events-none hover:bg-[#ff894033] border border-primary hover:text-primary bg-primary py-2 rounded-md text-white hover:  font-semibold  text-base"
                            >
                                <AiOutlineLoading3Quarters className="text-lg animate-spin" />
                                <span>Đang gửi...</span>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="col-span-2 mt-2 hover:bg-[#ff894033] border border-primary hover:text-primary bg-primary py-2 rounded-md text-white hover:  font-semibold  text-base"
                            >
                                Tiếp tục
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
