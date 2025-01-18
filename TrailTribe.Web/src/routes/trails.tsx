import { createFileRoute } from "@tanstack/react-router";
import TrailOverview from "../components/TrailOverview";

export const Route = createFileRoute("/trails")({
  component: Trails,
});

function Trails() {
  return (
    <div>
      <div className="mt-4">
        <TrailOverview />
      </div>
    </div>
  );
}
