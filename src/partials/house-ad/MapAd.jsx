import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import useRegisterHouse from "../../pages/RegisterHouse/useRegisterHouse";
import mark from "../../../node_modules/leaflet/dist/images/marker-icon-2x.png";

const customIcon = L.icon({
  iconUrl: mark,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

function MapAd() {
  const { getRegData } = useRegisterHouse();

  return (
    <MapContainer
      center={[32.4279, 53.688]}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%", borderRadius: "20px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {getRegData?.map((data, index) => (
        <Marker
          key={index}
          title="salam"
          position={[data?.lat, data?.long]}
          icon={customIcon}
        >
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

export default MapAd;
