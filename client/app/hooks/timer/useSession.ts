import { useState } from "react";

export const useSession = (initialSessions: number, initialFocus: boolean) => {
  const [sessions, setSessions] = useState(initialSessions);
  const [focus, setFocus] = useState(initialFocus);

  const switchMode = (focusTime: number, restTime: number) => {
    if (focus) {
      setFocus(false);
      return restTime;
    } else {
      setFocus(true);
      setSessions((prev) => prev - 1);
      return focusTime;
    }
  };

  return { sessions, focus, switchMode, setSessions };
};
