function New({ title, text, img }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 py-5  bg-slate-50 drop-shadow-2xl  rounded-lg ">
        <img className="w-fit rounded-lg " src={img} alt="" />
        <div className="text-center">
          <h2 className=" break-words font-semibold">{title}</h2>
          <span className=" break-words text-slate-700">{text}</span>
        </div>
      </div>
    </>
  );
}

export default New;
