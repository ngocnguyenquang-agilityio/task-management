// Constants
import { LIMIT_ITEMS } from '@/constants';

// Components
import { StatCardSkeleton } from '../StatCardSkeleton';

type TaskListSkeletonProps = {
  totalItems?: number;
};

export const TaskListSkeleton = ({
  totalItems = LIMIT_ITEMS.BOARD_PAGE,
}: TaskListSkeletonProps) => (
  <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg">
    <div className="animate-pulse h-10 w-20 bg-gray-200 rounded-lg dark:bg-gray-700  mb-4" />
    <div className="grid grid-cols-2 md:grid-cols-3 gap-7 pt-3">
      {[...Array(totalItems)].map((_, index) => (
        <StatCardSkeleton key={`stat-card-${index}`} />
      ))}
    </div>
  </div>
);
