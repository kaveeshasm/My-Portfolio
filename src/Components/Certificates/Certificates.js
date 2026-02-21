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

        {selectedCert && (
            <div
            className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4'
            onClick={() => setSelectedCert(null)}
            >
                <div
                    className="bg-white rounded-2xl max-w-2xl w-full p-6 relative animate-fadeIn"
                    onClick={(e) => e.stopPropagation()}
                >

            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="w-full rounded-lg mb-6"/>
            <h3 className="text-2xl font-bold mb-2"> {selectedCert.title} </h3>
            <p className="text-gray-600 mb-1"> Issued by: {selectedCert.issuer} </p>
            <p className="text-gray-500 mb-6"> Year: {selectedCert.year} </p>

            {selectedCert.credentialUrl && (
              <a
                href={selectedCert.credentialURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-indigo-700 transition duration-300"
              >
                View Credential
              </a>
            )}
           </div>
         </div>
        )}
    </div>
  )
}
