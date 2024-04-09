"use client";

import { Session } from "next-auth";
import { useEffect } from "react";

export default function useConection(socket, session: Session | null) {
  socket.auth.username = session?.user?.name;
  useEffect(() => {
    socket.connect();
    return () => {
      socket.auth.serverOffset = 0;
      socket.disconnect();
    };
  }, [socket]);
}
