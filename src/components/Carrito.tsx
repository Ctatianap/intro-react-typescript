import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/slices/cartSlice";

const Carrito = () => {
  const products = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteToCard = (id: number) => {
    console.log("productoi eliminado", id);
    dispatch(removeProduct(id))
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-48 object-contain"
              src={product.image}
              alt={product.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <p className="text-gray-700 text-base">{product.price}</p>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-4 rounded"
                onClick={() => handleDeleteToCard(product.id)}
              >
                Eliminar del carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrito;


