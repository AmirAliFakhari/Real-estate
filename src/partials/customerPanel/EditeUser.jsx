import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";

function EditeUser() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className=" p-5 font-bold">ویرایش اطلاعات</span>
      <div className="p-5">
        <InputForm
          key="1"
          title="نام و نام خانوادگی"
          type="text"
          name="نام و نام خانوادگی"
          textholder="نام و نام خانوادگی خود را وارد کنید"
          register={register("name", {
            required: {
              value: true,
              message: "Please complete the name",
            },
          })}
        />
        <InputForm
          key="2"
          title="شماره موبایل"
          type="numbers"
          name=""
          textholder="شماره موبایل خود را وارد کنید"
          register={register("phone", {
            required: {
              value: true,
              message: "Please complete the phone",
            },
          })}
        />
        <InputForm
          key="3"
          title="ایمیل"
          type="email"
          name=""
          textholder="ایمیل خود را وارد کنید"
          register={register("email", {
            required: {
              value: true,
              message: "Please complete the email",
            },
          })}
        />
        <InputForm
          key="4"
          title="رمز عبور"
          type="number"
          name=""
          textholder="رمز عبور را وارد کنید"
          register={register("password", {
            required: {
              value: true,
              message: "Please complete the password",
            },
          })}
        />
      </div>
      <div className="flex flex-row-reverse gap-5 pe-5">
        <button className=" rounded-md bg-red-500 p-2">دخیره اطلاعات</button>
        <button className="rounded-md border border-red-400 p-2">انصراف</button>
      </div>
    </form>
  );
}

export default EditeUser;
