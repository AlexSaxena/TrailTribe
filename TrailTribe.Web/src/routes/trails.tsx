import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/trails")({
  component: Trails,
});

function Trails() {
  return <div>Hello "/trails"!</div>;
}
