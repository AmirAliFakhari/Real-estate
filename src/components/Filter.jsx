function Filter({ title }) {
  return (
    <div className="">
      <button
        type="button"
        className="border- mb-2 me-2 w-16 rounded-lg border border-gray-200  py-2.5 text-sm font-medium text-black hover:bg-red-600 focus:outline-none "
      >
        {title}
      </button>
    </div>
  );
}

export default Filter;
