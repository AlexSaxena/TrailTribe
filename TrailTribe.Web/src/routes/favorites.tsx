import { createFileRoute } from "@tanstack/react-router";
import FavoriteCard from "../components/FavoriteCard";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});

type Favorite = {
  trailId: number;
  title: string;
  description: string;
  length: number;
  bBox: {
    southWestLat: number;
    southWestLng: number;
    northEastLat: number;
    northEastLng: number;
  };
  nodes: string[];
};

type ApiResponse = {
  id: number;
  name: string;
  favorites: Favorite[];
};

function Favorites() {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5127/api/User/1");
        if (!response.ok) throw new Error("Failed to fetch favorites.");
        const data: ApiResponse = await response.json();
        setFavorites(data.favorites);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <div className="text-center mt-6">Loading favorites...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-6 text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  console.log(favorites);

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((favorite) => (
            <FavoriteCard
              key={favorite.trailId}
              id={favorite.trailId.toString()}
              title={favorite.title}
              description={favorite.description}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-lg">
            You haven't added any trails to your favorites yet!
          </p>
          <a
            href="/trails"
            className="mt-4 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Explore Trails
          </a>
        </div>
      )}
    </div>
  );
}
