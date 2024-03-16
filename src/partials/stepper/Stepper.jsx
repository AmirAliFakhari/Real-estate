import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";

export default function Stepper({ currentStep, numberOfSteps }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // singIn({ email: data.email, password: data.password });
  };

  const activeColor = (index) =>
    currentStep >= index ? "bg-red-500" : "bg-gray-300";
  const isFinalStep = (index) => index === numberOfSteps - 1;

  // Fake data for each step
  const stepsData = [
    {
      title: "Step 1",
      type: "text",
      name: "step1",
      placeholder: "Enter your name",
      value: "e",
    },
    {
      title: "Step 2",
      type: "email",
      name: "step2",
      placeholder: "Enter your email",
      value: "af",
    },
    {
      title: "Step 3",
      type: "password",
      name: "step3",
      placeholder: "Enter your password",
      value: "f",
    },
  ];

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
            register={register("email")}
          />
          <button className="bg-red-100">dsf</button>
        </form>
      </div>
    </div>
  );
}
