export default function OuterWidthContainer({ children, styles }) {
  return (
    <div className={`relative mx-auto max-w-screen-desktop px-[16px] tablet:px-[32px] ${styles}`} >
      {children}
    </ div>
  );
}
