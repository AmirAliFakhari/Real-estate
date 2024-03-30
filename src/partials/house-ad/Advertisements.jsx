import { useEffect } from "react";
import useFilterRegHouse from "../../services/registerHouse/useFilterRegHouse";
import HomeCart from "../houses/HouseCart";
import { filterRegHouse } from "../../services/registerHouse/registerHouseAPI";

function Advertisements({ selectedItems }) {
  const { isLoading, data } = useFilterRegHouse(selectedItems);

  useEffect(() => {
    filterRegHouse(selectedItems);
  }, [selectedItems, filterRegHouse]);

  if (isLoading) return <div>salam</div>;
  console.log(data);
  return (
    <div className="flex flex-wrap items-baseline justify-center gap-5 sm:justify-start">
      {data?.map((data) => (
        <HomeCart
          time={data.created_at}
          key={data.id}
          image_id={data.image_id}
          monthPrice={data.rent}
          mortgage={data.mortgage}
          state={data.state}
          street={data.street}
          title={data.grouping}
          area={data.area}
        />
      ))}
    </div>
  );
}

export default Advertisements;
