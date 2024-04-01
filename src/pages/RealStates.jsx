import RealStateBox from "../partials/RealStates/RealStateBox";

function RealStates() {
  return (
    <div className="relative left-0 top-[80px]">
      <div className="flex flex-col gap-5 ps-10 ">
        <span className="font-bold">املاک و مستغلات</span>
        <div className="flex flex-wrap justify-center gap-8">
          <RealStateBox />
        </div>
      </div>
    </div>
  );
}

export default RealStates;
