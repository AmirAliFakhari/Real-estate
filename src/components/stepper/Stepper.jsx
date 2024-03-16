import { useForm } from "react-hook-form";
import InputForm from "../InputFom";
import stepsData from "../../services/data/formInputData";
import Stepper_Button from "./Stepper_Button";

export default function Stepper({
  currentStep,
  numberOfSteps,
  setCurrentStep,
}) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  const onSubmit = (data) => {
    if (currentStep === numberOfSteps - 1) {
      console.log(data);
    }
    reset();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            type={stepsData[currentStep].type}
            name={stepsData[currentStep].name}
            textholder={stepsData[currentStep].placeholder}
            value={stepsData[currentStep].value}
            register={register(stepsData[currentStep].reg, {
              required: {
                value: true,
                message: "salam",
              },
            })}
            errors={errors}
          />
          <InputForm
            type={stepsData[currentStep].type}
            name={stepsData[currentStep].name}
            textholder={stepsData[currentStep].placeholder}
            value={stepsData[currentStep].value}
            register={register(stepsData[currentStep].reg)}
            errors={errors}
          />
          <Stepper_Button
            errors={errors}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </form>
      </div>
    </div>
  );
}
