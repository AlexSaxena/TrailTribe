import { Link } from "@tanstack/react-router";

type FavoriteCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const FavoriteCard: React.FC<FavoriteCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
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
            onClick={() => alert(`Removed trail ${id} from favorites`)}
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
