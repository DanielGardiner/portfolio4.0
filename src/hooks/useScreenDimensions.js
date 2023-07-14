import { useState, useEffect, useRef, useCallback } from "react";

function useElementDimensions() {
  const [size, setSize] = useState({ width: null, height: null });

  useEffect(() => {
    function handleResize() {
      const height = window?.innerHeight || 0;
      const width = window?.innerWidth || 0;
      setSize({ width, height });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    ...size,
    isMobile: size.width < 768,
    isTablet: size.width >= 768 && size.width < 992,
    isDesktop: size.width >= 992,
  };
}

export default useElementDimensions;
