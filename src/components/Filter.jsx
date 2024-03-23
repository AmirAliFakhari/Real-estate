function Filter({ title }) {
  return (
    <div className="">
      <button
        type="button"
        className="border- mb-2 me-2 w-16 rounded-lg border border-gray-200  py-2.5 text-sm font-medium text-black hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 "
      >
        {title}
      </button>
    </div>
  );
}

export default Filter;
