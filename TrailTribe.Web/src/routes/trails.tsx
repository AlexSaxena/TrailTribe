import { createFileRoute } from "@tanstack/react-router";
import TrailCard from "../components/TrailCard";
import forestTrail from "/ForestTrail.jpg";
import MountainTrail from "/MountainTrail.jpg";
import LakeSideTrail from "/TrailLakeSide.jpg";

export const Route = createFileRoute("/trails")({
  component: Trails,
});

const dummyTrails = [
  {
    id: "1",
    title: "Mountain Adventure",
    description: "A thrilling hike across rocky mountains with scenic views.",
    image: MountainTrail,
  },
  {
    id: "2",
    title: "Forest Escape",
    description: "A peaceful walk through dense forests and wildlife habitats.",
    image: forestTrail,
  },
  {
    id: "3",
    title: "Lakeside Trail",
    description: "A serene hike along the lake with stunning sunsets.",
    image: LakeSideTrail,
  },
];

function Trails() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center underline underline-offset-4">
        Trails of the Month
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyTrails.map((trail) => (
          <TrailCard
            key={trail.id}
            id={trail.id}
            title={trail.title}
            description={trail.description}
            image={trail.image}
          />
        ))}
      </div>
    </div>
  );
}
