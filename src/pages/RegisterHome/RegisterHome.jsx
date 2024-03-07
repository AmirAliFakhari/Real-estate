import ButtonDir from "../../components/ButtonDir";
import Stepper from "awesome-react-stepper";
import InputForm from "../../components/InputFom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleNext } from "./registerSlice";

function RegiterHome() {
  const { register, handleSubmit } = useForm();
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  console.log(dispatch(handleNext));

  const onSubmit = (data) => {
    switch (step) {
      case 0:
        console.log("Step1", data);
        break;
      case 1:
        console.log("step2", data);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex h-screen rounded-xl bg-gray-100 sm:rounded-l-3xl ">
      <div className="hidden h-screen     sm:flex">
        <img
          src="src\assets\imgs\register.svg"
          className=" max-h-svh w-60 rounded-l-3xl sm:flex sm:object-cover  "
        />
      </div>
      <div className="flex flex-grow items-center justify-center    ">
        <Stepper
          strokeColor="red"
          fillStroke="#51515153"
          activeColor="#ff0d00"
          onContinue={handleSubmit(onSubmit)}
          backBtn={<ButtonDir title="back" />}
          continueBtn={<ButtonDir title="next" />}
          submitBtn={
            <ButtonDir title="submit" onClick={handleSubmit(onSubmit)} />
          }
          stroke={2}
          barWidth="150px"
          contentBoxClassName="stepper__contect"
          progressBarClassName="stepper__bar"
          btnPos="center"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-5 max-w-sm"
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-5 max-w-sm"
          >
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
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
            </div>
          </form>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-5 max-w-sm"
          >
            <div className=" flex w-72 flex-col gap-6 sm:w-96 ">
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
            </div>
          </form>
        </Stepper>
      </div>
    </div>
  );
}

export default RegiterHome;
