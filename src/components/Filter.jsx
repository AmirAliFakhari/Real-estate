function Filter({ title, src }) {
  return (
    <div className="relative">
      <img
        className="absolute top-[10px] px-1 sm:top-3 sm:w-7"
        src={`${src}`}
        alt=""
      />
      <button
        type="button"
        className="mb-2  w-36 rounded-lg  border border-gray-200 py-2.5  text-sm font-medium text-black hover:bg-red-600 focus:outline-none "
      >
        <span className=" flex  justify-center px-1">{title}</span>
      </button>
    </div>
  );
}

export default Filter;
