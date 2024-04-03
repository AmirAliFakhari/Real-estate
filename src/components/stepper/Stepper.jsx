import { useForm } from "react-hook-form";
import InputForm from "../InputFom";
import stepsData from "../../services/data/formInputData";
import Stepper_Button from "./Stepper_Button";
import { useState } from "react";
import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Stepper({
  currentStep,
  numberOfSteps,
  setCurrentStep,
}) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { regHouse } = useRegisterHouse();

  const [count, setCount] = useState(0);
  const userData = useSelector((state) => state.auth.userData);

  const onSubmit = (data) => {
    if (count === 6) {
      regHouse({
        data: data,
        userData: userData,
      });
    }
  };

  const activeColor = (index) =>
    currentStep >= index ? "bg-red-500 ease-in duration-500" : "bg-gray-300";
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Link to={"/"} className="flex items-center justify-center">
        <img className="flex w-52 " src="src\assets\icons\icon2.svg" alt="" />
      </Link>
      <div className="flex items-center">
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <div className="flex items-center justify-center" key={index}>
            <div
              className={`flex h-6 w-6 justify-center rounded-full ${activeColor(index)}`}
            >
              <img className="w-1/2 " src="src\assets\icons\tick.svg" />
            </div>
            {isFinalStep(index) ? null : (
              <div
                className={`duration-50000 h-1 w-12 ease-in ${activeColor(index)}`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="mb-3 text-center md:text-right">
          {stepsData[currentStep].title}
        </h3>
        <form className="p-1" onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`grid ${count == 4 ? "grid-cols-1" : "grid-cols-2"}    gap-4 `}
          >
            {stepsData[currentStep].inputs.map((inputData) => (
              <InputForm
                key={inputData.id}
                title={inputData.title}
                currency={inputData.currency}
                type={inputData.type}
                defaulted={inputData.value}
                className={inputData.className}
                name={inputData.name}
                textholder={inputData.placeholder}
                register={register(inputData.reg, {
                  required: {
                    value: true,
                    message: "Please complete the form",
                  },
                })}
                // errors={errors}
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
