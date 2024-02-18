type ApparitionHeaderProps = {
  children: React.ReactNode;
};

const ApparitionHeader = async ({ children }: ApparitionHeaderProps) => (
  <div className="z-10 flex items-center justify-between self-stretch">
    {children}
  </div>
);

ApparitionHeader.displayName = 'ApparitionHeader';

export { ApparitionHeader };
