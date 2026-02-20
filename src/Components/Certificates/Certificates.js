import React from 'react'
import { useState } from 'react'

export default function Certificates() {

    const [selectedCert, setSelectedCert] = useState(null)

    const certificates = [
        {
            id: 1,
            title: "Innovate With Ballerina 2025",
            issuer: "IEEE Student Branch University of Moratuwa",
            year: "2026",
            image: "/Ballerina.png",
            credentialURL: "https://certificates.ballerina.io/IWB25P-na7fhi287N"
        },
        {
            id: 2,
            title: "TechXplore Edition 2.0",
            issuer: "Association of Computing Students - University of Sri Jayewardenepura",
            year: "2026",
            image: "/TechXplore.png",
            credentialURL: ""
        },
    ];

  return (
    <div id='certificates' className='mt-[2.7rem] lg:mt-[4rem]'>
        <div className='flex justify-center'><span className='text-[#00e6e6] text-[2rem] lg:text-[3rem] font-inter animate-pulse drop-shadow-[0_0_20px_#00ffff] drop-shadow-[0_0_40px_#00ffff]'>Certificates</span></div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {certificates.map((cert) =>(
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
                >
                    <img src={cert.image} alt={cert.title} className='w-full h-56 object-cover' />
                    <div className='p-5'>
                        <h3 className='text-lg font-semibold'>
                            {cert.title}
                        </h3>
                    </div>
                </div>
            ))}
        </div>


    </div>
  )
}
