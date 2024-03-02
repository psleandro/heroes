'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '~/lib/utils';
import { bgColorByEntityType, bgHoverColorByEntityType } from '~/utils';
import { menus } from './menus';

const NavigationMenu = () => {
  const pathname = usePathname();

  const isInPath = (href: string) => pathname.includes(href);

  return (
    <nav className="mx-auto flex flex-wrap justify-center gap-3">
      {menus.map(({ href, type, icon: Icon, name }) => (
        <Link
          href={href}
          key={href}
          className={cn(
            'flex items-center gap-2 rounded-md px-4 py-1 transition-all hover:text-white',
            bgHoverColorByEntityType[type],
            isInPath(href) && [bgColorByEntityType[type], 'text-white'],
          )}
        >
          <Icon size={18} />
          {name}
        </Link>
      ))}
    </nav>
  );
};

export { NavigationMenu };
