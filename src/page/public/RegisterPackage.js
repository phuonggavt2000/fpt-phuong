import img from "../../asset/imgs/img";

function RegisterPackage() {
    return (
        <div className="w-[736px] mx-auto  bg-white my-6 rounded-xl px-4 py-6 shadow-card">
            <div>
                <span>Gói Internet - Sky</span>
                <span>
                    Tốc độ download không giới hạn phụ thuộc vào thiết bị lên
                    tới 1 Gbps.
                </span>
                <span>Tốc độ Upload 150 Mbps.</span>
                <span>Phù hợp với hộ gia đình lớn.</span>
            </div>
            <div className="w-full  flex justify-center items-center relative">
                <img src={img.leftLine} alt="fpt play" />
                <div className="h-full bg-white w-[5px] absolute left-[-2px] "></div>
                <img
                    src={img.line}
                    alt="fpt play"
                    className="w-[102%] bg-white h-full px-2 "
                />
                <div className="h-full bg-white w-[5px] absolute right-[-2px] "></div>
                <img src={img.rightLine} alt="fpt play" />
            </div>
        </div>
    );
}

export default RegisterPackage;
