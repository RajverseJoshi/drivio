"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What documents are required to rent a car?",
      answer: "A valid driving license, Aadhar card/Passport, and a credit card for the security deposit."
    },
    {
      question: "Is there a security deposit?",
      answer: "Yes, a fully refundable security deposit is required at the time of booking."
    },
    {
      question: "Is fuel included in the rental price?",
      answer: "No, cars are delivered with a full tank and must be returned with a full tank."
    },
    {
      question: "What is the minimum age to rent a car?",
      answer: "You must be at least 21 years old and hold a valid driving license for at least 1 year."
    },
    {
      question: "Are there any mileage limits?",
      answer: "We offer flexible plans. You can choose a limited kilometers plan for short trips or an unlimited kilometers plan for long journeys."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 pt-20">
      {/* Hero Banner */}
      <section className="bg-navy py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b-4 border-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-navy/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about renting with DRIVIO.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md ${openIndex === index ? 'border-primary ring-1 ring-primary/20' : 'border-gray-200'}`}
              >
                <button
                  className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-bold text-lg text-navy pr-8">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-primary text-white' : 'bg-orange-50 text-primary'}`}>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-base border-t border-gray-100 mt-2">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
