import React from 'react'
import { useState } from 'react'
import Ballerina from './Ballerina.png'
import TechXplore from './TechXplore.png'
import BuildYourOwnAI from './BuildYourOwnAI.png'  
import IntroToFinOps from './IntroToFinOps.png'
import FullStackCrashCourse from './FullStackCrashCourse.png' 
import GIT from './GIT.png'
import JapuraXtreme from './JapuraXtreme.png'
import TensorForge from './TensorForge.png'
import IntroToFlutter from './IntroToFlutter.png'
import GoogleAIBadge from './GoogleAIBadge.png'
import GoogleAI from './GoogleAI.png'
import Pearlhack from './Pearlhack.png'
import ReactJS from './ReactJS.png'
import IntroToJS from './IntroToJS.png'
import JavaProgramming from './JavaProgramming.png'
import MoraXtreme from './MoraXtreme.png'
import CCNA from './CCNA.png'

export default function Certificates() {

    const [selectedCert, setSelectedCert] = useState(null)
    const [showAll, setShowAll] = useState(false);

    const certificates = [
        {
            id: 17,
            title: "CCNA Introduction to Networks",
            issuer: "Cisco Networking Academy",
            year: "2021",
            image: CCNA,
            credentialURL: ""
        },
        {
            id: 16,
            title: "MoraXtreme 9.0",
            issuer: "IEEE Student Branch University of Moratuwa",
            year: "2024",
            image: MoraXtreme,
            credentialURL: ""
        },
        {
            id: 15,
            title: "Java Programming",
            issuer: "Great Learning",
            year: "2024",
            image: JavaProgramming,
            credentialURL: "https://www.mygreatlearning.com/certificate/UEKAEWFP"
        },
        {
            id: 14,
            title: "Introduction to JavaScript",
            issuer: "Great Learning",
            year: "2024",
            image: IntroToJS,
            credentialURL: "https://www.mygreatlearning.com/certificate/FYWNKEFC"
        },
        {
            id: 13,
            title: "ReactJS for Beginners",
            issuer: "Simplilearn",
            year: "2025",
            image: ReactJS,
            credentialURL: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODY4MTg1M185MDQ3NTgzMTc1MzQxNjAzNDkxOC5wbmciLCJ1c2VybmFtZSI6Ik0uIEthdmVlc2hhIFNhbmRlZXBhbmkifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4215%2FReactJS-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1524456434674918906&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd84P8fbNMyrJCEuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAM8L3zhBAAAA"
        }, 
        {
            id: 12,
            title: "PearlHack V3.0",
            issuer: "IEEE WIE Student Branch Affinity Group of SUSL",
            year: "2025",
            image: Pearlhack,
            credentialURL: ""
        },
        {
            id: 11,
            title: "Google AI Essentials",
            issuer: "Google",
            year: "2025",
            image: GoogleAI,
            credentialURL: "https://www.coursera.org/account/accomplishments/specialization/JFTH2LSVNG87?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
        },
        {
            id: 10,
            title: "Google AI Essentials",
            issuer: "Google",
            year: "2025",
            image: GoogleAIBadge,
            credentialURL: "https://www.credly.com/badges/e59b883f-9fa9-45f8-944b-170896fc0943/public_url"
        },
        {
            id: 9,
            title: "Introduction to Flutter Course",
            issuer: "Simplilearn",
            year: "2025",
            image: IntroToFlutter,
            credentialURL: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMjk3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTA0ODM1N185MDQ3NTgzMTc1ODgyNDg1Njg0OS5wbmciLCJ1c2VybmFtZSI6Ik0uIEthdmVlc2hhIFNhbmRlZXBhbmkifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4951%2FIntroduction-to-Flutter-Course-Online%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1524456434674918906&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVLypKjHAKM8mLCE%2ByrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAJproMZBAAAA"
        }, 
        {
            id: 8,
            title: "TensorForge '25",
            issuer: "IEEE Computer Society of KDU",
            year: "2025",
            image: TensorForge,
            credentialURL: ""
        },
        {
            id: 7,
            title: "J'puraXtreme 2.0",
            issuer: "IEEE CS Student Branch Chapter - University of Sri Jayewardenepura",
            year: "2025",
            image: JapuraXtreme,
            credentialURL: "https://drive.google.com/file/d/16WNx5-A-NLQ-R-NsvOzlZZb5Q8xKY10y/view"
        }, 
        {
            id: 6,
            title: "GIT, GitLab, GitHub Fundamentals for Software Developers",
            issuer: "Udemy",
            year: "2025",
            image: GIT,
            credentialURL: "https://www.udemy.com/certificate/UC-3db3e5f1-b10e-45ae-b9f0-0f8b86cce501/"
        },
        {
            id: 5,
            title: "CSS, Bootstrap, JavaScript, PHP Full Stack Crash Course",
            issuer: "Udemy",
            year: "2025",
            image: FullStackCrashCourse,
            credentialURL: "https://www.udemy.com/certificate/UC-ae244c7e-cc51-463a-9b60-84a4b42a49c0/"
        },
        {
            id: 4,
            title: "Introduction to FinOps",
            issuer: "FinOps Foundation",
            year: "2025",
            image: IntroToFinOps,
            credentialURL: "https://verify.skilljar.com/c/ckm9n9wjkff9"
        }, 
        {
            id: 3,
            title: "Build Your Own AI Chatbot with Azure AI Foundry",
            issuer: "Microsoft Student Ambassadors",
            year: "2025",
            image: BuildYourOwnAI,
            credentialURL: ""
        },
        {
            id: 2,
            title: "TechXplore Edition 2.0",
            issuer: "Association of Computing Students - University of Sri Jayewardenepura",
            year: "2026",
            image: TechXplore,
            credentialURL: ""
        },
        {
            id: 1,
            title: "Innovate With Ballerina 2025",
            issuer: "IEEE Student Branch University of Moratuwa",
            year: "2026",
            image: Ballerina,
            credentialURL: "https://certificates.ballerina.io/IWB25P-na7fhi287N"
        },       
    ];

    const sortedCertificates = [...certificates].reverse();

    const visibleCertificates = showAll
    ? sortedCertificates
    : sortedCertificates.slice(0, 6);

  return (
    <div id='certificates' className='mt-[2.7rem] lg:mt-[4rem]'>
        <div className='flex justify-center'><span className='text-[#00e6e6] text-[2rem] lg:text-[3rem] font-inter animate-pulse drop-shadow-[0_0_20px_#00ffff] drop-shadow-[0_0_40px_#00ffff] mb-16'>Certificates</span></div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {visibleCertificates.map((cert) =>(
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer bg-black rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 text-white border-2 border-white"
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

        {certificates.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border-2 border-[#00e6e6] text-white rounded-xl hover:scale-105 transition duration-300"
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      )}

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
            <img src={selectedCert.image} alt={selectedCert.title} className="w-auto h-64 rounded-lg mb-6"/>
            <h3 className="text-2xl font-bold mb-2"> {selectedCert.title} </h3>
            <p className="text-gray-600 mb-1"> Issued by: {selectedCert.issuer} </p>
            <p className="text-gray-500 mb-6"> Year: {selectedCert.year} </p>

            {selectedCert.credentialURL && (
              <a
                href={selectedCert.credentialURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#00e6e6] text-[#00e6e6] px-5 py-2 rounded-xl font-medium hover:bg-indigo-700 transition duration-300"
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
