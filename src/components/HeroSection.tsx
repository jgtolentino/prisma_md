import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => (
  <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
    <h1 className="text-6xl font-bold text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
      Project Meta: End-to-End Manuscript Data Support
    </h1>
    <p className="text-2xl text-gray-600">
      Empowering your research with precision and access to the most trusted databases
    </p>
    <div className="flex justify-center space-x-6">
      <button
        onClick={() => {
          document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="group inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
      >
        <span>Get Started</span>
        <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </div>
    <div className="flex justify-center space-x-8 mt-12">
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-gray-600">AI-Powered Analysis</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-gray-600">Real-time Results</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <span className="text-gray-600">Trusted Databases</span>
      </div>
    </div>
  </div>
);