import { Skeleton } from "@/components/ui/skeleton";

const LoaderS = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="shadow-md p-4 rounded-lg">
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default LoaderS;
