import { useEffect } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const COPY_DISPLAY_MILLISECONDS = 1500;

export default function ContactButton() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, COPY_DISPLAY_MILLISECONDS);
    }
  }, [isCopied]);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, COPY_DISPLAY_MILLISECONDS);
  };

  return (
    <CopyToClipboard text={"gardiner.daniel@hotmail.co.uk"} onCopy={handleCopy}>
      <button className="relative mt-6 inline-flex items-center rounded bg-[#5DC1C2] py-2 px-4 font-bold text-black hover:bg-[#7AF9F2]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <span className="ml-3">daniel.gardiner.tech@gmail.com</span>
        {isCopied && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-slate-400 opacity-90">
            <span className="mr-1">Copied</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="4"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        )}
      </button>
    </CopyToClipboard>
  );
}
