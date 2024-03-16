import { Fragment } from "react";

export default function Stepper({ currentStep, numberOfSteps }) {
  const activeColor = (index) =>
    currentStep >= index ? "bg-blue-500" : "bg-gray-300";
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="flex items-center">
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <Fragment key={index}>
          <div className={`h-6 w-6 rounded-full ${activeColor(index)}`}></div>
          {isFinalStep(index) ? null : (
            <div className={`h-1 w-12 ${activeColor(index)}`}></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
