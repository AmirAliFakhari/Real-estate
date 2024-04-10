import FeaturesRow from "../../components/realState/FeaturesRow";

import car from "../../assets/icons/car.svg";
import house_2 from "../../assets/icons/house-2.svg";
import slider from "../../assets/icons/slider.svg";
import grid_2 from "../../assets/icons/grid-2.svg";
import fatrows from "../../assets/icons/fatrows.svg";
import receipt from "../../assets/icons/receipt.svg";
import snow from "../../assets/icons/snow.svg";
import sun from "../../assets/icons/sun.svg";

function Features({ title, state }) {
  return (
    <div className="mt-10 px-5 sm:ps-10">
      <span className="font-bold">{title}</span>
      <div className="flex w-full flex-wrap justify-between sm:w-[31rem]">
        <div className="mt-4 flex flex-col gap-2">
          <FeaturesRow
            state={state.parking}
            title="پارکینگ"
            src={<img className="w-fit" src={car} />}
          />
          <FeaturesRow
            state={state.basement}
            title="انباری"
            src={<img className="w-fit" src={house_2} />}
          />
          <FeaturesRow
            state={state.elevator}
            title="آسانسور"
            src={<img className="w-fit" src={slider} />}
          />
          <FeaturesRow
            state={state.Floor_Material}
            title="جنس کف"
            src={<img className="w-fit" src={grid_2} />}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <FeaturesRow
            state={state.WC}
            title="سرویس بهداشتی"
            src={<img className="w-fit" src={receipt} />}
          />
          <FeaturesRow
            state={state.WC_Type}
            title="نوع سریس بهداشتی"
            src={<img className="w-fit" src={fatrows} />}
          />
          <FeaturesRow
            state={state.Cooling_System}
            title="سیستم سرمایش"
            src={<img className="w-fit" src={snow} />}
          />
          <FeaturesRow
            state={state.Heating_System}
            title="سیستم گرمایش"
            src={<img className="w-fit" src={sun} />}
            s
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
