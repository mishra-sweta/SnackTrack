import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  const onlineStatus = () => {
    window.addEventListener("online", () => {
      setStatus(true);
    });

    window.addEventListener("offline", () => {
      setStatus(false);
    });
  };

  useEffect(() => {
    onlineStatus();
  }, []);

  return status;
};

export default useOnlineStatus;
