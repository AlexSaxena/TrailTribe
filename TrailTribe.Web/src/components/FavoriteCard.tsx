import { Link } from "@tanstack/react-router";
import forestTrail from "/ForestTrail.jpg";
import MountainTrail from "/MountainTrail.jpg";
import LakeSideTrail from "/TrailLakeSide.jpg";
import CabinWater from "/CabinWater.jpg";
import MountainMan from "/MountainMan.jpg";
import MountainLady from "/MountainLady.jpg";

type FavoriteCardProps = {
  id: string;
  title: string;
  description: string;
  onRemoveFavorite: () => void;
};

const randomImages = [
  forestTrail,
  MountainTrail,
  LakeSideTrail,
  CabinWater,
  MountainMan,
  MountainLady,
];

const FavoriteCard: React.FC<FavoriteCardProps> = ({
  id,
  title,
  description,
  onRemoveFavorite,
}) => {
  const image = randomImages[parseInt(id) % randomImages.length];

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex gap-4">
          <Link
            to={`/trailDetails`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </Link>
          <button
            onClick={onRemoveFavorite}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
