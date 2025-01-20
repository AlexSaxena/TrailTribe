import { createFileRoute } from "@tanstack/react-router";
import TrailCard from "../components/TrailCard";

export const Route = createFileRoute("/trails")({
  component: Trails,
});

const dummyTrails = [
  {
    id: "1",
    title: "Mountain Adventure",
    description: "A thrilling hike across rocky mountains with scenic views.",
    image: "img-string",
  },
  {
    id: "2",
    title: "Forest Escape",
    description: "A peaceful walk through dense forests and wildlife habitats.",
    image: "img-string",
  },
  {
    id: "3",
    title: "Lakeside Trail",
    description: "A serene hike along the lake with stunning sunsets.",
    image: "img-string",
  },
];

function Trails() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
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
