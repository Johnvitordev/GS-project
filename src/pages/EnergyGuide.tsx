import React from 'react';
import { Lightbulb, Home, Tv, Smartphone } from 'lucide-react';

export default function EnergyGuide() {
  const tips = [
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      title: 'Iluminação',
      tips: [
        'Substitua lâmpadas antigas por LED',
        'Aproveite a luz natural',
        'Apague as luzes ao sair do ambiente',
        'Use cores claras nas paredes para melhor reflexão'
      ]
    },
    {
      icon: <Home className="h-8 w-8 text-amber-500" />,
      title: 'Eletrodomésticos',
      tips: [
        'Opte por aparelhos com selo A de eficiência',
        'Evite deixar aparelhos em standby',
        'Faça manutenção regular dos equipamentos',
        'Use a capacidade máxima de máquinas de lavar'
      ]
    },
    {
      icon: <Tv className="h-8 w-8 text-amber-500" />,
      title: 'Entretenimento',
      tips: [
        'Ajuste o brilho da TV adequadamente',
        'Desligue aparelhos não utilizados',
        'Use timers para desligar automaticamente',
        'Configure modo de economia de energia'
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-amber-500" />,
      title: 'Dispositivos Móveis',
      tips: [
        'Não deixe carregando além do necessário',
        'Use modo de economia de bateria',
        'Evite ciclos completos de descarga',
        'Mantenha apps atualizados para melhor eficiência'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Guia de Economia de Energia
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center space-x-4 mb-6">
                {section.icon}
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start space-x-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Dicas Adicionais</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              Além das dicas específicas acima, você pode economizar energia:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Realizando manutenção regular dos equipamentos</li>
              <li>Educando todos os membros da família sobre economia de energia</li>
              <li>Monitorando o consumo mensal de energia</li>
              <li>Investindo em tecnologias de energia renovável quando possível</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}