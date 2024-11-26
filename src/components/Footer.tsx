import React from 'react';
import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <Sun className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold text-amber-500">+Energia</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 +Energia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}