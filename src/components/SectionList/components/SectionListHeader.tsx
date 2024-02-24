type SectionListHeaderProps = {
  children: React.ReactNode;
};

const SectionListHeader = async ({ children }: SectionListHeaderProps) => (
  <div className="z-10 flex items-center justify-between self-stretch">
    {children}
  </div>
);

SectionListHeader.displayName = 'SectionListHeader';

export { SectionListHeader };
