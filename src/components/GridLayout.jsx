export default function GridLayout({ children, styles }) {
  return (
    <div className={`grid grid-cols-1 tablet:grid-cols-12 relative gap-col-[32px]  ${styles}`}>
      {children}
    </div>
  );
}
