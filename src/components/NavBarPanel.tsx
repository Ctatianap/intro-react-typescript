import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store/store";

const NavBarPanel = () => {
  const cartProducts = useSelector((state: RootState) => state.cart)
  return (
    <div>
      <ul className="flex border-b justify-between">
        <li className="-mb-px mr-1">
          <Link
            to="/"
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            Productos
          </Link>
        </li>
        <li className="-mb-px mr-1">
          <Link
            to="/user-form"
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            Información complementaria
          </Link>
        </li>
        <li className="mr-1">
          <Link
            to="/cart"
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            Carrito {cartProducts.length}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBarPanel;
