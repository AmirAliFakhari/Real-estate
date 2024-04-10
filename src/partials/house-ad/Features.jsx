import FeaturesRow from "../../components/realState/FeaturesRow";

function Features({ title, state }) {
  return (
    <div className="mt-10 px-5 sm:ps-10">
      <span className="font-bold">{title}</span>
      <div className="flex w-full flex-wrap justify-between sm:w-[31rem]">
        <div className="mt-4 flex flex-col gap-2">
          <FeaturesRow
            state={state.parking}
            title="پارکینگ"
            src={<img className="w-fit" src={`src/assets/icons/car.svg`} />}
          />
          <FeaturesRow state={state.basement} title="انباری" src="house-2" />
          <FeaturesRow state={state.elevator} title="آسانسور" src="slider" />
          <FeaturesRow
            state={state.Floor_Material}
            title="جنس کف"
            src="grid-2"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <FeaturesRow state={state.WC} title="سرویس بهداشتی" src="receipt" />
          <FeaturesRow
            state={state.WC_Type}
            title="نوع سریس بهداشتی"
            src="fatrows"
          />
          <FeaturesRow
            state={state.Cooling_System}
            title="سیستم سرمایش"
            src="snow"
          />
          <FeaturesRow
            state={state.Heating_System}
            title="سیستم گرمایش"
            src="sun"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
