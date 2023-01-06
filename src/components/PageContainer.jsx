export default function PageContainer({ children }) {
  return (
    <div className="relative mx-auto max-w-screen-desktop px-[16px] tablet:px-[32px] desktop:px-[64px]">
      {children}
    </div>
  );
}
