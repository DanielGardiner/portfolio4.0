import FullPageWidth from "./FullPageWidth";
import GridLayout from "./GridLayout";

export default function Header({ styles }) {
  return (
    <nav
      className={`absolute left-0 right-0 z-[999] flex justify-between bg-black py-4 text-white ${styles}`}
    >
      <div>Logo</div>
      <div>Contact</div>
    </nav>
  );
}
