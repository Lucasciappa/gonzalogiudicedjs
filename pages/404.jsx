import React from 'react'
import Image from "next/image";

const PageNotFound = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="flex flex-col items-center">
                    <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 mb-8" aria-label="logo">
                        <div style={{ position: 'relative', width: '280px', height: '120px', zIndex: '200' }}>
                            <Image
                                src="/img/Logo-Horizontal_turquesa-188.png"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>

                    {/* <p class="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">404</p> */}
                    <h1 class="text-gray-800 text-2xl md:text-3xl font-bold text-center mb-2">Página no encontrada</h1>

                    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mb-12">La página que estas buscando, no se encuentra</p>

                    <a href="#" class="inline-block bg-primary-blue hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-800 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Volver al Inicio</a>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound