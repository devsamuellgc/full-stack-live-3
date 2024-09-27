import { useEffect, useState } from "react"
import { formatPrice } from "../utils/formatPrice"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function ProductsList() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    async function fetchProducts() {
        const response = await axios.get("https://fakestoreapi.com/products?limit=5")
        setProducts(response.data)
    }

    const handleRowClick = (id) => {
        navigate(`/produto/${id}`)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            {products && (
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Imagem
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Título
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Categoria
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Preço
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr
                                key={product?.id}
                                onClick={() => handleRowClick(product?.id)}
                                className="cursor-pointer"
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img className="w-36 h-48" src={product?.image} alt={product?.title} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm">{product?.title}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm">{product?.category}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm font-semibold">
                                        {product?.price && formatPrice(product?.price)}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
