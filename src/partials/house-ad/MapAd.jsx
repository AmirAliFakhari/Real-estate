import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
// import { iconPerson } from "./salam";
import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";
import { Link } from "react-router-dom";

function MapWithText() {
  const { getRegData } = useRegisterHouse();

  // const positions = [
  //   { latitude: 31.8974, longitude: 54.3606, text: "Yazd" },
  //   { latitude: 35.7058, longitude: 51.3988, text: "Tehran" },
  //   { latitude: 34.6423, longitude: 50.8746, text: "Qom" },
  // ];

  return (
    <MapContainer
      center={[32.4279, 53.688]} // Center of Iran (approximate)
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {getRegData?.map((data, index) => (
        <Marker
          key={index}
          title="salam"
          // icon={iconPerson}
          position={[data?.lat, data?.long]}
        >
          {/* <ImageOverlay url="https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/apartments/1057726-registerHouse.png" /> */}
          <Tooltip direction="center" offset={[100, 0]}>
            <div className="flex flex-col items-center justify-center font-bold">
              <span> قیمیت اجاره: {data.rent}</span>
              <span> قیمت رهن : {data.mortgage}</span>
              <img
                src="https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/apartments/1057726-registerHouse.png"
                alt=""
                className="w-full"
              />
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapWithText;
