"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";

// Definir tipo para los productos
interface Product {
    id: number;
    title: string;
    image: string;
    description: string;
    model: string;
    ssd: string;
    processator: string;
    keyborad: string;
    ram: string;
    price: number;
}

// Formateador de moneda para pesos mexicanos
const currencyFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (err) {
                setError('Error al obtener productos');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleBuyClick = (product: Product) => {
        const queryString = new URLSearchParams({
            id: product.id.toString(),
            title: product.title,
            image: product.image,
            description: product.description,
            model: product.model,
            ssd: product.ssd,
            processator: product.processator,
            keyborad: product.keyborad,
            ram: product.ram,
            price: product.price.toString(),
        }).toString();

        window.location.href = `/quote?${queryString}`;
    };

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none -mt-5">
            {products.map(product => (
                <div key={product.id} className="relative flex flex-col items-center p-6 bg-white shadow">
                    <Image
                        className="relative -mb-10"
                        src={product.image}
                        width={333}
                        height={100}
                        alt={product.title}
                    />
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 z-20">{product.title}</h4>

                    <p className="text-gray-600 text-center mt-5">{product.description}</p>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                        <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-800">
                            <td className="px-6 py-4">
                                Modelo: <b>{product.model}</b> | RAM: <b>{product.ram}</b>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                            <td className="px-6 py-4">
                                Procesador: <b>{product.processator}</b>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                            <td className="px-6 py-4">
                                SSD: <b>{product.ssd}</b> | Teclado: <b>{product.keyborad}</b>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                            <td className="px-6 py-4">
                                <b>{currencyFormatter.format(product.price)} MXN</b>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={() => handleBuyClick(product)}
                        className="btn text-white bg-gray-400 hover:bg-blue-700 shadow mt-5"
                    >
                        Comprar Ahora
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
