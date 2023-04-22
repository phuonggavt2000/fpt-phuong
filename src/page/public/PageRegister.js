import { useEffect, useRef } from "react";
import Register from "./Register";

function PageRegister() {
    const ref = useRef();
    useEffect(() => {
        ref.current.scrollIntoView({
            behavior: "smooth",
            inline: "start",
        });
    }, []);
    return (
        <div ref={ref}>
            <Register />
        </div>
    );
}

export default PageRegister;
