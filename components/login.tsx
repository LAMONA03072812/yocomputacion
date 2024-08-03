'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Importa useRouter de next/navigation

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter(); // Inicializa useRouter

    useEffect(() => {
        // Verifica si ya existe un token en localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // Redirige a la página de carga de productos si el token existe
            router.push('/upload-product');
        }
    }, [router]); // Dependencia en router para que se ejecute cuando esté disponible

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://yocomputacion.vercel.app/api/login', { email, password });
            const { token } = response.data;

            // Guardar el token en localStorage
            localStorage.setItem('token', token);

            // Redirigir al usuario a la página de carga de productos
            router.push('/upload-product');
        } catch (error) {
            setError('Ocurrió un error al iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Iniciar Sesión</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 mb-2">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-600 mb-2">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'bg-blue-300' : 'bg-blue-500'} text-white`}
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>
        </div>
    );
}
