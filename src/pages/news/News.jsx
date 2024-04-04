import NewSection from "../../partials/news/NewSection";
import TopNews from "../../partials/news/TopNews";
import useSelectNews from "./useSelectNews";

function News() {
  const { data, isPending } = useSelectNews();

  return (
    <div className="relative left-0 top-[80px]">
      <span className="ps-5 text-xl font-bold">اخبار املاک</span>
      <div className="flex flex-col gap-20">
        {!isPending && (
          <TopNews
            calender={data?.today}
            subtitle={data?.subtitle}
            text={data?.text}
            time={data?.time}
            title={data?.title}
          />
        )}
        <NewSection />
      </div>
    </div>
  );
}

export default News;
