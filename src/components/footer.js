'use client'

import {
  Facebook,
  Instagram,
  Linkedin,
  X,
  Tiktok,
} from 'lucide-react'
import Image from 'next/image'

import myLogo from 'C:\\Users\\Sahil Wadhwa\\Desktop\\Sakhii\\sakhii\\public\\logo_pink.png'

const footerLinks = [
  {
    title: 'Sakhii APP',
    links: [
      'Sakhii for Tracking Your Period',
      'Sakhii for Getting Pregnant',
      'Sakhii for Pregnancy',
      'Pass It On Project',
      'Help center',
      'Manage subscription',
      'Sakhii promo codes',
    ],
  },
  {
    title: 'COMPANY',
    links: [
      'About us',
      'Press Center',
      'Careers',
      'Affiliates',
      'Contact us',
      'Science & research',
      'Medical affairs',
    ],
  },
  {
    title: 'CONTENT',
    links: [
      'Health Library',
      'Editorial process and standards',
      'Advertising principles',
      'Tools',
    ],
  },
  {
    title: 'LEGAL',
    links: [
      'Privacy policy',
      'Privacy portal',
      'Sakhii privacy FAQs',
      'Terms of use',
      'Cookie policy',
      'Using Sakhii\'s IP',
      'Accessibility statement',
      'Security at Sakhii',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7E8E8] px-6 py-10 text-sm text-black ">
        <div className='w-[80vw] ml-[5vw] border-t h-[7vh]'></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Branding Section */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Image src={myLogo} alt="Sakhii Logo" width={70} height={30} />
          </div>
          <h2 className="text-xl font-bold leading-tight">
            Know your body.<br />
            Own your health.
          </h2>
          <p className="font-semibold mt-4">DOWNLOAD THE Sakhii APP</p>
          <div className="flex gap-2 mt-2">
            <Image src="/appstore.svg" alt="App Store" width={120} height={40} />
            <Image src="/googleplay.svg" alt="Google Play" width={120} height={40} />
          </div>
          <div className="flex items-center mt-3 text-gray-700">
            <span>Excellent&nbsp;&nbsp;4.3 out of 5</span>
            <Image src="/trustpilot.svg" alt="Trustpilot" width={80} height={20} className="ml-2" />
          </div>
        </div>

        {/* Dynamic Link Sections */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link, index) => (
                <li key={index}><a className='cursor-pointer'>{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
        <button className="border rounded-full px-3 py-1">🌐 English</button>
        <p className="text-xs">&copy; 2025 Sakhii Foundation Limited</p>
        <div className="flex gap-4 text-black">
          {/* <Linkedin size={18} /> */}
          
          {/* <Tiktok size={18} />
          <Facebook size={18} />
          <Instagram size={18} /> */}
        </div>
      </div>
    </footer>
  )
}
