import ShowHomeIcon from "./ShowHomeIcon";

function ShowHomeIconRow({ state }) {
  return (
    <>
      <ShowHomeIcon
        src="src\assets\icons\ruler&pen.svg"
        title="متراژ"
        unit="متر"
        state={state.area}
      />
      <ShowHomeIcon
        src="src\assets\icons\lamp.svg"
        title="اتاق"
        unit="خواب"
        state={state.room}
      />
      <ShowHomeIcon
        src="src\assets\icons\buliding.svg"
        title="طبقه"
        unit="تا"
        state={state.number_floors}
      />
    </>
  );
}

export default ShowHomeIconRow;
