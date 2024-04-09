import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

function MapUniqueAd({ long, lat, state }) {
  return (
    <MapContainer
      center={[32.4279, 53.688]}
      zoom={6}
      scrollWheelZoom={false}
      //   className="mapUnique"
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
      <Marker title="salam" position={[lat, long]}>
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
