import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoFooter from "@/components/ui/logoFooter";
const handleSubmit = async ({e, email}: { e: any, email: any }) => {
    e.preventDefault();
    toast.info('Estamos enviando el email...');
    const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    if (response.ok) {
        toast.success('Email enviado exitosamente');
    } else {
        toast.error('Error al enviar el email');
    }
};

export default function Footer() {
    const [email, setEmail] = useState('');

    return (
        <footer>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Top area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-3">
                        <div className="mb-2">
                            <LogoFooter/>
                        </div>
                        <div className="text-sm text-gray-600">
                            <a href="#0"
                               className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Aviso
                                de privacidad</a>
                        </div>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-3">

                    </div>
                    <div className="sm:col-span-12 lg:col-span-3">

                    </div>
                    {/* Other blocks... */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
                        <h6 className="text-gray-800 font-medium mb-2">Contáctanos</h6>
                        <p className="text-sm text-gray-600 mb-4">Uno de nuestros asesores te contactará.</p>
                        <form onSubmit={(e) => handleSubmit({e: e, email: email})}>
                            <div className="flex flex-wrap mb-4">
                                <div className="w-full">
                                    <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                                    <div className="relative flex items-center max-w-xs">
                                        <input id="newsletter" type="email"
                                               className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                                               placeholder="Tu email" value={email}
                                               onChange={(e) => setEmail(e.target.value)} required/>
                                        <button type="submit" className="absolute inset-0 left-auto"
                                                aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                            aria-hidden="true"></span>
                                            <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                                                 viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                    fillRule="nonzero"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Bottom area */}
                <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
                    {/* Social as */}
                    {/* Copyrights note */}
                    <div className="text-sm text-gray-600 mr-4">&copy; yocomputacion.com. Todos los derechos reservados.
                    </div>
                </div>
            </div>
            <ToastContainer />
        </footer>
    )
}
