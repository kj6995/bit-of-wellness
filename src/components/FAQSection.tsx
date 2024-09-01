"use client"
import React, { useState } from 'react';

const faqs = [
  { question: "What therapy options available?", answer: "Answer here..." },
  { question: "Is therapy confidential?", answer: "Answer here..." },
  { question: "How qualified are therapists?", answer: "Answer here..." },
  { question: "How to start?", answer: "Answer here..." },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">FAQs</h2>
            <p className="text-xl text-gray-600 mb-6">
              Find answers to frequently asked questions about our services and learn how we can help your school.
            </p>
            {/* <button className="bg-white text-[#FF5A5F] border border-[#FF5A5F] px-6 py-2 rounded-md hover:bg-[#FF5A5F] hover:text-white transition duration-300">
              Read More
            </button> */}
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;