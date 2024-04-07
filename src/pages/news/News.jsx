import Spinner from "../../features/Spinner";
import SaghfinoAdd from "../../partials/addvertisment/SaghfinoAdd";
import Sections from "../../partials/news/MaskanSection";
import TopNews from "../../partials/news/TopNews";
import useTypeNews from "../../partials/news/useTypeNews";

function News() {
  const { data, isLoading } = useTypeNews();
  const topNewsItem =
    !isLoading && data.find((item) => item.isTopNews === true);
  return (
    <div className="relative left-0 top-[80px]">
      <span className="ps-5 text-xl font-bold">اخبار املاک</span>
      <div className="flex flex-col gap-20">
        {(topNewsItem && (
          <TopNews
            calender={topNewsItem.created_at}
            subtitle={topNewsItem.subtitle}
            text={topNewsItem.text}
            time={topNewsItem.time}
            title={topNewsItem.title}
            type={topNewsItem.type}
            img={topNewsItem.img}
          />
        )) || (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}

        <Sections titleSection="مسکن" type="maskan" />
        <Sections titleSection="ساخت و ساز" type="sakht" />
        <SaghfinoAdd />
        <Sections titleSection="اجاره" type="rent" />
      </div>
    </div>
  );
}

export default News;
