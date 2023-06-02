import { useState } from "react";
import icons from "../ultis/icons";

function InfoCam({ title, subTitle }) {
    const [isActive, setIsActive] = useState(false);
    const { GrPrevious } = icons;
    return (
        <div className="flex flex-col py-4 border-t gap-y-2">
            <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                <span className="font-semibold text-base">{title}</span>
                <button
                    className={`ml-auto transition-all ${
                        isActive ? "-rotate-90 " : ""
                    }`}
                >
                    <GrPrevious />
                </button>
            </div>
            {isActive && (
                <span className="text-secondary text-sm new-line transition-all">
                    {subTitle}
                </span>
            )}
        </div>
    );
}

export default InfoCam;
