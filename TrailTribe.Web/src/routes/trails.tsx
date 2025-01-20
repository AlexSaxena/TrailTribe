import { createFileRoute } from "@tanstack/react-router";
import TrailCard from "../components/TrailCard";
import { useEffect, useState } from "react";
import forestTrail from "/ForestTrail.jpg";
import MountainTrail from "/MountainTrail.jpg";
import LakeSideTrail from "/TrailLakeSide.jpg";
import CabinWater from "/CabinWater.jpg";
import MountainMan from "/MountainMan.jpg";
import MountainLady from "/MountainLady.jpg";

export const Route = createFileRoute("/trails")({
  component: Trails,
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

function Trails() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const images = [
    forestTrail,
    MountainTrail,
    LakeSideTrail,
    CabinWater,
    MountainMan,
    MountainLady,
  ];

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const resp = await fetch("http://localhost:5127/api/Trail");
        if (!resp.ok) throw new Error("Failed to fetch trails.");
        const data: Trail[] = await resp.json();
        setTrails(data);
      } catch (error) {
        console.error("Fetch Trails Error:", error);
        setError(error.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrails();
  }, []);

  if (loading) {
    return <div className="text-center mt-6">Loading trails...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-6 text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center underline underline-offset-4">
        Trails of the Month
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trails.map((trail, index) => (
          <TrailCard
            key={trail.id}
            id={trail.id.toString()}
            title={trail.title}
            description={trail.description}
            image={images[index % images.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default Trails;
