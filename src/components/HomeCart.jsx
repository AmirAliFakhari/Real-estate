function HomeCart({ title, subTitle, mortgage, monthPrice, homeImg }) {
  return (
    <>
      <div className="bg-red-600 w-56 h-60 rounded-md flex flex-col">
        <img src={`${homeImg}`} />
        <span>{title}</span>
        <span>
          {subTitle}({mortgage | monthPrice})
        </span>
      </div>
    </>
  );
}

export default HomeCart;
