import MaskanBigNews from "../../components/news/MaskanBigNews";
import MaskanSmallNew from "../../components/news/MaskanSmallNew";

function NewSection() {
  return (
    <div className="flex w-full flex-col justify-center gap-2 ">
      <span className="    ps-5 text-xl font-bold">مسکن</span>
      <div className="flex justify-center ">
        <div className="grid  w-[85%] grid-flow-row gap-3    rounded-xl  lg:grid-cols-2">
          <MaskanBigNews />
          <div className=" grid  grid-cols-2 gap-2 md:grid-cols-1  md:grid-rows-2">
            <MaskanSmallNew />
            <MaskanSmallNew />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
