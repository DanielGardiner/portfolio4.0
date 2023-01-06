export default function PageContainer({ children, styles }) {
  return (
    <div className={`relative mx-auto max-w-screen-desktop px-[16px] tablet:px-[32px] desktop:px-[64px] ${styles}`} >
      {children}
    </ div>
  );
}
