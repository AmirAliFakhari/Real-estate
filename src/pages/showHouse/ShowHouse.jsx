import { useParams, useSearchParams } from "react-router-dom";

function ShowHouses() {
  const { image_id } = useParams();
  console.log(image_id);
  return (
    <>
      <div className="relative left-0 top-[80px]">
        <div className="flex justify-center">
          <img
            src={`https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/apartments/${image_id}-registerHouse.png`}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default ShowHouses;
