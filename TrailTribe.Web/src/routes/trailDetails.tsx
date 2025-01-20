import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import MountainTrail from "/MountainTrail.jpg"; // Example image import

export const Route = createFileRoute("/trailDetails")({
  component: TrailDetails,
});

type Trail = {
  id: number;
  title: string;
  description: string;
  trailId: string;
  length: number;
  bBoxSouthWestLat: number;
  bBoxSouthWestLng: number;
  bBoxNorthEastLat: number;
  bBoxNorthEastLng: number;
  nodes: string[];
};

function TrailDetails() {
  const [trail, setTrail] = useState<Trail | null>(null);

  useEffect(() => {
    const fetchTrail = async () => {
      try {
        const response = await fetch("http://localhost:5127/api/Trail/1");
        const data = await response.json();
        setTrail(data);
      } catch (error) {
        console.error("Error fetching trail data:", error);
      }
    };

    fetchTrail();
  }, []);

  if (!trail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center mt-4 px-6">
      <div className="flex flex-col space-y-6 items-center text-center">
        <h1 className="text-3xl font-extrabold text-green-800">
          {trail.title}
        </h1>
        <p className="text-lg text-gray-700">{trail.description}</p>
        <p className="text-base">
          <strong>Length:</strong> {trail.length} km
        </p>
        <p className="text-base">
          <strong>Difficulty:</strong> Level 5
        </p>
        <img
          src={MountainTrail}
          alt={trail.title}
          className="w-full max-w-lg h-auto rounded-lg shadow-lg mx-auto border border-gray-200"
        />
      </div>

      <div className="h-full">
        <h2 className="text-3xl font-bold mb-4 text-green-800 text-center">
          Trail Map
        </h2>
        <Map
          southWestLat={trail.bBoxSouthWestLat}
          southWestLng={trail.bBoxSouthWestLng}
          northEastLat={trail.bBoxNorthEastLat}
          northEastLng={trail.bBoxNorthEastLng}
          nodes={trail.nodes}
        />
      </div>
    </div>
  );
}

export default TrailDetails;
