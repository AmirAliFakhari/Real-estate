import toast from "react-hot-toast";
import NUMBER_OF_STEPS from "./number-steps";

function Stepper_Button({
  currentStep,
  setCurrentStep,
  errors,
  count,
  setCount,
}) {
  function goToNextStep() {
    if (Object.values(errors).length === 0) {
      setCurrentStep(
        (prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1),
        setCount((c) => (c === NUMBER_OF_STEPS ? c : c + 1)),
      );
    } else {
      toast.error(`${Object.keys(errors)} رو کامل نکردی!`);
    }
  }

  function goToPreviousStep() {
    setCount((c) => (c -= 1)),
      setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  }

  return (
    <section className="mt-5 flex justify-between">
      <button
        disabled={count <= 0 ? true : ""}
        onClick={goToPreviousStep}
        className="rounded-md  bg-blue-500 px-5 py-1 text-white"
      >
        قبلی
      </button>
      <button
        onClick={goToNextStep}
        className="rounded-md bg-red-600 px-5 py-1 text-white"
      >
        بعدی
      </button>
    </section>
  );
}

export default Stepper_Button;
