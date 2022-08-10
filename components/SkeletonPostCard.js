export const SkeletonPostCard = () => {
  return (
    <div className="py-5 sm:h-60">
      <div className="flex items-center space-x-2">
        <div className="bg-gray-200 animate-pulse h-9 w-9 rounded-full"></div>
        <div className="bg-gray-200 w-60 animate-pulse h-4 rounded-2xl"></div>
      </div>
      <div className="p-2 sm:p-4 sm:h-64 flex flex-col sm:flex-row gap-5 select-none">
        <div className="h-20 sm:h-20 sm:w-40 rounded-md bg-gray-200 animate-pulse"></div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="bg-gray-200 w-44 animate-pulse h-3 rounded-2xl"></div>

          <div className="flex flex-1 flex-col gap-3">
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
            <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
