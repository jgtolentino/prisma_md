import React from 'react';

const databases = [
  {
    name: 'PubMed',
    icon: '🔬',
    description: 'Access to over 30 million citations for biomedical literature',
  },
  {
    name: 'Cochrane Library',
    icon: '📚',
    description: 'High-quality systematic reviews and meta-analyses',
  },
  {
    name: 'Web of Science',
    icon: '🌐',
    description: 'Comprehensive citation data for multiple disciplines',
  },
  {
    name: 'Scopus',
    icon: '📊',
    description: 'Largest abstract and citation database of peer-reviewed literature',
  },
];

export const DatabaseSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Comprehensive Access to World-Class Databases
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {databases.map((db) => (
          <div
            key={db.name}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{db.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{db.name}</h3>
            <p className="text-gray-600">{db.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);