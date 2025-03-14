import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

const Exercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([
    { id: 1, name: "Push-up", category: "Strength", equipment: "None" },
    { id: 2, name: "Squat", category: "Strength", equipment: "None" },
    { id: 3, name: "Deadlift", category: "Strength", equipment: "Barbell" },
  ]);

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Exercises</h2>
      <div className="mb-4 flex gap-2">
        <Input
          placeholder="Search exercises..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>Add Exercise</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Equipment</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredExercises.map((exercise) => (
            <TableRow key={exercise.id}>
              <TableCell>{exercise.name}</TableCell>
              <TableCell>{exercise.category}</TableCell>
              <TableCell>{exercise.equipment}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(exercise.id)}>
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Exercises;
