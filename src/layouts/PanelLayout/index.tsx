import { Header } from './Header';

type PanelLayoutProps = {
  children: React.ReactNode;
};

const PanelLayout = ({ children }: PanelLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export { PanelLayout };
