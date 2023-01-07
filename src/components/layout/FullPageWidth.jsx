export default function FullPageWidth({ children, styles }) {
  return (
    <div className={`left-[50%] ml-[-50vw] mr-[-50vw] max-w-[100vw] relative right-[50%] w-[100vw] col-span-full ${styles}`}>
      {children}
    </div >
  );
}
