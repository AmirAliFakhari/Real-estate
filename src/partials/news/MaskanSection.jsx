import MaskanBigNews from "../../components/news/MaskanBigNews";
import MaskanSmallNew from "../../components/news/MaskanSmallNew";
import useTypeNews from "./useTypeNews";

function Sections({ titleSection, type }) {
  const { data, isLoading } = useTypeNews();
  const BigNewsItem =
    !isLoading &&
    data.find((item) => item.type === type && item.typeOrder === "Big");
  return (
    <div className="flex w-full flex-col justify-center gap-2 ">
      <div className="flex justify-between px-16 ">
        <span className="text-xl font-bold">{titleSection}</span>
        {/* <span className="text-lg ">مشاهده همه</span> */}
      </div>
      <div className="flex justify-center ">
        <div className="grid  w-[85%] grid-flow-row gap-3    rounded-xl  lg:grid-cols-2">
          {BigNewsItem && (
            <MaskanBigNews
              img={BigNewsItem.img}
              key={BigNewsItem.img}
              subtitle={BigNewsItem.subtitle}
              time={BigNewsItem.time}
              title={BigNewsItem.title}
            />
          )}

          <div className=" grid  grid-cols-2 gap-2 md:grid-cols-1  md:grid-rows-2">
            {!isLoading &&
              data
                ?.filter(
                  (item) => item.type == type && item.typeOrder == "Small",
                )
                .slice(0, 2)
                .map((filteredData) => (
                  <MaskanSmallNew
                    key={filteredData.img}
                    time={filteredData.time}
                    img={filteredData.img}
                    subtitle={filteredData.subtitle}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
