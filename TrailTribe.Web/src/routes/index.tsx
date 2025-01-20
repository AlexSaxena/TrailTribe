import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Users, MapPin, Compass } from "lucide-react";

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
              className="px-6 py-3 hover:bg-dark bg-green-700 text-white font-medium rounded-lg"
            >
              Explore Trails
            </Link>
            <button className="px-6 py-3 bg-primary hover:bg-orange-700 text-white font-medium rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8 underline underline-offset-8 text-primary">
          Why Trail Tribe?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <ShieldCheck className="h-12 w-12 text-accent dark:text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Secure Favorites
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Save your favorite trails privately and access them anytime.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <Users className="h-12 w-12 text-accent dark:text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Buddy System
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Find and hike with like-minded trail enthusiasts.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <MapPin className="h-12 w-12 text-primary dark:text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Explore Top Trails
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover the most scenic and adventurous trails worldwide.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <Compass className="h-12 w-12 text-primary dark:text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Plan Your Adventures
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use our tools to prepare for your next hiking experience.
            </p>
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
