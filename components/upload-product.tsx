'use client';
import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function ProductForm() {
    const [image, setImage] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [ram, setRam] = useState('');
    const [ssd, setSsd] = useState('');
    const [processator, setProcessor] = useState('');
    const [model, setModel] = useState('');
    const [stock, setStock] = useState('');
    const [keyboard, setKeyBoard] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');

        const formData = new FormData();
        formData.append('image', image as File);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('ram', ram);
        formData.append('ssd', ssd);
        formData.append('model', model);
        formData.append('processator', processator);
        formData.append('keyboard', keyboard);
        formData.append('stock', stock);

        try {
            const response = await axios.post('https://localhost:5000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setSuccess('Producto subido exitosamente.');
                // Reiniciar formulario después del éxito
                setTitle('');
                setModel('');
                setKeyBoard('');
                setDescription('');
                setPrice('');
                setRam('');
                setSsd('');
                setProcessor('');
                setStock('');
                setImage(null);
            }
        } catch (error) {
            console.error('Error al subir el producto:', error);
            setError('Error al subir el producto. Por favor, intente nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-40 flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Subir Producto</h2>

                {success && <p className="text-green-500 mb-4">{success}</p>}
                {error && <p className="text-red-500 mb-4">{error}</p>}

                <div className="mb-6">
                    <label htmlFor="image" className="block text-gray-700 mb-2">Imagen</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-gray-600 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {image && (
                        <div className="mt-4">
                            <Image
                                src={URL.createObjectURL(image)}
                                alt="Previsualización de la imagen"
                                width={100}
                                height={100}
                                className="object-cover rounded-md"
                            />
                        </div>
                    )}
                </div>

                <div className="mb-6">
                    <label htmlFor="title" className="block text-gray-700 mb-2">Título</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 mb-2">Descripción</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="price" className="block text-gray-700 mb-2">Precio</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="ram" className="block text-gray-700 mb-2">Memoria RAM</label>
                    <input
                        type="text"
                        id="ram"
                        value={ram}
                        onChange={(e) => setRam(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="ssd" className="block text-gray-700 mb-2">SSD</label>
                    <input
                        type="text"
                        id="ssd"
                        value={ssd}
                        onChange={(e) => setSsd(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="processor" className="block text-gray-700 mb-2">Procesador</label>
                    <input
                        type="text"
                        id="processor"
                        value={processator}
                        onChange={(e) => setProcessor(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="model" className="block text-gray-700 mb-2">Modelo</label>
                    <input
                        type="text"
                        id="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="keyboard" className="block text-gray-700 mb-2">Key Board</label>
                    <input
                        type="text"
                        id="keyboard"
                        value={keyboard}
                        onChange={(e) => setKeyBoard(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="stock" className="block text-gray-700 mb-2">Stock</label>
                    <input
                        type="number"
                        id="stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-md text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'}`}
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Subir Producto'}
                </button>
            </form>
        </div>
    );
}
