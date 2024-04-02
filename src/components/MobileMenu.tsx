import FloatMenu from "./FloatMenu";
import ModalMenu from "./ModalMenu";

export default function MobileMenu() {

    return (
        <div className="sm:hidden">
            <FloatMenu />
            <ModalMenu />
        </div>
    )
}