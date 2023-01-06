import FullPageWidth from "./FullPageWidth";
import GridLayout from "./GridLayout";

export default function Header({ styles }) {
  return (
    <nav
      className={`absolute left-0 right-0 z-[999] flex justify-between py-4 text-white ${styles}`}
    >
      <div>
        <img
          src="https://i.pinimg.com/originals/df/9f/3a/df9f3a52ef7690188d91b721aaa45f6e.png"
          alt="logo"
          className="object-cover w-[40px] h-[40px] rounded-full"
        />
      </div>
      <div>Contact</div>
    </nav>
  );
}
