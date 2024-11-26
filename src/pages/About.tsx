import React from 'react';
import { Wind, Sun, Droplets } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Sobre o Projeto</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
          <p className="text-gray-600 mb-6">
            O +Energia é uma iniciativa dedicada a promover a conscientização sobre energia sustentável
            e fornecer soluções práticas para um futuro mais limpo e eficiente.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center text-center">
              <Wind className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energia Eólica</h3>
              <p className="text-gray-600">
                Aproveitando a força dos ventos para gerar energia limpa e renovável.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Sun className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energia Solar</h3>
              <p className="text-gray-600">
                Transformando a luz solar em energia sustentável para nosso planeta.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Droplets className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energia Hidrelétrica</h3>
              <p className="text-gray-600">
                Utilizando o poder da água para gerar energia renovável.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Objetivos</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Promover a conscientização sobre fontes de energia renovável</li>
            <li>Fornecer dicas práticas para economia de energia</li>
            <li>Educar sobre o impacto ambiental do consumo de energia</li>
            <li>Incentivar a adoção de práticas sustentáveis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}