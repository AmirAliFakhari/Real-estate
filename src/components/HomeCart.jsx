function HomeCart({ title, subTitle, mortgage, monthPrice, homeImg }) {
  return (
    <>
      <div className="bg-Gray-3-EDEDED w-[288px] h-[250px] rounded-md">
        <img src={`/src/assets/imgs/${homeImg}`} />
        <span>{title}</span>
        <span>
          {subTitle}({mortgage | monthPrice})
        </span>
      </div>
    </>
  );
}

export default HomeCart;
