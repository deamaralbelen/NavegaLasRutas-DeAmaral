import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div>
            <FaShoppingCart size={24} />
            <span>3</span>
        </div>
    );
};

export default CartWidget;