"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

const AiChatbotSection = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I’m Shailesh’s portfolio assistant. Ask me about projects, skills, experience, or open-source work.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text:
              data?.error ||
              "Sorry, chat service is unavailable right now. Please try again later.",
          },
        ]);
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data?.reply || "I could not generate a reply.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong while connecting to the chat service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.7)] text-white text-xl z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🤖
      </motion.button>

      {open && (
        <motion.div
          className="fixed bottom-24 right-6 w-80 h-[420px] bg-[#0b0d12] border border-gray-700 rounded-xl shadow-[0_0_40px_rgba(168,85,247,0.3)] flex flex-col z-50"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 border-b border-gray-700 text-purple-400 font-semibold">
            Ask about Shailesh&apos;s portfolio
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                  m.role === "user"
                    ? "bg-purple-500 text-white ml-auto"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="max-w-[80%] px-3 py-2 rounded-lg bg-gray-800 text-gray-300">
                Typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-700 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, experience..."
              className="flex-1 bg-[#111] border border-gray-700 rounded-lg px-3 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-400"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              aria-label="Send message"
              title="Send"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default AiChatbotSection;