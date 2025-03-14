import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useExercises from "@/hooks/useExercise";
import Loader from "@/layout/Loader";
import FavoritesContext from "@/contexts/FavouritesContext";
import { Heart, Search } from "lucide-react";

const Workouts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const { exercises, loading, error } = useExercises(searchTerm);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Workout Exercises</h2>

      {/* Search Field */}
      <div className="flex items-center gap-2 mb-6">
        <Search className="text-gray-500" />
        <Input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {loading && <Loader />}

      <div className="grid md:grid-cols-3 gap-6">
        {exercises.length > 0 ? (
          exercises.map((exercise) => {
            const isFavorite = favorites.some((fav) => fav.id === exercise.id);

            return (
              <motion.div
                key={exercise.id}
                whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="perspective-1000"
              >
                <Card className="shadow-md transform-gpu relative">
                  {/* Favorite Button */}
                  <button
                    className={`absolute top-3 right-3 p-2 rounded-full ${
                      isFavorite ? "bg-red-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => toggleFavorite(exercise)}
                  >
                    <Heart className="w-5 h-5 cursor-pointer" />
                  </button>

                  <CardHeader>
                    <CardTitle>{exercise.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Target:</strong> {exercise.category?.name || "Men"}</p>
                    <p><strong>Equipment:</strong> {exercise.equipment || "None"}</p>

                    {exercise.images.length > 0 ? (
                      <img
                        src={exercise.images[0].image}
                        alt={exercise.name}
                        className="w-full h-32 object-cover mt-2 rounded-lg"
                      />
                    ) : (
                      <p className="text-gray-500 italic">No image available</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        ) : (
          !loading && <p className="text-gray-500 text-center col-span-3">No exercises found.</p>
        )}
      </div>
    </div>
  );
};

export default Workouts;
