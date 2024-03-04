function InputForm({ title, type, textholder, register, name }) {
  // console.log(...register);
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <input
        type={type}
        id={name}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder={textholder}
        required
        {...register}
      />
    </div>
  );
}

export default InputForm;
