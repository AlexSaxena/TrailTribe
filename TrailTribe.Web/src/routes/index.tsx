import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4 rounded-md">
          <h1 className="text-4xl font-bold mb-4">Welcome to TrailTribe</h1>
          <p className="text-lg mb-6">
            Discover, explore, and save your favorite hiking trails.
          </p>
          <div className="flex gap-4">
            <Link
              to="/trails"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg"
            >
              Explore Trails
            </Link>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      <section className="mt-5 py-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why TrailTribe?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Explore Trails</h3>
            <p>Find the best hiking trails in your area or worldwide.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Save Favorites</h3>
            <p>Keep a list of your favorite trails and access them anytime.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Plan Adventures</h3>
            <p>Get inspired and plan your next hiking trip with ease.</p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Trails of the Month</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/ForestTrail.jpg"
              alt="Forest Trail"
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold mt-4">Forest Escape</h3>
            <p className="text-sm text-gray-600 mt-2">
              A peaceful walk through dense forests and wildlife habitats.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/MountainTrail.jpg"
              alt="Mountain Trail"
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold mt-4">Mountain Adventure</h3>
            <p className="text-sm text-gray-600 mt-2">
              A thrilling hike across rocky mountains with scenic views.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/CabinWater.jpg"
              alt="Lake Side Trail"
              className="rounded-t-lg w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold mt-4">Lakeside Serenity</h3>
            <p className="text-sm text-gray-600 mt-2">
              A serene hike along the lake with stunning sunsets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
