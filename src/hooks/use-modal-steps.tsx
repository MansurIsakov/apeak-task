import { useState } from 'react';

export function useModalSteps(initialStep = 1) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handlePrevious = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return {
    currentStep,
    handleNext,
    handlePrevious,
  };
}
