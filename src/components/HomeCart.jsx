function HomeCart({ title, subTitle, mortgage, monthPrice, homeImg }) {
  //   console.log(title, subTitle, mortgage, monthPrice, homeImg);
  return (
    <>
      <div className=" bg-gray-100 w-60 h-fit pb-2 rounded-lg flex flex-col text-end border-2 border-red-300">
        <div className="">
          <img className="rounded-t-lg" src={`${homeImg}`} />
        </div>
        <div className="flex flex-row-reverse justify-between px-2">
          <span className="text-gray-600">{title}</span>
        </div>
        <div className="flex flex-col font-bold px-2">
          <span className="font-normal">{subTitle}</span>
          <span>{mortgage}</span>
          <span>{monthPrice}</span>
        </div>
      </div>
    </>
  );
}

export default HomeCart;
