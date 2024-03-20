import { useForm } from "react-hook-form";
import InputForm from "../InputFom";
import stepsData from "../../services/data/formInputData";
import Stepper_Button from "./Stepper_Button";
import { useState } from "react";
import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";
import { useSelector } from "react-redux";

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
    if (count === 4) {
      regHouse({
        transaction_type: data.transaction_type,
        mortgage: data.mortgage,
        rent: data.rent,
        city: data.city,
        state: data.state,
        street: data.street,
        number_floors: data.number_floors,
        floor: data.floor,
        room: data.room,
        type_land: data.type_land,
        area: data.area,
        auxiliary_road: data.auxiliary_road,
        userData,
      });
    }
  };

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
        <form className="p-1" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2   gap-4 ">
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
