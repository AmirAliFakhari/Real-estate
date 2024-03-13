import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";
import login from "../../services/Auth/login";
import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";

function SignIn() {
  const { data, error, isLoading } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.teryak, data.teryakmail);
    login(data.teryak, data.teryakmail);
  };
  return (
    <div className="bg-red-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex h-screen  max-w-sm flex-col justify-center    text-center align-middle"
      >
        <div className="flex h-[20rem] w-[25rem] flex-col justify-center gap-3 rounded-lg bg-slate-50 px-6 ">
          <span className="text-xl font-bold">ورود</span>
          <span>به سقفینو خوش آمدید</span>
          <span>لطفاً برای ورود شماره تلفن موبایل خود را وارد کنید</span>
          <InputForm
            type="text"
            textholder="ایمیلت رو بزن"
            name="ورود ساقی"
            register={register("teryakmail")}
          />
          <InputForm
            type="number"
            textholder="شماره موبایلت رو وارد کن"
            name="ورود ساقی"
            register={register("teryak")}
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
