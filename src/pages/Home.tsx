import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, Brain, MessageSquare, ChevronDown, ChevronUp, Zap, Leaf, Recycle } from 'lucide-react';
import image from "./../images/image.jpg";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const energyFacts = [
    {
      id: 'solar',
      title: 'Energia Solar',
      icon: <Sun className="h-8 w-8 text-amber-500" />,
      content: 'A energia solar pode fornecer 100 vezes mais energia do que o consumo global atual. Em apenas uma hora, o Sol fornece mais energia à Terra do que toda a humanidade consome em um ano.'
    },
    {
      id: 'wind',
      title: 'Energia Eólica',
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      content: 'O Brasil tem um dos maiores potenciais eólicos do mundo, com capacidade de gerar mais de 500 GW de energia limpa, suficiente para abastecer mais de 200 milhões de residências.'
    },
    {
      id: 'sustainable',
      title: 'Sustentabilidade',
      icon: <Leaf className="h-8 w-8 text-amber-500" />,
      content: 'A transição para energias renováveis pode reduzir as emissões de CO2 em até 70% até 2050, sendo crucial para combater as mudanças climáticas.'
    }
  ];

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="py-20 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            +Energia: Mais vida, mais alegria!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Construindo um futuro mais vivo através de energias limpas.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/quiz"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition flex items-center space-x-2"
            >
              <Brain className="h-5 w-5" />
              <span>Iniciar Quiz</span>
            </Link>
            <Link
              to="/guide"
              className="bg-white text-amber-500 px-6 py-3 rounded-lg hover:bg-gray-50 transition border border-amber-500 flex items-center space-x-2"
            >
              <Recycle className="h-5 w-5" />
              <span>Ver Guia de Economia</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Descubra o Poder da Energia Sustentável
          </h2>
          <div className="space-y-4">
            {energyFacts.map((fact) => (
              <div
                key={fact.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(fact.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    {fact.icon}
                    <h3 className="text-xl font-semibold">{fact.title}</h3>
                  </div>
                  {activeSection === fact.id ? (
                    <ChevronUp className="h-5 w-5 text-amber-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-amber-500" />
                  )}
                </button>
                {activeSection === fact.id && (
                  <div className="px-6 py-4 bg-amber-50">
                    <p className="text-gray-600">{fact.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/guide" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <Battery className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guia de Economia</h3>
              <p className="text-gray-600">Aprenda dicas práticas para economizar energia no dia a dia.</p>
            </Link>
            <Link to="/quiz" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <Brain className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quiz Interativo</h3>
              <p className="text-gray-600">Teste seus conhecimentos sobre energias renováveis.</p>
            </Link>
            <Link to="/contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <MessageSquare className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fale Conosco</h3>
              <p className="text-gray-600">Entre em contato para dúvidas e sugestões.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Desenvolvedora</h2>
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt="Mariana dos Santos Leite"
                className="w-32 h-32 rounded-full object-cover mb-4 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mariana dos Santos Leite</h3>
              <p className="text-gray-600">RM: 559022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}