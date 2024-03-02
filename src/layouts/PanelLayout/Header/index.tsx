import { Logo } from './Logo';
import { NavigationMenu } from './NavigationMenu';

const Header = () => (
  <header className="z-10 flex min-h-16 flex-col items-center gap-y-3 px-4 py-2 shadow-md lg:flex-row lg:px-8">
    <Logo />

    <NavigationMenu />
  </header>
);

export { Header };
