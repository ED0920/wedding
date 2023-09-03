import { useEffect, useState } from "react";

const MOBILE_THRESHOLD = 820;
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_THRESHOLD,
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < MOBILE_THRESHOLD) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useMobile;
