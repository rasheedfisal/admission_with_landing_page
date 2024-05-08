import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { MarkerIcon, SchoolMarkerIcon } from "../icons/MarkerIcon";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "react-leaflet-fullscreen/styles.css";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";

const DefaultZoom = 8;

const schoolsLocation = [
  {
    name: "Cairo School of Management",
    address: "17B Obor Buildings, Salah Salem St",
    latlong: [30.036069973693323, 31.297988891601566],
  },
  {
    name: "Ahlan Arabic Centre",
    address: "7 Gamal Al Din Abou Al Mahasen",
    latlong: [30.001650967084316, 31.487503051757816],
  },
  {
    name: "Sakkara Language School Maadi",
    address: "X866+5C5",
    latlong: [29.92225486337381, 30.93063354492188],
  },
  {
    name: "Capital International Schools",
    address: "Area 17 KH",
    latlong: [30.02878884408324, 31.233100891113285],
  },
];

const LeafletControl = ({ defaultLocation, setLocation }) => {
  const map = useRef();
  const [selectedPosition, setSelectedPosition] = useState(defaultLocation);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setSelectedPosition([latitude, longitude]);
      map.current?.flyTo({ lat: latitude, lng: longitude }, 18);
    });
  }, [map]);

  useEffect(() => {
    setLocation(selectedPosition);
  }, [selectedPosition, setLocation]);

  const SearchBar = (props) => {
    const map = useMap(); // access to leaflet map
    const { provider } = props;

    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider,
        showMarker: true,
        autoClose: true,
      });

      map.addControl(searchControl); // this is how you add a control in vanilla leaflet
      return () => map.removeControl(searchControl);
    }, [props, map, provider]);

    return null; // don't want anything to show up from this comp
  };

  const SchoolMarkers = () => {
    return schoolsLocation.map((loc, key) => {
      return (
        <Marker
          key={key}
          position={loc.latlong}
          // interactive={false}
          icon={SchoolMarkerIcon}
        >
          <Popup>{`${loc.name}, ${loc.address}`}</Popup>
        </Marker>
      );
    });
  };

  const LocationMarker = ({ map }) => {
    const [position, setPosition] = useState(selectedPosition);
    const markerRef = useRef(null);

    const currentMap = map?.current;

    const onClick = useCallback((e) => {
      setPosition(e.latlng);
      setSelectedPosition([e.latlng.lat, e.latlng.lng]);
    }, []);

    useEffect(() => {
      currentMap?.on("click", onClick);
      return () => {
        currentMap?.off("click", onClick);
      };
    }, [currentMap, onClick]);

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
            setSelectedPosition([
              marker.getLatLng().lat,
              marker.getLatLng().lng,
            ]);
          }
        },
      }),
      []
    );

    return position === null ? null : (
      <FeatureGroup interactive={true}>
        <Marker
          position={position}
          icon={MarkerIcon}
          draggable
          eventHandlers={eventHandlers}
          //   ondrag={handleMarkerDrag}
          ref={markerRef}
        >
          {/* <Popup>You are within {radius} meters from this point</Popup> */}
        </Marker>
        {/* <Circle radius={radius} center={position} /> */}
      </FeatureGroup>
    );
  };

  const isNotZero = (obj) => {
    return obj[0] !== 0 && obj[1] !== 0;
  };

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={isNotZero(selectedPosition) ? selectedPosition : [0, 0]}
        // center={[19.61745, 37.21644]}
        zoom={DefaultZoom}
        style={{ height: "35vh" }}
        ref={map}
      >
        {/* <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
              /> */}
        <TileLayer
          url={
            "https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          }
          attribution="google maps"
        />
        <SearchBar provider={new OpenStreetMapProvider()} />
        <SchoolMarkers />
        {/* <Markers /> */}
        {map ? <LocationMarker map={map} /> : null}

        <FullscreenControl />
      </MapContainer>
    ),
    [map, selectedPosition]
  );
  return <div className="w-full">{displayMap}</div>;
};

export default LeafletControl;
