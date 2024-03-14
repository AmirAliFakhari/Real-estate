import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";
import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";
import login from "../../services/Auth/login";

function SignIn() {
  const { data: singInData, singIn, isPending } = useLogin();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    singIn({ email: data.email, password: data.password });
  };
  return (
    <div className="bg-red-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex h-screen   flex-col items-center    justify-center text-center"
      >
        <div className="flex h-96 w-80 flex-col justify-center gap-3 rounded-lg bg-slate-50 px-6 sm:h-[25rem] sm:w-[25rem] ">
          <span className="text-xl font-bold">ورود</span>
          <span>به سقفینو خوش آمدید</span>
          <span>لطفاً برای ورود شماره تلفن موبایل خود را وارد کنید</span>
          <InputForm
            type="text"
            textholder="ایمیلت رو بزن"
            name="email"
            register={register("email")}
          />
          <InputForm
            type="number"
            textholder="شماره موبایلت رو وارد کن"
            name="password"
            register={register("password")}
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  sm:w-auto"
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

export default SignIn;
