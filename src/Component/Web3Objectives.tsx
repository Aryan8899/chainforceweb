import React from 'react';

const Web3Objectives: React.FC = () => {
  return (
    <div className="font-robotoCondensed w-full bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Delivering Web3 Strategic Objectives
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Component */}
          {[
            {
              title: 'BLOCKCHAIN',
              description:
                'Antier delivers breakthrough blockchain solutions to shape the next generation of enterprises to move smarter and faster.',
              imgSrc: '/pic2.jpg',
              gradient: 'from-blue-700/90 to-blue-900/90',
            },
            {
              title: 'METAVERSE',
              description:
                'Experience the next evolution of digital interaction in our immersive metaverse solutions for enterprise and entertainment.',
              imgSrc: '/pic1.jpg',
              gradient: 'from-purple-800/90 to-indigo-900/90',
            },
            {
              title: 'FINANCE SOLUTIONS',
              description:
                'Transforming financial services with innovative blockchain and DeFi solutions for the modern digital economy.',
              imgSrc: '/pic3.png',
              gradient: 'from-blue-900/90 to-indigo-900/90',
            },
            {
              title: 'ARTIFICIAL INTELLIGENCE',
              description:
                'Powering the future with advanced AI solutions that drive innovation and intelligent automation.',
              imgSrc: '/pic4.jpeg',
              gradient: 'from-indigo-900/90 to-blue-900/90',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative h-[450px] group overflow-hidden rounded-lg shadow-lg transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={card.imgSrc}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-all duration-700 group-hover:opacity-90`}
              />

              {/* Floating Decorative Effects */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-40 transition-all duration-700">
                <div className="animate-pulse w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 transform transition-all duration-500 group-hover:translate-y-0">
                <h3 className="text-white text-2xl font-bold mb-2 transition-opacity duration-700 group-hover:opacity-100">
                  {card.title}
                </h3>
                <p className="text-white/80 max-w-sm text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web3Objectives;
