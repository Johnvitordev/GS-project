import React, { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCcw } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

export default function Quiz() {
  const questions: Question[] = [
    {
      question: "Qual é a fonte de energia renovável mais utilizada no Brasil?",
      options: ["Solar", "Eólica", "Hidrelétrica", "Biomassa"],
      correct: 2
    },
    {
      question: "Qual destas NÃO é uma fonte de energia renovável?",
      options: ["Energia Solar", "Carvão Mineral", "Energia Eólica", "Energia Geotérmica"],
      correct: 1
    },
    {
      question: "Qual é o principal gás de efeito estufa produzido pela queima de combustíveis fósseis?",
      options: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hidrogênio"],
      correct: 2
    },
    {
      question: "Qual é a principal vantagem da energia solar?",
      options: [
        "Funciona apenas durante o dia",
        "Alto custo de manutenção",
        "Não produz poluição durante seu uso",
        "Requer grandes áreas de terra"
      ],
      correct: 2
    },
    {
      question: "Qual dispositivo converte energia solar em eletricidade?",
      options: ["Turbina eólica", "Painel solar", "Gerador a diesel", "Bateria"],
      correct: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Quiz de Energia Renovável
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          {showScore ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Você acertou {score} de {questions.length} questões!
              </h2>
              <p className="text-gray-600 mb-6">
                {score === questions.length
                  ? "Parabéns! Você é um expert em energia renovável!"
                  : "Continue estudando para aprender mais sobre energia renovável!"}
              </p>
              <button
                onClick={resetQuiz}
                className="bg-amber-500 text-white py-2 px-6 rounded-md hover:bg-amber-600 transition flex items-center space-x-2 mx-auto"
              >
                <RefreshCcw className="h-5 w-5" />
                <span>Tentar Novamente</span>
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">
                    Questão {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-gray-600">
                    Pontuação: {score}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-6">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-md transition ${
                        isAnswered
                          ? index === questions[currentQuestion].correct
                            ? 'bg-green-100 border-green-500'
                            : index === selectedAnswer
                            ? 'bg-red-100 border-red-500'
                            : 'bg-gray-100'
                          : 'bg-gray-100 hover:bg-amber-100'
                      } border ${
                        isAnswered && (
                          index === questions[currentQuestion].correct ||
                          index === selectedAnswer
                        )
                          ? 'border-2'
                          : 'border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isAnswered && (
                          index === questions[currentQuestion].correct ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : index === selectedAnswer ? (
                            <XCircle className="h-5 w-5 text-red-500" />
                          ) : null
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}