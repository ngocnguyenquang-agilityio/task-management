'use client';
import { RefObject, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Components
import { NavLink } from '../../NavLink';

// Constants
import { PUBLIC_NAVIGATION_LIST, ROUTES } from '@/constants';

// Hooks
import { useOutsideClick } from '@/hooks';

// Icons
import { LogoIcon } from '@/icons';
import { CiMenuBurger } from 'react-icons/ci';

// Utils
import { cn } from '@/utils';

export const PublicNavBar = () => {
  const pathName = usePathname();
  const [isShowNavBar, setShowNavBar] = useState(true);

  const toggleShowNavBar = () => {
    setShowNavBar(!isShowNavBar);
  };

  const navBarRef = useOutsideClick(() => {
    setShowNavBar(false);
  });

  return (
    <nav
      className="relative lg:static w-full"
      ref={navBarRef as RefObject<HTMLDivElement>}
    >
      <div className="flex items-center justify-between py-[10px] pr-5 md:pr-0 px-[5px] md:mb-[31px] rounded-lg bg-white dark:bg-zinc-800 ">
        <Link href={ROUTES.BOARDS} className="flex items-center gap-2 w-full">
          <LogoIcon customClass="w-5 h-5" />
          <h1 className="text-xl font-bold dark:text-white">Taskboard</h1>
        </Link>
        <CiMenuBurger
          className="md:hidden cursor-pointer"
          onClick={toggleShowNavBar}
        />
      </div>
      <div
        className={cn(
          'rounded-lg bg-white dark:bg-zinc-800 px-[19px] pb-9 pt-[15px] w-full absolute md:static md:block',
          !isShowNavBar && 'hidden',
        )}
      >
        <span className="text-xs pb-2 font-bold text-zinc-500 dark:text-white ">
          Menu
        </span>
        <div className="flex flex-col gap-6">
          {PUBLIC_NAVIGATION_LIST.map((route) => {
            const { href, label } = route;
            const isActivePath = pathName.includes(href);
            return (
              <NavLink
                key={`nav-link-${label}`}
                isActive={isActivePath}
                {...route}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
};