import {
  BookOpenText,
  Calendar,
  Clapperboard,
  ScrollText,
  UsersRound,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { MarvelApiEntityType } from '~/types';

type MenuItem = {
  href: string;
  name: string;
  type: MarvelApiEntityType;
  icon: LucideIcon;
};

export const menus: MenuItem[] = [
  {
    href: '/characters',
    name: 'Characters',
    type: 'character',
    icon: Users,
  },
  {
    href: '/comics',
    name: 'Comics',
    type: 'comic',
    icon: BookOpenText,
  },
  {
    href: '/creators',
    name: 'Creators',
    type: 'creator',
    icon: UsersRound,
  },
  {
    href: '/events',
    name: 'Events',
    type: 'event',
    icon: Calendar,
  },
  {
    href: '/series',
    name: 'Series',
    type: 'serie',
    icon: Clapperboard,
  },
  {
    href: '/stories',
    name: 'Stories',
    type: 'story',
    icon: ScrollText,
  },
];
