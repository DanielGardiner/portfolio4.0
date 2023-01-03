export default function PageContainer({ children }) {
  return (
    <div className="max-w-screen-desktop mx-auto px-[16px] tablet:px-[32px] desktop:px-[64px]">{children}</div>
  )
}
