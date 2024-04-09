import { useParams } from "react-router-dom";
import useEachNews from "./useEachNew";
import RelatedNews from "../../components/news/RelatedNews";
import HeaderNews from "../../components/news/HeaderNews";
import SectionsNews from "../../components/news/SectionsNews";
import useRelatedSNews from "./useRelatedNews";
import Spinner from "../../features/Spinner";

function EachNew() {
  const { idNews } = useParams();
  const { isLoading, data } = useEachNews({ idNews });
  const { data: relatedNewsData, isLoading: isLoadingRelatedNews } =
    useRelatedSNews(!isLoading && data[0].type);
  const {
    created_at,
    time,
    subtitle,
    title,
    picture,
    firstSectionTitle,
    firstSectionText,
    secondSectionTitle,
    secondSectionText,
    thirdSectionTitle,
    thirdSectionText,
  } = !isLoading && data[0];

  if (isLoading)
    return (
      <div className="relative left-0 top-[80px]">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    );
  else {
    return (
      <div className="relative left-0 top-[80px]">
        <HeaderNews
          created_at={created_at}
          subtitle={subtitle}
          time={time}
          title={time}
        />
        <div className="mt-5 flex justify-center px-2">
          <div className="grid w-[85%] grid-cols-3 gap-5">
            <SectionsNews
              firstSectionText={firstSectionText}
              secondSectionText={secondSectionText}
              thirdSectionText={thirdSectionText}
              firstSectionTitle={firstSectionTitle}
              picture={picture}
              secondSectionTitle={secondSectionTitle}
              thirdSectionTitle={thirdSectionTitle}
            />
            <div className="lg:col-grid-1 col-span-full grid h-[20rem] rounded-lg  bg-slate-50    lg:col-span-1 lg:h-[40rem]  ">
              <span className="ms-2 mt-5 font-bold">اخبار مرتبط</span>
              <div className="overflow-y-scroll">
                {!isLoadingRelatedNews &&
                  relatedNewsData.map((item) => (
                    <RelatedNews
                      time={item.time}
                      key={item.img}
                      title={item.title}
                      img={item.img}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EachNew;
