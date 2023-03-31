import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setISOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setISOnline(true);
    };

    const handleOffline = () => {
      setISOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  
  return isOnline;
};
export default useOnline;
