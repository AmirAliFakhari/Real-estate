function Stepper_Button({ currentStep, setCurrentStep, errors }) {
  const NUMBER_OF_STEPS = 3;
  function goToNextStep() {
    if (
      Object.values(errors).length === 0 ||
      Object.values(errors).length === 0
    ) {
      setCurrentStep((prev) =>
        prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1,
      );
    } else {
      console.log(
        "There are errors in the form. Cannot proceed to the next step.",
      );
    }
  }

  function goToPreviousStep() {
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  }

  return (
    <section className="mt-5 flex justify-between">
      <button
        onClick={goToPreviousStep}
        className="rounded-md bg-blue-500 px-5 py-1 text-white"
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
