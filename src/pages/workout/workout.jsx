import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useExercises from "@/hooks/useExercise";

const Workouts = () => {
  const { exercises, loading, error } = useExercises();

  if (loading) return <p>Loading exercises...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Workout Exercises</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {exercises.slice(0, 10).map((exercise) => (
          <Card key={exercise.id} className="shadow-md">
            <CardHeader>
              <CardTitle>{exercise.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Target:</strong> {exercise.target}</p>
              <p><strong>Equipment:</strong> {exercise.equipment}</p>
              <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-32 object-cover mt-2"/>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
