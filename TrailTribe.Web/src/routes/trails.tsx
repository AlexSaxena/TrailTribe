import { createFileRoute } from "@tanstack/react-router";
import TrailCard from "../components/TrailCard";
import { useEffect, useState } from "react";

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
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userId = 1;

  useEffect(() => {
    const fetchTrailsAndFavorites = async () => {
      try {
        const trailsResponse = await fetch("http://localhost:5127/api/Trail");
        const trailsData = await trailsResponse.json();
        setTrails(trailsData);

        const favoritesResponse = await fetch(
          `http://localhost:5127/api/Favorite/user/${userId}`
        );
        const favoritesData = await favoritesResponse.json();
        const favoriteIds = new Set(
          favoritesData.map((fav: any) => fav.trailId)
        );
        setFavorites(favoriteIds);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(error.message || "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrailsAndFavorites();
  }, [userId]);

  const handleAddToFavorites = async (trailId: string) => {
    try {
      await fetch("http://localhost:5127/api/Favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          trailId: parseInt(trailId, 10),
        }),
      });
      setFavorites((prev) => new Set(prev).add(parseInt(trailId, 10)));
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  if (loading) {
    return <div>Loading trails...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center underline underline-offset-4">
        Trails of the Month
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trails.map((trail) => (
          <TrailCard
            key={trail.id}
            id={trail.id.toString()}
            title={trail.title}
            description={trail.description}
            isFavorite={favorites.has(trail.id)}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
}

export default Trails;
