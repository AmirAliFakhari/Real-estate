function RelatedNews({ time, title, img }) {
  return (
    <div className="mx-2 mt-5 flex flex-col items-center justify-center rounded-lg bg-white">
      <img src={img} alt="" />
      <span className="w-fit rounded-md bg-red-100 p-1 text-sm">{time}</span>
      <p>{title}</p>
    </div>
  );
}

export default RelatedNews;
