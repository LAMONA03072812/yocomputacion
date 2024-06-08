import Image from "next/image";
import slideOne from '@/public/images/usb.jpg'
export default function Hero() {
    return (
        <section className="relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 -mb-20">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 ">

                    {/* Section header */}
                    <div className="text-center shadow-2xl">
                        <Image className="shadow-2xl" src={slideOne} alt="Adata USB" />
                    </div>

                </div>

            </div>
        </section>
    )
}