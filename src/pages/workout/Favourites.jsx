import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartOff } from "lucide-react";
import FavoritesContext from "@/contexts/FavouritesContext";

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Favorite Workouts ❤️</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500 italic">No favorite workouts yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((exercise) => (
            <motion.div
              key={exercise.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="shadow-md transform-gpu relative">
                {/* Remove Favorite Button */}
                <button
                  className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white"
                  onClick={() => toggleFavorite(exercise)}
                >
                  <HeartOff className="w-5 h-5" />
                </button>

                <CardHeader>
                  <CardTitle>{exercise.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Target:</strong> {exercise.category?.name || "Men"}</p>
                  <p><strong>Equipment:</strong> {exercise.equipment || "None"}</p>

                  {exercise.images?.length > 0 ? (
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
