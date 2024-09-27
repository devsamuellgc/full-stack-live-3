import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  async function fetchProduct() {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  }

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row gap-6 border p-4 w-full max-w-4xl">
        <img className="w-48 h-64" src={product?.image} alt={product?.title} />
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg font-semibold">{product?.title}</p>
            <p className="text-lg font-semibold">
              {product?.price && formatPrice(product?.price)}
            </p>
          </div>
          <p className="text-sm">Categoria: {product?.category}</p>
          <p className="text-sm font-light">{product?.description}</p>
          <button 
            className="mt-4 p-2 bg-blue-500 text-white rounded" 
            onClick={() => navigate(-1)}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
