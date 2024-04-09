import ShowHomeIcon from "./ShowHomeIcon";
import ruler_pen from "../../assets/icons/ruler&pen.svg";
import lamp from "../../assets/icons/lamp.svg";
import bulding from "../../assets/icons/buliding.svg";

function ShowHomeIconRow({ state }) {
  return (
    <>
      <ShowHomeIcon
        src={ruler_pen}
        title="متراژ"
        unit="متر"
        state={state.area}
      />
      <ShowHomeIcon src={lamp} title="اتاق" unit="خواب" state={state.room} />
      <ShowHomeIcon
        src={bulding}
        title="طبقه"
        unit="تا"
        state={state.number_floors}
      />
    </>
  );
}

export default ShowHomeIconRow;
