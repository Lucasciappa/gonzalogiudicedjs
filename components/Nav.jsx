import React from "react";
import Image from "next/image";
import WhatsappLogoSticky from "@/components/WhatsappLogoSticky";

const Nav = () => {
    return (
        <header className="bg-transparent w-full h-full mx-auto max-w-8xl">
            <div className="flex justify-center items-center h-full w-full p-4">
                <div style={{ position: 'relative', width: '300px', height: '120px', zIndex: '200' }}>
                    <Image
                        src="/img/Logo-Horizontal_blanco-247.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>

            <WhatsappLogoSticky />
        </header>
    );


};

export default Nav;
