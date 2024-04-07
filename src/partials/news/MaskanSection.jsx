import MaskanBigNews from "../../components/news/MaskanBigNews";
import MaskanSmallNew from "../../components/news/MaskanSmallNew";
import useTypeNews from "./useTypeNews";

function Sections({ titleSection, type }) {
  const { data, isLoading } = useTypeNews();
  return (
    <div className="flex w-full flex-col justify-center gap-2 ">
      <div className="flex justify-between px-16 ">
        <span className="text-xl font-bold">{titleSection}</span>
        <span className="text-lg ">مشاهده همه</span>
      </div>
      <div className="flex justify-center ">
        <div className="grid  w-[85%] grid-flow-row gap-3    rounded-xl  lg:grid-cols-2">
          {!isLoading &&
            data?.map(
              (data) =>
                data.type == type &&
                data.typeOrder === "Big" && (
                  <MaskanBigNews
                    img={data.img}
                    key={data.title}
                    subtitle={data.subtitle}
                    time={data.time}
                    title={data.title}
                  />
                ),
            )}
          <div className=" grid  grid-cols-2 gap-2 md:grid-cols-1  md:grid-rows-2">
            {!isLoading &&
              data?.map(
                (data) =>
                  data.type == type &&
                  data.typeOrder == "Small" && (
                    <MaskanSmallNew
                      key={data.title}
                      time={data.time}
                      img={data.img}
                      subtitle={data.subtitle}
                    />
                  ),
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
