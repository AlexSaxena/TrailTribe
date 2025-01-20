import { createFileRoute } from "@tanstack/react-router";
import FavoriteCard from "../components/FavoriteCard";

export const Route = createFileRoute("/favorites")({
  component: Favorites,
});

const dummyFavorites = [
  {
    id: "1",
    title: "Mountain Adventure",
    description: "A thrilling hike across rocky mountains with scenic views.",
    image: "/MountainTrail.jpg",
  },
  {
    id: "2",
    title: "Forest Escape",
    description: "A peaceful walk through dense forests and wildlife habitats.",
    image: "/ForestTrail.jpg",
  },
];

function Favorites() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Favorites</h1>
      {dummyFavorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyFavorites.map((favorite) => (
            <FavoriteCard
              key={favorite.id}
              id={favorite.id}
              title={favorite.title}
              description={favorite.description}
              image={favorite.image}
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

export default Favorites;
