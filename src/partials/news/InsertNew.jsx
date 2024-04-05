import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";
import useInsertNews from "../../pages/news/useInsertNews";
import { v4 as uuidv4 } from "uuid";
import { uploadNewsImg } from "../../services/news/newsAPI";

const InsertNew = () => {
  const { insertNew } = useInsertNews();
  const { register, handleSubmit, reset } = useForm();
  let today = new Date().toLocaleDateString("fa-IR");
  const resetForm = () => {
    reset();
  };

  const myuuid = uuidv4();

  const onSubmit = (data) => {
    console.log(data);
    insertNew({
      title: data.title,
      subtitle: data.subtitle,
      text: data.text,
      img: data.img,
      time: data.time,
      today: today,
      type: data.type,
      isTopNews: data.isTopNews,
      myuuid: myuuid,
    });
    uploadNewsImg({ myuuid: myuuid, img: data.img[0] });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className=" p-5 font-bold">اضافه کردن خبر</span>
      <div className="p-5">
        <InputForm
          key="1"
          title="نام خبر"
          type="text"
          name="نام "
          textholder="نام خود را وارد کنید"
          register={register("title", {
            required: {
              value: true,
              message: "Please complete the title",
            },
          })}
        />
        <InputForm
          key="2"
          title="توضیح کوتاه"
          // defaulted={userLastname}
          type="text"
          name="توضیح کوتاه"
          textholder=" توضیح کوتاهی را وارد کنید"
          register={register("subtitle", {
            required: {
              value: true,
              message: "Please complete the subtitle",
            },
          })}
        />
        <InputForm
          key="3"
          title="توضیح"
          // defaulted={userLastname}
          type="text"
          name="توضیح"
          textholder=" توضیحی را وارد کنید"
          register={register("text", {
            required: {
              value: true,
              message: "Please complete the text",
            },
          })}
        />
        <InputForm
          key="4"
          title="دسته بندی"
          type="text"
          // defaulted={userPhone}
          name=""
          textholder="دسته بندی را وارد کنید"
          register={register("type", {
            required: {
              value: true,
              message: "Please complete the type",
            },
          })}
        />
        <InputForm
          key="5"
          title="زمان مطالعه"
          type="text"
          // defaulted={userPhone}
          name=""
          textholder="زمان مطالعه را وارد کنید"
          register={register("time", {
            required: {
              value: true,
              message: "Please complete the time",
            },
          })}
        />

        <InputForm
          key="6"
          title="عکس خبر را وارد کنید"
          type="file"
          name=""
          className=""
          textholder="عکس خبر را وارد کنید"
          register={register("img", {
            required: {
              value: false,
              // message: "Please complete the p",
            },
          })}
        />
        <InputForm
          key="7"
          title="خبر مهم"
          type="checkbox"
          // defaulted={userPhone}
          name="topNews"
          // textholder="زما"
          register={register("isTopNews", {
            required: {
              value: true,
              message: "Please complete the topNews Boolean",
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
};

export default InsertNew;
