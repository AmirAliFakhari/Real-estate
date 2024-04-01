function ShowHomeIcon({ state, src, title, unit }) {
  return (
    <div className="flex w-full flex-col items-center justify-end rounded-lg bg-gray-100  font-bold sm:w-40">
      <div className="flex flex-col items-center justify-center">
        <div className="  flex items-center justify-center gap-2">
          <img className="h-20 w-[2rem]" src={src} alt="s" />
          <span>{title}</span>
        </div>
        <div className="flex gap-1">
          <span>{state}</span>
          <span>{unit}</span>
        </div>
      </div>
    </div>
  );
}

export default ShowHomeIcon;
