import React from 'react'

const HeroImage = () => {
    return (
        <>
            <div className="bg-top bg-cover top-0 absolute w-full h-85vh" style={{ backgroundImage: "url('/img/Home-01-1-1920x850.jpg')" }}></div>
            <div className='flex justify-center items-start w-full h-75vh pt-40 py-8'>
                <h1 className='uppercase text-center text-5xl md:text-6xl text-primary-white opacity-90'>La musica es <span className='text-primary-blue font-semibold'>vida</span></h1>
            </div>
        </>

    )
}

export default HeroImage