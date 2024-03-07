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

  // function validateStep(step) {
  //   switch (step) {
  //     case 1:
  //       return !!watchAllFields.step1Field;
  //     case 2:
  //       return !!watchAllFields.step2Field;
  //     default:
  //       return true;
  //   }
  // }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen bg-gray-100 ">
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
          onContinue={handleSubmit(onSubmit)}
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
                name="city"
                register={{ ...register("َcity") }}
              />
              <InputForm
                title="منطقه"
                type="text"
                textholder="بنجیره"
                name="state"
                register={{ ...register("state") }}
              />
              <InputForm
                title="خیبان اصلی"
                type="text"
                textholder="طالقانی"
                name="main-street"
                register={{ ...register("main-street") }}
              />
              <InputForm
                title="خیابان فرعی"
                type="text"
                textholder="حشمت"
                name="auxiliary-road"
                register={{ ...register("auxiliary-road") }}
              />
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
