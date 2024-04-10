"use client";

import useSocketMessages from "@/hooks/useSocketMessages";
import useConection from "@/hooks/useConection";
import { FormEvent, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Session } from "next-auth";

const socketUrl = process.env.NODE_ENV !== 'development' ? process.env.NEXT_PUBLIC_SOCKET_URL as string : 'http://localhost:4000'

const socket = io(socketUrl, {
  auth: {
    username: "anonymous",
    serverOffset: 0,
  },
  autoConnect: false,
});

export default function RealtimeChat({ session }: { session: Session | null }) {
  const [input, setInput] = useState("");
  useConection(socket, session);
  const [messages] = useSocketMessages(socket);

  const listRef = useRef<HTMLUListElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      socket.emit("chat message", input);
      setInput("");
    }
  };

  useEffect(() => {
    const list = listRef.current as HTMLUListElement;
    list.scrollTop = list.scrollHeight;
  }, [messages]);

  return (
    <>
      <ul
        className="w-full h-full max-sm:!h-[85%] overflow-y-scroll ct-flex-col justify-start pb-28 max-sm:pb-14 scroll-smooth"
        id="messages"
        ref={listRef}
      >
        {messages.map((item) => {
          return (
            <li
              key={item.id}
              className="[&:nth-child(odd)]:bg-secondary [&:nth-child(even)]:bg-green-300 [&:nth-child(even)]:text-black px-4 py-2 rounded-2xl "
            >
              <span className="text-xs font-medium">
                {item.username} typed:
              </span>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
      <form
        id="form"
        onSubmit={handleSubmit}
        className="absolute bottom-0 flex gap-2 w-full"
      >
        <input
          className="flex-1 rounded-lg p-2 bg-gray-700 text-white"
          type="text"
          name="message"
          id="input"
          placeholder="Type a message"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="w-32 bg-gray-900 text-white rounded-lg"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
}
