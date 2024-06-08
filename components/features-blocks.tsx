import Image from "next/image";
import Dell1 from '@/public/images/dell1.png'
import LenovoTablet from '@/public/images/lenovotablet.jpg'
import MonitorNaceb from '@/public/images/monitornaceb.jpg'

export default function FeaturesBlocks() {
    return (
        <section className="relative ">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
                        <h2 className="h2 mb-4">Conoce nuestros productos</h2>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none -mt-5 ">

                        {/* 1st item */}
                        <div className="relative flex flex-col items-center p-6 bg-white shadow">
                            <Image className="relative -mb-10" src={Dell1} width={333} alt="Dell Inspiron 3535"/>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 z-20">Laptop DELL
                                Insipiron 3535</h4>

                            <p className="text-gray-600 text-center mt-5">Lleva la experiencia de regreso a clases al
                                maximo con tu nueva laptop.</p>
                            <table
                                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                                <tbody>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-800">
                                    <td className="px-6 py-4">
                                        Modelo: <b>Inspiron 3535</b> | RAM: <b>16GB</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4">
                                        Procesador: <b>AMD Ryzen 5 3500U</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4">
                                        SSD: <b>1TB</b> | Teclado: <b>Iluminado RGB</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4 ">
                                        <b>$7,613.00 MXN</b>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a className="btn text-white bg-gray-400 hover:bg-blue-700 shadow mt-5" href="#0">Comprar
                                Ahora</a>

                        </div>

                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white shadow-xl">
                            <Image className="relative -mb-10" src={LenovoTablet} width={333} alt="Tablet Lenovo M10 Unisoc T610"/>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 z-20">Tablet Lenovo M10 Unisoc T610</h4>

                            <p className="text-gray-600 text-center mt-5">Diseña tus ideas con estilo con la mejor tecnologia tactil.</p>
                            <table
                                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                                <tbody>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-800">
                                    <td className="px-6 py-4">
                                        Modelo: <b>M10 Unisoc T610</b> | RAM: <b>64GB</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4">
                                        Procesador: <b>SnapDragon Ultra 7</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4">
                                        SSD: <b>1TB</b> | Tactil IPS: <b>Gorilla Glass</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4 ">
                                        <b>$3,500.00 MXN</b>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mt-5" href="#0">Comprar
                                Ahora</a>

                        </div>

                        {/* 3rd item */}
                        <div className="relative flex flex-col items-center p-6 bg-white shadow">
                            <Image className="relative -mt-10" src={MonitorNaceb} width={333} alt="Monitor Asus ROG"/>
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 z-20">Monitor Asus ROG</h4>

                            <p className="text-gray-600 text-center mt-5">Vive a todo color la expericia gamer con la mejor calidad ASUS ROG.</p>
                            <table
                                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                                <tbody>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-800">
                                    <td className="px-6 py-4">
                                        Modelo: <b>Asus XG27AQ-W</b> | <b>27 Pulgadas</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4">
                                        <b>Fast IPS QHD 170Hz</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4">
                                        <b>QHD Wide 1440p</b>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-300 even:bg-gray-50 even:dark:bg-gray-200">
                                    <td className="px-6 py-4 ">
                                        <b>$14,415.00 MXN</b>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <a className="btn text-white bg-gray-400 hover:bg-blue-700 shadow mt-5" href="#0">Comprar
                                Ahora</a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}