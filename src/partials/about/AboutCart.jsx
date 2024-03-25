function AboutCart({ text, img }) {
  return (
    <>
      <div className="flex  h-64 flex-col items-center justify-center gap-7 rounded-xl bg-slate-50 shadow-2xl drop-shadow-xl ">
        <img className="w-fit" src={`${img}`} alt="" />
        <p className="w-52 text-lg font-light  sm:text-lg">{text}</p>
      </div>
    </>
  );
}

export default AboutCart;
