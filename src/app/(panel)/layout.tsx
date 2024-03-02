import { PanelLayout as PanelLayoutComponent } from '~/layouts';

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PanelLayoutComponent>{children}</PanelLayoutComponent>;
}
