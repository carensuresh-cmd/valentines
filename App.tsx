
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';
import ElegantBackground from './components/FloatingDoodles';
import { AppStep } from './types';
import { QUIZ_QUESTIONS, WRONG_ANSWERS_MESSAGES } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.LANDING);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleStart = () => {
    setStep(AppStep.QUIZ);
  };

  const handleOptionSelect = (optionId: string) => {
    const currentQuestion = QUIZ_QUESTIONS[currentQuestionIdx];
    if (optionId === currentQuestion.correctOptionId) {
      setFeedback(null);
      if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestionIdx(prev => prev + 1);
      } else {
        setStep(AppStep.PROPOSAL);
      }
    } else {
      const randomMsg = WRONG_ANSWERS_MESSAGES[Math.floor(Math.random() * WRONG_ANSWERS_MESSAGES.length)];
      setFeedback(randomMsg);
    }
  };

  const handleProposal = () => {
    setStep(AppStep.SUCCESS);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden font-main">
      <ElegantBackground />

      <div className="max-w-xl w-full z-10">
        <AnimatePresence mode="wait">
          {step === AppStep.LANDING && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center space-y-8"
            >
              <div className="bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-[2rem] shadow-[0_20px_60px_rgba(248,200,220,0.2)] border border-white/50">
                <div className="mb-6 inline-block bg-pink-50 text-pink-500 px-6 py-2 rounded-full font-bold tracking-tight text-sm uppercase">
                  Friday, 13/2/26
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight tracking-tight">
                  Answer correctly to secure a date
                </h1>
                <p className="text-gray-500 text-lg md:text-xl font-medium mb-10 tracking-tight">
                  Let's see how well you know us
                </p>
                <button
                  onClick={handleStart}
                  className="bg-[#F8C8DC] hover:bg-pink-300 text-pink-900 font-bold tracking-tight text-xl py-4 px-14 rounded-full shadow-sm transform transition hover:-translate-y-1 active:translate-y-0"
                >
                  Start Quiz
                </button>
              </div>
            </motion.div>
          )}

          {step === AppStep.QUIZ && (
            <motion.div
              key={`question-${currentQuestionIdx}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="bg-white/80 backdrop-blur-lg p-10 rounded-[2rem] shadow-xl border border-pink-50 relative">
                <div className="absolute -top-3 -right-3 bg-gray-800 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  Question {currentQuestionIdx + 1} of {QUIZ_QUESTIONS.length}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center tracking-tight">
                  {QUIZ_QUESTIONS[currentQuestionIdx].question}
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {QUIZ_QUESTIONS[currentQuestionIdx].options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className="w-full text-left p-6 rounded-xl border border-pink-50 hover:border-pink-200 hover:bg-white transition-all duration-300 group flex items-center justify-between shadow-sm hover:shadow-md"
                    >
                      <span className="text-lg font-medium text-gray-600 group-hover:text-pink-600">
                        {option.text}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-100 group-hover:bg-pink-400 transition-all" />
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {feedback && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-pink-500 font-bold text-center mt-8 text-lg uppercase tracking-wider"
                    >
                      {feedback}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {step === AppStep.PROPOSAL && (
            <motion.div
              key="proposal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="bg-white/80 backdrop-blur-md p-12 rounded-[2.5rem] shadow-2xl border border-pink-100/50">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 tracking-tight">
                  Will you be my Galentine?
                </h2>
                <div className="flex flex-col space-y-5">
                  <button
                    onClick={handleProposal}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-5 px-10 rounded-full text-xl shadow-lg transition transform hover:scale-[1.02]"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleProposal}
                    className="bg-white border border-pink-100 text-pink-500 font-bold py-4 px-10 rounded-full text-lg shadow-sm hover:bg-pink-50 transition"
                  >
                    Obviously yes (cuz it's you)
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === AppStep.SUCCESS && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="bg-white/95 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-pink-50 relative overflow-hidden">
                <div className="flex justify-center mb-6">
                  <div className="bg-pink-50 p-3 rounded-full">
                    <CheckCircle className="text-pink-500" size={48} strokeWidth={2} />
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-2 tracking-tight">
                  Yay!!!
                </h1>
                <p className="text-xl font-semibold text-gray-500 mb-10 tracking-tight">
                  Galentine's Dinner Date Confirmed.
                </p>

                <div className="bg-pink-50/50 rounded-3xl p-8 mb-10 space-y-6 text-left border border-pink-100/50 max-w-sm mx-auto shadow-inner">
                  <div className="flex items-center gap-5 text-gray-700">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Calendar size={20} className="text-pink-400" />
                    </div>
                    <span className="font-bold text-lg">February 14th, 2026</span>
                  </div>
                  <div className="flex items-center gap-5 text-gray-700">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Clock size={20} className="text-pink-400" />
                    </div>
                    <span className="font-bold text-lg">7:30 PM</span>
                  </div>
                  <div className="flex items-center gap-5 text-gray-700">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <MapPin size={20} className="text-pink-400" />
                    </div>
                    <span className="font-bold text-lg">Drunken Botanist, Cyberhub</span>
                  </div>
                </div>

                <button
                  onClick={() => window.location.reload()}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-5 px-14 rounded-full shadow-lg flex items-center justify-center gap-4 mx-auto transition-all transform hover:-translate-y-1 active:translate-y-0 text-xl tracking-tight"
                >
                  See You There
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
