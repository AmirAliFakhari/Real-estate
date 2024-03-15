function InputForm({ title, type, textholder, register, name, defaulted }) {
  return (
    <div className="mb-2 flex flex-col gap-1">
      <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <input
        type={type}
        value={defaulted}
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
