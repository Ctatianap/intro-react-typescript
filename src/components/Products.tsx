import { useEffect, useState } from "react";
import { getProducts } from "../firebase/helper/requestProducts";
import { Product } from "./helper/interfaces";
import { addProduct } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleAddToCard = (product: Product) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getProducts();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setProducts(result);
      } catch (error) {
        console.error("Error get Products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {/* <button onClick={() => uploadProducts()}>Agregar productos bd</button> */}
      {loading ? (
        <div> cargando ....</div>
      ) : (
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
                  onClick={() => handleAddToCard(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
