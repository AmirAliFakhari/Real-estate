function ShowHomeRow({ state, title }) {
  return (
    <div className="mx-5 mt-2 flex justify-between rounded-md border border-gray-200 px-2 font-bold sm:ms-10 sm:w-[31rem]">
      <span>{title}</span>
      <span>{state}</span>
    </div>
  );
}

export default ShowHomeRow;
