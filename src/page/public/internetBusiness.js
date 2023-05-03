import img from "../../asset/imgs/img";
import Internet from "./Internet";
import { internetBusinesss } from "../../ultis/static";

function internetBusiness() {
    return (
        <div>
            <Internet
                imgProduct={img.internetBusiness}
                title="Cáp quang doanh nghiệp"
                product={internetBusinesss}
                business
            />
        </div>
    );
}

export default internetBusiness;
