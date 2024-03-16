import { useState } from "react";

function InputForm({
  title,
  type,
  textholder,
  register,
  name,
  defaulted,
  erros,
  currency,
}) {
  const [eyePass, setEyePass] = useState(false);

  return (
    <div className="mb-2 flex flex-col gap-1">
      <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <div className="relative ">
        <input
          type={eyePass ? type : "text"}
          id={name}
          defaultValue={defaulted}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder={textholder}
          {...register}
        />
        {type === "password" ? (
          <span
            className="absolute left-2 top-3"
            onClick={() => {
              setEyePass((state) => !state);
            }}
          >
            <img src="src\assets\icons\eye.svg" />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default InputForm;
