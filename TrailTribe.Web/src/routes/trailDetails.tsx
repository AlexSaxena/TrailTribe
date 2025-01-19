import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/trailDetails")({
  component: TrailDetails,
});

function TrailDetails() {
  return (
    <div>
      <div className="mt-4">Hello From Trail Details</div>
    </div>
  );
}
