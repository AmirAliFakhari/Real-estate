import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputForm from "../../../components/InputFom";
import useSignUp from "./useSignUp";

function SignOn() {
  const navigate = useNavigate();
  const { singUpUser } = useSignUp();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    singUpUser({
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      password: data.password,
      email: data.email,
    });
  };

  return (
    <div className="bg-red-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex h-screen flex-col items-center justify-center text-center"
      >
        <div className="flex h-fit  w-80 flex-col justify-center gap-3 rounded-lg bg-slate-50 px-6 sm:w-[25rem] ">
          <span className="text-xl font-bold">ثبت نام</span>
          <span>برای ثبت‌نام اطلاعات زیر را تکمیل نمایید</span>
          <InputForm
            type="email"
            textholder="ایمیل خود را وارد کنید"
            name="email"
            register={register("email")}
          />
          <InputForm
            type="text"
            textholder="نام خود را وارد کنید"
            name="firstname"
            register={register("firstname")}
          />

          <InputForm
            type="text"
            textholder="نام خانوادگی خود را وارد کنید"
            name="lastname"
            register={register("lastname")}
          />
          <InputForm
            type="number"
            textholder="شماره موبایل خود را وارد کنید"
            name="phone"
            register={register("phone")}
          />
          <InputForm
            type="number"
            textholder="رمز دلخواه خود را وارد کنید"
            name="password"
            register={register("password")}
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  sm:w-auto"
          >
            ثبت نام
          </button>
          <button
            onClick={() => navigate("/signIn")}
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-red-300  sm:w-auto"
          >
            ورود
          </button>
          <div className="mb-4 flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 mt-2 text-sm font-medium text-gray-900"
            >
              قوانین امیرعلی فخاری را قبول دارم
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignOn;
