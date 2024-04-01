import ExplainRow from "./ExplainRow";

function Explain() {
  return (
    <div className="mt-10 px-5 sm:ps-10">
      <span className="font-bold">توضیحات</span>
      <div className="flex w-full flex-wrap justify-between sm:w-[31rem]">
        <div className="flex flex-col  gap-1">
          <ExplainRow title="نوع بنا" state="نوساز" />
          <ExplainRow title="موقعیت جغرافیایی" state="شمالی" />
          <ExplainRow title="نوع سند" state="شخصی" />
          <ExplainRow title="نوع بنا" state="نوساز" />
        </div>
      </div>
    </div>
  );
}

export default Explain;
