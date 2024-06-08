'use client'

import {useState, useEffect} from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'

export default function Header() {

    const [top, setTop] = useState<boolean>(true)

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Site branding */}
                    <div className="shrink-0">
                        <Logo/>
                    </div>
                    <nav className="hidden md:flex md:grow">
                        <ul className="lex grow justify-center flex-wrap items-center">
                            <li className="inline-block">
                                <Dropdown title="Hardware">
                                    <ul>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Cables</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Componentes</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Computadoras</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Conectividad</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Electrónica</a>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </li>
                            <li className="inline-block">
                                <Dropdown title="Software">
                                    <ul>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">ContPaq</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Windows</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">KeyA
                                            ERP</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Kaspersky</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Adobe</a>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </li>
                            <li className="inline-block">
                                <Dropdown title="Soluciones">
                                    <ul>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Redes
                                            y Audio - Video</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Cabladeo
                                            Estructurado</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Control
                                            de Accesos</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Video
                                            Vigilancia</a>
                                        </li>
                                        <li><a href=""
                                               className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3  ">Comunicaciones</a>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </li>
                        </ul>
                    </nav>

                    {/* Desktop navigation */}

                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center mt-3">
                            <li>
                                <Link href="/signin"
                                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Iniciar Sesion</Link>
                            </li>
                            <li>
                                <Link href="/signup"
                                      className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                                    <span>Registrarme</span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                                         viewBox="0 0 12 12"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                            fillRule="nonzero"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                    </nav>

                </div>
            </div>
        </header>
    )
}
