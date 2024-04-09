import { useState } from "react";
import eye from "../../src/assets/icons/eye.svg";
function InputForm({
  title,
  type,
  textholder,
  register,
  name,
  defaulted,
  currency,
  value,
  className,
  options,
}) {
  const [eyePass, setEyePass] = useState(false);

  return (
    <div className={`mb-2 flex flex-col gap-1`}>
      <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <div className="relative">
        {type === "radio" && options ? (
          options.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                key={index}
                type="radio"
                name={name}
                value={option.value}
                {...register}
              />
              <span className="ml-2">{option.label}</span>
            </label>
          ))
        ) : (
          <input
            accept={type === "file" ? `image/png` : undefined}
            multiple={type === "file"}
            type={type === "password" && eyePass ? "text" : type}
            value={value}
            disabled={!!value}
            id={name}
            defaultValue={defaulted}
            className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ${type === "file" ? className : ""}`}
            placeholder={textholder}
            {...register}
          />
        )}
        {type === "password" && (
          <span
            className="absolute left-2 top-3 cursor-pointer"
            onClick={() => setEyePass(!eyePass)}
          >
            <img src={eye} alt="Toggle visibility" />
          </span>
        )}
      </div>
    </div>
  );
}

export default InputForm;
