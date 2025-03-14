import { createContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
  ]);

  
  const [exercises, setExercises] = useState([
    { id: 1, name: "Push-Up", category: "Strength", equipment: "None" },
    { id: 2, name: "Squat", category: "Strength", equipment: "None" },
  ]);

  
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, { id: Date.now(), ...user }]);
  };

  const removeUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const addExercise = (exercise) => {
    setExercises((prevExercises) => [...prevExercises, { id: Date.now(), ...exercise }]);
  };

  
  const removeExercise = (id) => {
    setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.id !== id));
  };

  return (
    <AdminContext.Provider value={{ users, exercises, addUser, removeUser, addExercise, removeExercise }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
