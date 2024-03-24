import HomeCart from "../houses/HouseCart";
import useHouse from "../houses/useHouse";

function Advertisements() {
  const { data } = useHouse();

  return (
    <div className="flex flex-grow flex-wrap items-center justify-start gap-5">
      {data?.map((data) => (
        <HomeCart
          time={data.created_at}
          key={data.id}
          homeImg={data.img}
          monthPrice={data.rent_price}
          mortgage={data.mortgage_price}
          subTitle={data.subtitle}
          title={data.grouping}
        />
      ))}
    </div>
  );
}

export default Advertisements;
