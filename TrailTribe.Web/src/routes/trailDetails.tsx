import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/trailDetails")({
  component: TrailDetails,
});

type Trail = {
  id: number;
  title: string;
  description: string;
  length: number;
  bbox: {
    southWestLat: number;
    southWestLng: number;
    northEastLat: number;
    northEastLng: number;
  };
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
    <div className="mt-4">
      <h1 className="text-2xl font-bold">{trail.title}</h1>
      <p className="mt-2">{trail.description}</p>
      <p className="mt-2">
        <strong>Length:</strong> {trail.length} km
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Map Section</h2>
        <div className="w-full h-64 bg-gray-300 rounded-lg">
          Map Placeholder
        </div>
      </div>
    </div>
  );
}

export default TrailDetails;
