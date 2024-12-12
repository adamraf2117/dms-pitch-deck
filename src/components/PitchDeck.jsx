import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Database, Cpu, DollarSign, Users, Activity, PieChart, Target, Layers } from 'lucide-react';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'cover',
      title: 'AI-Enhanced DMS Platform',
      subtitle: 'Transforming Dealership Operations Through Artificial Intelligence'
    },
    {
      type: 'vision',
      title: 'The Vision',
      content: {
        building: 'An AI-powered standalone solution designed to transform how dealerships operate by integrating with existing DMS systems',
        keyFeatures: [
          'Real-time pricing engine',
          'Predictive inventory management',
          'ML-driven customer analysis',
          'Seamless DMS integration'
        ],
        why: 'Bridge the gap between data collection and actionable insights'
      }
    },
    {
      type: 'market',
      title: 'Market Opportunity',
      stats: {
        dealerships: '75,000+ Dealerships',
        annualSales: '$1.2T Annual Sales',
        softwareSpend: '$12-15B Market',
        aiShare: '< 5% AI Adoption'
      },
      growth: 'AI adoption expected to reach 20-30% of software budgets in 5 years'
    },
    {
      type: 'founders',
      title: 'The Founders',
      team: {
        adam: {
          name: 'Adam',
          education: 'Economics & Psychology, University of Maryland',
          achievements: ['Auto finance business scaled to $25M', 'Operating 4 dealerships', '35+ team management']
        },
        justin: {
          name: 'Justin',
          education: 'Biochemistry (Miami), MD (Temple), Fellowship (Emory)',
          achievements: ['Real estate ventures', 'DeFi experience', 'Commercial development']
        }
      }
    },
    {
      type: 'ask',
      title: 'The Opportunity',
      content: {
        investment: '$200K seed ready',
        role: 'Technical Co-Founder',
        responsibilities: [
          'AI/ML Infrastructure',
          'Cloud Architecture',
          'Technical Leadership',
          'Product Strategy'
        ]
      }
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const getSlideContent = (slide) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Cpu size={80} className="text-purple-500 mb-8" />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              {slide.title}
            </h1>
            <p className="text-xl text-gray-600">{slide.subtitle}</p>
          </div>
        );

      case 'vision':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">{slide.title}</h2>
            <p className="text-lg text-gray-700">{slide.content.building}</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {slide.content.keyFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <Layers className="text-purple-500 mb-2" />
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'market':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(slide.stats).map(([key, value]) => (
                <div key={key} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <p className="text-3xl font-bold text-purple-600 mb-2">{value}</p>
                  <p className="text-sm text-gray-600">{key}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">{slide.growth}</p>
            </div>
          </div>
        );

      case 'founders':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {Object.values(slide.team).map((founder, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{founder.education}</p>
                  <ul className="space-y-2">
                    {founder.achievements.map((achievement, aidx) => (
                      <li key={aidx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ask':
        return (
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">{slide.title}</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Technical Leadership</h3>
                {slide.content.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-center space-x-3 mb-3">
                    <Code className="text-purple-500" size={20} />
                    <p>{resp}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">We Bring</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-purple-500" />
                    <span>{slide.content.investment}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="text-purple-500" />
                    <span>Ready customer base</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="text-purple-500" />
                    <span>Industry expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-12 relative min-h-[600px]">
        {getSlideContent(slides[currentSlide])}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="text-purple-600" />
          </button>
          <div className="flex items-center space-x-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentSlide ? 'bg-purple-600' : 'bg-purple-200'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="text-purple-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;