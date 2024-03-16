import { useState } from "react";
import Stepper from "./Stepper";

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = 5;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div className="flex h-screen rounded-xl bg-gray-100 sm:rounded-l-3xl ">
      <div className="hidden h-screen sm:flex">
        <img
          src="src\assets\imgs\register.svg"
          className="max-h-svh w-60 rounded-l-3xl sm:flex sm:object-cover"
        />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
        <section className="flex gap-10">
          <button
            onClick={goToPreviousStep}
            className="rounded-md bg-blue-600 p-2 text-white"
          >
            Previous step
          </button>
          <button
            onClick={goToNextStep}
            className="rounded-md bg-blue-600 p-2 text-white"
          >
            Next step
          </button>
        </section>
      </div>
    </div>
  );
}
