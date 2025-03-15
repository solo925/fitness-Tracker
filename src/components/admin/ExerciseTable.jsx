import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { exerciseData } from "@/constants/admin/ExeciseData";

const ExerciseTable = () => {
  const [exercises, setExercises] = useState(exerciseData);

  const handleEdit = (id) => {
    console.log("Edit exercise with id:", id);
  };

  const handleDelete = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Exercises</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Equipment</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exercises.map((exercise) => (
            <TableRow key={exercise.id}>
              <TableCell>{exercise.id}</TableCell>
              <TableCell>{exercise.name}</TableCell>
              <TableCell>{exercise.category}</TableCell>
              <TableCell>{exercise.equipment}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => handleEdit(exercise.id)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(exercise.id)}>
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExerciseTable;
