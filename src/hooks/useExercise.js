import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

const useExercises = (searchTerm = "", muscle = "", equipment = "") => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchExercises = async () => {
    try {
      setLoading(true);
      let url = `https://wger.de/api/v2/exercise/?limit=10&offset=${(page - 1) * 10}`;

      if (searchTerm) url += `&name=${searchTerm}`;
      if (muscle) url += `&muscles=${muscle}`;
      if (equipment) url += `&equipment=${equipment}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch exercises");
      const data = await response.json();

      const exercisesWithImages = await Promise.all(
        data.results.map(async (exercise) => {
          const imgResponse = await fetch(`https://wger.de/api/v2/exerciseimage/?exercise=${exercise.id}`);
          const imgData = await imgResponse.json();
          return { ...exercise, images: imgData.results };
        })
      );

      setExercises((prev) => [...prev, ...exercisesWithImages]); // Append new results
      setHasMore(data.results.length > 0); // Check if there are more results
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Debounce API calls
  const debouncedFetchExercises = useCallback(debounce(fetchExercises, 500), [searchTerm, muscle, equipment, page]);

  useEffect(() => {
    debouncedFetchExercises();
  }, [searchTerm, muscle, equipment, page, debouncedFetchExercises]);

  return { exercises, loading, error, hasMore, setPage };
};

export default useExercises;
