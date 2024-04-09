"use client";

import { useEffect, useState } from "react";

export default function useSocketMessages(socket: any) {
  const [messages, setMessages] = useState<
    { id: string; content: string; username: string }[] | []
  >([]);

  useEffect(() => {
    function handleMessages(
      msg: string,
      serverOffset: string,
      username: string
    ) {
      const message = { id: serverOffset, content: msg, username };
      setMessages((previous) => [...previous, message]);
      socket.auth.serverOffset = Number(serverOffset);
      //   messages.scrollTop = messages.scrollHeight;
    }

    socket.on("chat message", handleMessages);
    return () => socket.off("chat message", handleMessages);
  }, [messages, socket]);

  return [messages];
}
