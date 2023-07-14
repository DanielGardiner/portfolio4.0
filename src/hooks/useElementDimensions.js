import { useState, useEffect, useRef, useCallback } from "react";

function useElementDimensions() {
  const ref = useRef();
  const [size, setSize] = useState({ width: null, height: null });

  useEffect(() => {
    function handleResize() {
      const height = ref.current?.offsetHeight || 0;
      const width = ref.current?.offsetWidth || 0;
      setSize({ width, height });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ref,
    ...size
  };
}

export default useElementDimensions;
