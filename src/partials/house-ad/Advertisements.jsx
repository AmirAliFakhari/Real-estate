import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";
import HomeCart from "../houses/HouseCart";
// import useHouse from "../houses/useHouse";

function Advertisements() {
  const { getRegData } = useRegisterHouse();
  return (
    <div className="flex    flex-wrap items-baseline justify-center gap-5 sm:justify-start">
      {getRegData?.map((data) => (
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
