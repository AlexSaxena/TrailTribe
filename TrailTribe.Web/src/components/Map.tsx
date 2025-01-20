import { useEffect, useRef } from "react";
import L from "leaflet";

type MapProps = {
  southWestLat: number;
  southWestLng: number;
  northEastLat: number;
  northEastLng: number;
  nodes: string[];
};

const Map: React.FC<MapProps> = ({
  southWestLat,
  southWestLng,
  northEastLat,
  northEastLng,
  nodes,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Ensure the map is not re-initialized on every render
    const map = L.map(mapContainerRef.current);

    // Define bounds and fit the map to them
    const bounds = L.latLngBounds(
      [southWestLat, southWestLng],
      [northEastLat, northEastLng]
    );
    map.fitBounds(bounds);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Plot nodes if available
    if (nodes.length > 1) {
      const latLngs = nodes.map((node) => {
        const [lat, lng] = node.split(",").map(Number);
        return [lat, lng] as [number, number];
      });

      // Draw polyline and add markers
      L.polyline(latLngs, { color: "blue", weight: 3 }).addTo(map);
      L.marker(latLngs[0], { title: "Start" }).addTo(map);
      L.marker(latLngs[latLngs.length - 1], { title: "End" }).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [southWestLat, southWestLng, northEastLat, northEastLng, nodes]);

  return (
    <div>
      <div
        ref={mapContainerRef}
        style={{ height: "500px", width: "100%", marginTop: "20px" }}
      />
    </div>
  );
};

export default Map;
