import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-background">
      <div className="flex items-center justify-between p-4 mb-8 border-b border-border/50">
        <Skeleton className="h-8 w-36" />
        <div className="flex items-center gap-4">
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="space-y-6 lg:col-span-2 lg:space-y-8">
          <div className="p-6 rounded-lg shadow-md bg-card">
            <Skeleton className="w-1/3 h-6 mb-4" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-3/4 h-4" />
          </div>
          <div className="p-6 rounded-lg shadow-md bg-card">
            <Skeleton className="w-1/3 h-6 mb-4" />
            <Skeleton className="w-full h-40" />
          </div>
        </div>
        <div className="space-y-6 lg:col-span-1 lg:space-y-8">
          <div className="p-6 rounded-lg shadow-md bg-card">
            <Skeleton className="w-1/2 h-6 mb-4" />
            <div className="flex justify-around mt-6">
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="w-12 h-12 rounded-full" />
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-card">
            <Skeleton className="w-1/2 h-6 mb-4" />
            <div className="mt-4 space-y-3">
              <Skeleton className="w-full h-16" />
              <Skeleton className="w-full h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
