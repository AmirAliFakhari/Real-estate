function AboutCart({ text, img }) {
  console.log(img);
  return (
    <>
      <div className="flex  h-64 flex-col items-center justify-center gap-7 rounded-xl bg-slate-50 shadow-2xl shadow-red-300 drop-shadow-2xl ">
        <img className="w-fit" src={`${img}`} alt="" />
        <p className="w-52 text-lg font-light  sm:text-xl">{text}</p>
      </div>
    </>
  );
}

export default AboutCart;
