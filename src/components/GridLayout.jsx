export default function GridLayout({ children, styles }) {
  return (
    <div className={`grid-cols-1 gap-[32px] tablet:grid-cols-12 ${styles}`}>
      {children}
    </div>
  );
}
