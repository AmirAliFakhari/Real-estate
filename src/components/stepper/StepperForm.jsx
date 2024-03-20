import { useState } from "react";
import Stepper from "./Stepper";
import NUMBER_OF_STEPS from "./number-steps";

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex h-screen rounded-xl bg-gray-100 sm:rounded-l-3xl ">
      <div className="flex flex-grow flex-col items-center justify-center">
        <Stepper
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          numberOfSteps={NUMBER_OF_STEPS}
        />
      </div>
    </div>
  );
}
