import { useForm } from "react-hook-form";
import InputForm from "../InputFom";
import stepsData from "../../services/data/formInputData";
import Stepper_Button from "./Stepper_Button";
import { useState } from "react";

export default function Stepper({
  currentStep,
  numberOfSteps,
  setCurrentStep,
}) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [count, setCount] = useState(0);

  const onSubmit = (data) => {
    // Calling API
    if (count === 3) {
      console.log(data);
    }
  };

  //color of progressbar
  const activeColor = (index) =>
    currentStep >= index ? "bg-red-500" : "bg-gray-300";
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <div className="flex items-center justify-center" key={index}>
            <div className={`h-6 w-6 rounded-full ${activeColor(index)}`} />
            {isFinalStep(index) ? null : (
              <div className={`h-1 w-12 ${activeColor(index)}`} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3>{stepsData[currentStep].title}</h3>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2 lg:flex-row">
            {stepsData[currentStep].inputs.map((inputData) => (
              <InputForm
                key={inputData.id}
                title={inputData.title}
                currency={inputData.currency}
                type={inputData.type}
                defaulted={inputData.value}
                name={inputData.name}
                textholder={inputData.placeholder}
                register={register(inputData.reg, {
                  required: {
                    value: true,
                    message: "Please complete the form",
                  },
                })}
                errors={errors}
              />
            ))}
          </div>
          <Stepper_Button
            setCount={setCount}
            count={count}
            errors={errors}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </form>
      </div>
    </div>
  );
}
