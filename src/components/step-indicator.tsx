interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-2 mt-1 flex justify-center">
      <div
        className={`h-2 w-2 rounded-full ${
          currentStep === 1 ? 'bg-brand-500' : 'bg-gray-300'
        }`}></div>
      <div
        className={`ml-2 h-2 w-2 rounded-full ${
          currentStep === 2 ? 'bg-brand-500' : 'bg-gray-300'
        }`}></div>
    </div>
  );
}
