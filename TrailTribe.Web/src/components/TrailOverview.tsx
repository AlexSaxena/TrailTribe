import { useEffect, useState } from "react";
import L from "leaflet";

const TrailOverview = () => {
  const [trail, setTrail] = useState(null);

  const key1 = "key1";
  const key2 = "key2";
  const location = "location";

  useEffect(() => {
    const fetchTrail = async () => {
      const response = await fetch(
        `https://api-oa.com/api/v2/project/${key1}/contents/${location}?display=snippet&key=${key2}`
      );
      const data = await response.json();
      const trailData = data.answer.contents[0];
      setTrail(trailData);

      // Initialize the map
      const map = L.map("map");

      // Fit map to bounding boxs
      const bbox = trailData.bbox;
      const bounds = L.latLngBounds(
        [bbox[0][1], bbox[0][0]],
        [bbox[1][1], bbox[1][0]]
      );
      map.fitBounds(bounds);

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add rectangle to highlight bounding box
      const rectangle = L.rectangle(bounds, { color: "blue", weight: 2 });
      rectangle.addTo(map);

      // Add marker for the trail's main point
      L.marker([trailData.point[1], trailData.point[0]])
        .addTo(map)
        .bindPopup(trailData.title)
        .openPopup();

      return () => map.remove();
    };

    fetchTrail();
  }, []);

  if (!trail) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{trail.title}</h1>
      <p>{trail.teaserText}</p>
      <p>
        <strong>Distance:</strong> {(trail.metrics.length / 1000).toFixed(1)} km
      </p>
      <div
        id="map"
        style={{ height: "500px", width: "100%", marginTop: "20px" }}
      ></div>
    </div>
  );
};

export default TrailOverview;
