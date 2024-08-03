import React from 'react';
import Image from "next/image";
import Dell1 from '@/public/images/dell1.png'
import LenovoTablet from '@/public/images/lenovotablet.jpg'
import MonitorNaceb from '@/public/images/monitornaceb.jpg'
import ProductList  from "@/components/products";

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
                    <ProductList/>

                </div>
            </div>
        </section>
    )
}