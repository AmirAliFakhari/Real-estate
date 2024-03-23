import DropDown from "../../components/DropDown";
import dropDownData from "../../services/data/dropDownData";
function Houses() {
  return (
    <div className="relative left-0 top-[80px]">
      <div className="flex flex-wrap justify-center gap-2 ">
        {dropDownData.data.map((data, index) => (
          <DropDown key={index} title={data.title} items={data.items} />
        ))}
      </div>
    </div>
  );
}

export default Houses;
