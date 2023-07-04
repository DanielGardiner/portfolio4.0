export default function InnerGridContainer({ children, styles }) {
  return (
    <div className={`grid grid-cols-12 relative tablet:gap-x-[32px] desktop:gap-x-[64px] ${styles}`}>
      {children}
    </div>
  );
}
