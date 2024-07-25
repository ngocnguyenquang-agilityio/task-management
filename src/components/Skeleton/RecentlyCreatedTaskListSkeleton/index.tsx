// Constants
import { LIMIT_ITEMS } from '@/constants';

// Components
import { OverviewCardSkeleton } from '../OverviewCardSkeleton';

type RecentlyCreatedTaskListSkeletonProps = {
  totalItems?: number;
};

export const RecentlyCreatedTaskListSkeleton = ({
  totalItems = LIMIT_ITEMS.RECENTLY_TASK,
}: RecentlyCreatedTaskListSkeletonProps) => (
  <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg h-full">
    <div className="animate-pulse h-10 w-20 bg-gray-200 rounded-lg dark:bg-gray-700 mb-4" />
    <div className="flex flex-col gap-4 pt-3 ">
      {[...Array(totalItems)].map((_, index) => (
        <OverviewCardSkeleton
          key={`recently-created-task-card-${index}`}
          isRowDisplay={true}
          customClass={{
            image: 'w-full h-full aspect-video md:aspect-square md:max-w-20',
          }}
        />
      ))}
    </div>
  </div>
);
