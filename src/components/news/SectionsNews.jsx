function SectionsNews({
  firstSectionText,
  firstSectionTitle,
  secondSectionText,
  secondSectionTitle,
  thirdSectionTitle,
  thirdSectionText,
  picture,
}) {
  return (
    <div className="col-span-full flex flex-col gap-10 lg:col-span-2">
      <div className="flex flex-col">
        <span className="font-semibold">{firstSectionTitle}</span>
        <p className="text-justify">{firstSectionText}</p>
      </div>
      <div className="flex flex-col ">
        <span className="font-semibold">{secondSectionTitle}</span>
        <p className="text-justify">{secondSectionText}</p>
        <img className="mt-5" src={picture} alt="" />
      </div>
      <div className="">
        <span className="font-semibold">{thirdSectionTitle}</span>
        <p className="text-justify">{thirdSectionText}</p>
      </div>
    </div>
  );
}

export default SectionsNews;
