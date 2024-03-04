import ButtonDir from "../../components/ButtonDir";
import Stepper from "awesome-react-stepper";
import InputForm from "../../components/InputFom";
import { useForm } from "react-hook-form";

function RegiterHome() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const watchAllFields = watch();

  function validateStep(step) {
    // Check validation based on step and return true/false
    switch (step) {
      case 1:
        return !!watchAllFields.step1Field; // Adjust this based on your form fields
      case 2:
        return !!watchAllFields.step2Field; // Adjust this based on your form fields
      // Add more cases for each step if necessary
      default:
        return true; // Default to true if step not handled
    }
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen  ">
      <div className="hidden h-screen    sm:flex">
        <img
          src="src\assets\imgs\register.svg"
          className=" max-h-svh w-60 sm:flex sm:object-cover  "
          alt=""
        />
      </div>
      <div className="flex flex-grow items-center justify-center    ">
        <Stepper
          strokeColor="red"
          fillStroke="#51515153"
          activeColor="#ff0d00"
          onContinue={(currentStep) => {
            const nextStep = currentStep + 1;
            if (validateStep(nextStep)) {
              handleSubmit(onSubmit)(); // Submit the form if validation passes
            } else {
              // Optionally, you can show an error message or handle it in some way
              console.log("Validation failed for Step ", nextStep);
            }
          }}
          stroke={2}
          barWidth="150px"
          contentBoxClassName="stepper__contect"
          progressBarClassName="stepper__bar"
          btnPos="center"
          backBtn={<ButtonDir title="back" />}
          continueBtn={<ButtonDir title="next" />}
          submitBtn={<ButtonDir title="submit" />}
        >
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="mx-auto mt-5 max-w-sm   "
          >
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
              <InputForm
                title="شهر"
                type="text"
                textholder="زواره"
                register={{ ...register("text") }}
                name="city"
              />
              <InputForm title="منطقه" type="text" textholder="بنجیره" />
              <InputForm title="خیبان اصلی" type="text" textholder="طالقانی" />
              <InputForm title="خیابان فرعی" type="text" textholder="حشمت" />
            </div>
          </form>
          <div>
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
              <InputForm title="شهر " type="text" textholder="زواره" />
              <InputForm title="منطقه" type="text" textholder="بنجیره" />
              <InputForm title="خیبان اصلی" type="text" textholder="طالقانی" />
              <InputForm title="خیابان فرعی" type="text" textholder="حشمت" />
            </div>
          </div>
          <div>
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
              <InputForm title="شهر " type="text" textholder="زواره" />
              <InputForm title="منطقه" type="text" textholder="بنجیره" />
              <InputForm title="خیبان اصلی" type="text" textholder="طالقانی" />
              <InputForm title="خیابان فرعی" type="text" textholder="حشمت" />
            </div>
          </div>
        </Stepper>
      </div>
    </div>
  );
}

export default RegiterHome;
