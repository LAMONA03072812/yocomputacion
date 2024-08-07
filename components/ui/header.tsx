'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './logo';

export default function Header() {
    const [top, setTop] = useState<boolean>(true);
    const [token, setToken] = useState<string | null>(null);

    // Detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    useEffect(() => {
        // Check if token exists in localStorage
        const savedToken = localStorage.getItem('token');
        setToken(savedToken);
    }, []);

    const handleLogout = () => {
        // Remove token and redirect to home
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Site branding */}
                    <div className="shrink-0">
                        <Logo />
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        <ul className="flex grow justify-end flex-wrap items-center mt-3">
                            {token ? (
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn-sm text-white bg-red-500 hover:bg-red-600 ml-3"
                                    >
                                        <span>Salir</span>
                                    </button>
                                </li>
                            ) : (
                                <li>
                                    <Link href="/login" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                                        <span>Administrador</span>
                                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                        </svg>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}
