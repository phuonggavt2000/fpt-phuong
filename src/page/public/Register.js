import { useRef, useState } from "react";
import icons from "../../ultis/icons";
import { useNavigate } from "react-router-dom";
import path from "../../ultis/path";
import emailjs from "@emailjs/browser";

function Register({ classPlus = "bg-white", classContainer = "pt-[50px]" }) {
    const { MdInfoOutline, AiOutlineLoading3Quarters } = icons;
    const navigate = useNavigate();
    const form = useRef();
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [packageFpt, setPackageFpt] = useState("Internet FPT");
    console.log("packageFpt:", packageFpt);

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
        <div className={` flex px-4 lg:pt-[70px]  ${classContainer} flex-col`}>
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
                                placeholder="31 Lê Văn Quới, Q.Bình Tân, HCM"
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
                                placeholder="19006600"
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
                                <option>Camera</option>
                            </select>
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
