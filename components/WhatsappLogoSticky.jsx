import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const WhatsappLogoSticky = () => {
    const router = useRouter();
    return (
        <div className="fixed right-0 mb-4 mr-4 bottom-0 z-50">
            <div>
                <a
                    title="Mandanos un mensaje"
                    href={`https://api.whatsapp.com/send/?phone=34644318219&text=Hola+GransLiving%21%0D%0A%0D%0AQuiero+saber+mas+informaci%C3%B3n+sobre+-+https%3A%2F%2Fgransliving.com${decodeURIComponent(
                        router.asPath
                    )}&app_absent=0`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-14 h-14 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 relative"
                >
                    <Image
                        src="/logo/whatsapp-logo.png"
                        alt="logo WhatsApp" width={100} height={100} 
                        objectFit="cover"
                    />
                </a>
            </div>
        </div>
    );
};

export default WhatsappLogoSticky;
