function ButtonDir({ title }) {
  // console.log(dir);
  return (
    <button
      type="button"
      className="mb-2 me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      {title !== "submit" ? (title === "next" ? "ادامه" : "برگشت") : "بزن بريم"}
    </button>
  );
}

export default ButtonDir;
