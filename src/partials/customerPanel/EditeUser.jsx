import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";
import useEditeUser from "./useEditeUser";
import { uploadAvatarUrl } from "../../services/Auth/uploadAvatarUrl";
import { v4 as uuidv4 } from "uuid";
import uploadAvatar from "../../services/Auth/uploadAvatar";

function EditeUser() {
  const { register, handleSubmit, reset } = useForm();

  const { editeUpUser } = useEditeUser();
  const userEmail = localStorage.getItem("userEmail");
  const userFirstname = localStorage.getItem("userFirstname");
  const userLastname = localStorage.getItem("userLastname");
  const userPhone = localStorage.getItem("userPhone");
  const resetForm = () => {
    reset();
  };
  const myuuid = uuidv4();

  const onSubmit = (data) => {
    editeUpUser({
      firstname: data.firstName,
      lastname: data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
    });
    uploadAvatarUrl({ avatar: data.avatar[0], myuuid: myuuid });
    uploadAvatar({ myuuid: myuuid, avatar: data.avatar[0] });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className=" p-5 font-bold">ویرایش اطلاعات</span>
      <div className="p-5">
        <InputForm
          key="1"
          title="نام "
          type="text"
          defaulted={userFirstname}
          name="نام "
          textholder="نام خود را وارد کنید"
          register={register("firstName", {
            required: {
              value: true,
              message: "Please complete the firstname",
            },
          })}
        />
        <InputForm
          key="2"
          title=" نام خانوادگی"
          defaulted={userLastname}
          type="text"
          name="نام خانوادگی"
          textholder=" نام خانوادگی خود را وارد کنید"
          register={register("lastName", {
            required: {
              value: true,
              message: "Please complete the lastname",
            },
          })}
        />
        <InputForm
          key="3"
          title="شماره موبایل"
          type="number"
          defaulted={userPhone}
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
          key="4"
          title="ایمیل"
          type="email"
          name=""
          value={userEmail}
          textholder="ایمیل خود را وارد کنید"
        />
        <InputForm
          key="5"
          title="رمز عبور جدید"
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
        <InputForm
          key="6"
          title="عکس پروفایل خود را بارگذاری کنید"
          type="file"
          name=""
          className=""
          textholder="عکس پروفایل خود را بارگذاری کنید"
          register={register("avatar", {
            required: {
              value: false,
              // message: "Please complete the p",
            },
          })}
        />
      </div>
      <div className="flex flex-row-reverse gap-5 pe-5">
        <button type="submit" className=" rounded-md bg-red-500 p-2 text-white">
          دخیره اطلاعات
        </button>
        <button
          onClick={() => resetForm()}
          className="rounded-md border border-red-400 p-2"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}

export default EditeUser;
