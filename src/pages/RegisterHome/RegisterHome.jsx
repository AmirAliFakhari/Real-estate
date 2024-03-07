import ButtonDir from "../../components/ButtonDir";
import Stepper from "awesome-react-stepper";
import InputForm from "../../components/InputFom";
import { useForm } from "react-hook-form";

function RegisterHome() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // sending to API
    console.log("DATA", data);
  };

  const onContinue = async () => {};

  return (
    <div className="flex h-screen rounded-xl bg-gray-100 sm:rounded-l-3xl ">
      <div className="hidden h-screen sm:flex">
        <img
          src="src\assets\imgs\register.svg"
          className="max-h-svh w-60 rounded-l-3xl sm:flex sm:object-cover"
        />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <Stepper
          strokeColor="red"
          fillStroke="#51515153"
          activeColor="#ff0d00"
          continueBtn={<ButtonDir title="next" />}
          // onContinue={() => onContinue()}
          //onContinue={handleSubmit(onSubmit)}

          submitBtn={<ButtonDir title="submit" />}
          backBtn={<ButtonDir title="back" />}
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
            <div className="flex w-72 flex-col  sm:w-96">
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
            </div>
          </form>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-5 max-w-sm"
          >
            <div className="flex w-72 flex-col  sm:w-96">
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
              <div className="d-flex mb-5">
                <InputForm
                  title="شهر"
                  type="text"
                  textholder="زواره"
                  name="city"
                  register={register("city", { required: true })}
                />
                {errors.city && (
                  <span className=" text-red-500">شهر را وارد کنید</span>
                )}
              </div>
            </div>
          </form>
        </Stepper>
      </div>
    </div>
  );
}

export default RegisterHome;
