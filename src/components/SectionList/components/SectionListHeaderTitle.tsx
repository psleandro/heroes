type SectionListHeaderTitleProps = {
  children: React.ReactNode;
};

const SectionListHeaderTitle = async ({
  children,
}: SectionListHeaderTitleProps) => (
  <span className="rounded-sm  px-4 py-2 text-white">
    <h3 className="text-2xl font-bold">{children}</h3>
  </span>
);

SectionListHeaderTitle.displayName = 'SectionListHeaderTitle';

export { SectionListHeaderTitle };
