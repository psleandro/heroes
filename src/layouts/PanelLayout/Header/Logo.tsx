import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="shadow-md">
    <Image
      height={40}
      width={102}
      src="/imgs/marvel-logo.png"
      alt="Mavel logo"
    />
  </Link>
);

export { Logo };
