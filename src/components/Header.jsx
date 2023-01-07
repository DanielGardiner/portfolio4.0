import FullPageWidth from "./layout/FullPageWidth";
import InnerGridContainer from "./layout/InnerGridContainer";

export default function Header({ styles }) {
  return (
    <nav
      className={`flex justify-between py-4 text-white ${styles}`}
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
