import NewSection from "../../partials/news/NewSection";
import TopNews from "../../partials/news/TopNews";

function News() {
  return (
    <div className="relative left-0 top-[80px]">
      <span className="ps-5 text-xl font-bold">اخبار املاک</span>
      <div className="flex flex-col gap-20">
        <TopNews
        // calender={calender}
        // subtitle={subtitle}
        // text={text}
        // time={time}
        // title={title}
        />
        <NewSection />
      </div>
    </div>
  );
}

export default News;
