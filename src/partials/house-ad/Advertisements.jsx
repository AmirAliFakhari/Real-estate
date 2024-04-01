import { useEffect } from "react";
import useFilterRegHouse from "../../services/registerHouse/useFilterRegHouse";
import HomeCart from "../houses/HouseCart";
import { filterRegHouse } from "../../services/registerHouse/registerHouseAPI";
import Spinner from "../../features/Spinner";

function Advertisements({ selectedItems, rangeValue }) {
  const { isLoading, data } = useFilterRegHouse(selectedItems, rangeValue);

  useEffect(() => {
    filterRegHouse();
  }, []);

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center">
        <Spinner />
        <span>وایسا پیدا کنم</span>
      </div>
    );
  else if (!data || data.length === 0)
    return <div>چنین آگهی وجود نداره (:</div>;

  return (
    <div className="mb-2 flex flex-wrap items-baseline justify-center gap-5 sm:justify-start">
      {data?.map((data) => (
        <HomeCart
          time={data.created_at}
          key={data.id}
          image_id={data.image_id}
          monthPrice={data.rent}
          mortgage={data.mortgage}
          state={data.state}
          street={data.street}
          title={data.name}
          area={data.area}
          city={data.city}
          room={data.room}
          number_floors={data.number_floors}
          rent={data.rent}
          parking={data.parking}
          basement={data.basement}
          Floor_Material={data.Floor_Material}
          WC_Type={data.WC_Type}
          Cooling_System={data.Cooling_System}
          Heating_System={data.Heating_System}
          elevator={data.elevator}
          WC={data.WC}
          long={data.long}
          lat={data.lat}
        />
      ))}
    </div>
  );
}

export default Advertisements;
