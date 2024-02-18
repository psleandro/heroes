type ApparitionHeaderTitleProps = {
  children: React.ReactNode;
};

const ApparitionHeaderTitle = async ({
  children,
}: ApparitionHeaderTitleProps) => (
  <span className="rounded-sm  px-4 py-2 text-white">
    <h3 className="text-2xl font-bold">{children}</h3>
  </span>
);

ApparitionHeaderTitle.displayName = 'ApparitionHeaderTitle';

export { ApparitionHeaderTitle };
