import React from "react";
import Stepper from "../../components/Stepper";

export default function SignIn() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const NUMBER_OF_STEPS = 5;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));

  return (
    <div>
      <h1 className="text-2xl">Here is the stepper in action!</h1>
      <br />
      <Stepper currentStep={currentStep} numberOfSteps={NUMBER_OF_STEPS} />
      <br />
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
  );
}
