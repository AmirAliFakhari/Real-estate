function HomeCart({ title, subTitle, mortgage, monthPrice, homeImg }) {
  //   console.log(title, subTitle, mortgage, monthPrice, homeImg);
  return (
    <>
      <div className=" bg-gray-100 w-60 h-fit  rounded-lg flex flex-col text-end border-2 border-red-300">
        <div className="relative">
          <img className="rounded-t-lg" src={`${homeImg}`} />
          <span className="absolute top-2 left-2 opacity-65  text-white font-shabnam bg-gray-600 px-2 py-1 rounded-lg">
            2 ساعت پیش
          </span>
        </div>
        <div className=" px-2 text-justify">
          <span className="text-gray-600 ">{title}</span>
        </div>
        <div className=" font-bold px-2 text-justify">
          <span className="font-normal">{subTitle}</span>
          <span className="flex">{mortgage}</span>
          <span className="flex">{monthPrice}</span>
        </div>
        <button className="flex justify-center w-auto text-white bg-red-500 rounded-lg">
          مشاهده
        </button>
      </div>
    </>
  );
}

export default HomeCart;
