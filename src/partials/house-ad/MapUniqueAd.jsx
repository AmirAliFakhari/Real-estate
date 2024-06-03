import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import mark from "../../../node_modules/leaflet/dist/images/marker-icon-2x.png";

const customIcon = L.icon({
  iconUrl: mark,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  tooltipAnchor: [16, -28],
  shadowUrl: mark,
  shadowSize: [41, 41],
});

function MapUniqueAd({ long, lat, state }) {
  return (
    <MapContainer
      center={[32.4279, 53.688]}
      zoom={6}
      scrollWheelZoom={false}
      // className="mapUnique"
      style={{
        height: "80vh",
        width: "80%",
        borderRadius: "20px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker title="house" position={[lat, long]} icon={customIcon}>
        <Tooltip direction="center" offset={[100, 0]}>
          <div className="flex flex-col items-center justify-center font-bold">
            <span> قیمیت اجاره: {state.rent}</span>
            <span> قیمت رهن : {state.mortgage}</span>
            <img
              src="https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/apartments/1057726-registerHouse.png"
              className="w-full"
            />
          </div>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}

export default MapUniqueAd;
