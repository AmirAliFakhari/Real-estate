import { useForm } from "react-hook-form";
import InputForm from "../../components/InputFom";
import useInsertNews from "../../pages/news/useInsertNews";
import { v4 as uuidv4 } from "uuid";
import { uploadNewsImg, uploadNewsPic } from "../../services/news/newsAPI";
import inputFields from "../../services/data/formInsertNews";

const InsertNew = () => {
  const { insertNew } = useInsertNews();
  const { register, handleSubmit, reset } = useForm();
  const resetForm = () => {
    reset();
  };

  const myuuidImg = uuidv4();
  const myuuidPic = uuidv4();

  const onSubmit = (data) => {
    insertNew({
      ...data,
      myuuidImg: myuuidImg,
      myuuidPic: myuuidPic,
    });
    uploadNewsImg({
      myuuidImg: myuuidImg,
      img: data.img[0],
    });
    uploadNewsPic({
      myuuidPic: myuuidPic,
      picture: data.picture[0],
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className=" p-5 font-bold">اضافه کردن خبر</span>
      <div className="p-5">
        {inputFields.map((field) => (
          <InputForm
            key={field.key}
            title={field.title}
            type={field.type}
            name={field.name}
            textholder={field.textholder}
            register={register(field.name, field.validation)}
            options={field.options}
          />
        ))}
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
