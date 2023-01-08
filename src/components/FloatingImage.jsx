import FullPageWidth from "./layout/FullPageWidth";

const sides = {
  LEFT: "left",
  RIGHT: "right",
};

export default function FloatingImage({ children, side = sides.LEFT }) {
  if (!Object.values(sides).includes(side)) {
    throw new Error("Invalid side");
  }

  return (
    <FullPageWidth styles="relative">
      <div
        className={`
          absolute top-0 hidden scale-x-[-1] desktop:block
          ${side === sides.LEFT && "left-[-100px]"}
          ${side === sides.RIGHT && "right-[-100px]"}
        `}
      >
        {children}
      </div>
    </FullPageWidth>
  );
}
