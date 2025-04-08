'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: 'Is the app free?',
    answer:
      'Yes, Sakhi is free to download and use. We also offer premium features for enhanced functionality.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes, core features work offline. You can access your tracked data and basic information without internet connection.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'We prioritize your privacy and security. All data is encrypted and stored securely following industry standards.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-screen mx-auto py-12 px-4 bg-[#F7E8E8]">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-3xl">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow-sm cursor-pointer transition-all"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{item.question}</p>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
