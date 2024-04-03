import useMyAdds from "./useMyAdds";
import HomeCart from "../houses/HouseCart";

function MyAdds() {
  const { isLoading, data } = useMyAdds();
  return (
    <div className="flex flex-col gap-5 ps-5">
      <span className="font-bold">آگهی های من</span>
      <div className="flex flex-wrap justify-center  gap-5 pb-2 lg:justify-stretch">
        {!isLoading &&
          data?.map((data) => (
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
    </div>
  );
}

export default MyAdds;
