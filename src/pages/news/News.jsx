import Spinner from "../../features/Spinner";
import MaskanSection from "../../partials/news/MaskanSection";
import TopNews from "../../partials/news/TopNews";
import useSelectNews from "./useSelectNews";

function News() {
  const { data, isLoading } = useSelectNews();
  return (
    <div className="relative left-0 top-[80px]">
      <span className="ps-5 text-xl font-bold">اخبار املاک</span>
      <div className="flex flex-col gap-20">
        {!isLoading ? (
          data.map((item, index) => (
            <TopNews
              key={index}
              calender={item.created_at}
              subtitle={item.subtitle}
              text={item.text}
              time={item.time}
              title={item.title}
              type={item.type}
              img={item.img}
            />
          ))
        ) : (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}

        <MaskanSection />
      </div>
    </div>
  );
}

export default News;
