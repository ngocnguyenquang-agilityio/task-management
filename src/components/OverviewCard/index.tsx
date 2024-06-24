import Link from 'next/link';

// Components
import ImageWithFallback from '../ImageWithFallback';

// Utils
import { cn } from '@/utils';

type OverviewCardProps = {
  href: string;
  title: string;
  description: string;
  imageSrc?: string;
  time?: string;
  isRowDisplay?: boolean;
  badge?: React.ReactNode;
  avatarSrc?: string;
  customClass?: {
    wrapper?: string;
    image?: string;
    title?: string;
    time?: string;
    description?: string;
    avatar?: string;
  };
};

export const OverviewCard = ({
  href,
  title,
  description,
  imageSrc,
  time,
  isRowDisplay = false,
  badge,
  avatarSrc,
  customClass,
}: OverviewCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col border rounded-lg p-5 dark:bg-zinc-800 dark:border-gray-700',
        imageSrc && 'gap-4',
        isRowDisplay && 'md:flex-row gap-4',
        customClass?.wrapper,
      )}
    >
      <div
        className={cn(
          'relative block bg-zinc-200 rounded-lg',
          imageSrc && 'aspect-video',
          isRowDisplay && 'flex-1 md:basis-2/5',
          customClass?.image,
        )}
      >
        {imageSrc && (
          <ImageWithFallback
            src={imageSrc}
            alt={title}
            priority
            fill
            style={{ borderRadius: '8px' }}
          />
        )}
      </div>
      <div
        className={cn(
          'flex flex-1 flex-col gap-1 dark:text-white min-w-0',
          isRowDisplay && 'md:basis-3/5',
        )}
      >
        {badge}
        <div className="flex justify-between items-center ">
          <div className={cn('text-md font-bold truncate', customClass?.title)}>
            {title}
          </div>
          {time && (
            <div
              className={cn(
                'font-normal text-xs text-zinc-500',
                customClass?.time,
              )}
            >
              {time}
            </div>
          )}
        </div>
        <div
          className={cn(
            'text-xs text-zinc-500 truncate',
            !isRowDisplay && 'pt-3',
            customClass?.description,
          )}
        >
          {description}
        </div>
        {avatarSrc && (
          <div className="flex justify-end pt-3">
            <div className={cn('relative w-6 h-6', customClass?.avatar)}>
              <ImageWithFallback
                src={avatarSrc}
                alt="avatar"
                fill
                sizes="24px"
                style={{
                  borderRadius: '100%',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};