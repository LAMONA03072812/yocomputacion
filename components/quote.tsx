"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";

const Quote: React.FC = () => {
    const [product, setProduct] = useState<any>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); // Estado para manejar el indicador de carga

    useEffect(() => {
        // Función para obtener los parámetros de la URL
        const getParams = () => {
            const params = new URLSearchParams(window.location.search);
            const productData = {
                id: params.get('id'),
                title: params.get('title'),
                image: params.get('image'),
                description: params.get('description'),
                model: params.get('model'),
                ssd: params.get('ssd'),
                processator: params.get('processator'),
                keyborad: params.get('keyborad'),
                ram: params.get('ram'),
                price: params.get('price'),
            };
            setProduct(productData);
        };

        getParams();
    }, []);

    const handlePurchase = async () => {
        setLoading(true); // Activar el indicador de carga
        try {
            await axios.post('http://localhost:5000/api/complete-purchase', product);

            // Mostrar el modal
            setShowModal(true);

            // Redirigir al usuario después de cerrar el modal
            setTimeout(() => {
                window.location.href = '/';
            }, 2000); // Redirige después de 2 segundos
        } catch (error) {
            console.error('Error al procesar la compra:', error);
        } finally {
            setLoading(false); // Desactivar el indicador de carga
        }
    };

    if (!product) {
        return <p>Cargando cotización...</p>;
    }

    return (
        <div className="p-6 mt-40 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Cotización del Producto</h2>
            <div className="flex flex-col md:flex-row">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 object-cover rounded-md"
                />
                <div className="md:ml-6 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <table className="w-full text-sm text-left text-gray-500">
                        <tbody>
                        <tr>
                            <td className="px-4 py-2 font-bold">Modelo:</td>
                            <td className="px-4 py-2">{product.model}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">RAM:</td>
                            <td className="px-4 py-2">{product.ram}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">Procesador:</td>
                            <td className="px-4 py-2">{product.processator}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">SSD:</td>
                            <td className="px-4 py-2">{product.ssd}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">Teclado:</td>
                            <td className="px-4 py-2">{product.keyborad}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 font-bold">Precio:</td>
                            <td className="px-4 py-2">
                                {new Intl.NumberFormat('es-MX', {
                                    style: 'currency',
                                    currency: 'MXN',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }).format(Number(product.price))}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={handlePurchase}
                        className={`mt-6 py-2 px-4 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                        disabled={loading}
                    >
                        {loading ? (
                            <svg className="w-5 h-5 mr-3 inline-block animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                Procesando tu compra <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="62.83 62.83" />
                            </svg>
                        ) : (
                            'Finalizar Compra'
                        )}
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto">
                        <h3 className="text-lg font-semibold mb-4">Compra Procesada</h3>
                        <p className="text-gray-700 mb-4">Tu compra ha sido procesada con éxito. Un correo de confirmación ha sido enviado a tu dirección.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quote;
