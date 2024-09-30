"use client";

import { useState } from "react";
import { FaPaperPlane, FaSearch } from "react-icons/fa";

type Message = {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
};

type Conversation = {
  id: number;
  name: string;
  lastMessage: string;
  unread: number;
};

export function MessagingComponent() {
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: 1, name: "Alice", lastMessage: "See you in Paris!", unread: 2 },
    { id: 2, name: "Bob", lastMessage: "How about dinner at 8?", unread: 0 },
    { id: 3, name: "Charlie", lastMessage: "Don't forget your passport!", unread: 1 },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "Alice", content: "Hey! Are you excited for our trip?", timestamp: "10:30 AM", isOwn: false },
    { id: 2, sender: "You", content: "Can't wait to see the Eiffel Tower!", timestamp: "10:32 AM", isOwn: true },
    { id: 3, sender: "Alice", content: "Me too! We should plan our itinerary soon.", timestamp: "10:35 AM", isOwn: false },
    { id: 4, sender: "You", content: "Definitely! How about we start tomorrow?", timestamp: "10:36 AM", isOwn: true },
    { id: 5, sender: "Alice", content: "Sounds good! See you in Paris!", timestamp: "10:38 AM", isOwn: false },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-[#edf6f9] text-[#0d3b66]">
      <header className="bg-[#0d3b66] text-[#edf6f9] p-4">
        <h1 className="text-2xl font-bold">Messaging Center</h1>
      </header>

      <main className="container mx-auto p-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg flex h-[calc(100vh-8rem)]">
          <div className="w-1/3 border-r border-gray-200">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full p-2 pl-8 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-4rem)]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                    selectedConversation === conv.id ? "'bg-gray-100'" : "''"
                  }`}
                  onClick={() => setSelectedConversation(conv.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{conv.name}</h3>
                    {conv.unread > 0 && (
                      <span className="bg-[#83c5be] text-white px-2 py-1 rounded-full text-xs">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/3 flex flex-col">
            <div className="flex-grow overflow-y-auto p-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-4 ${msg.isOwn ? "'text-right'" : "'text-left'"}`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      msg.isOwn ? "'bg-[#83c5be] text-white'" : "'bg-gray-200'"
                    }`}
                  >
                    <p>{msg.content}</p>
                    <p className="text-xs mt-1 opacity-75">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow p-2 border border-slate-200 border-[#83c5be] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
                />
                <button
                  onClick={sendMessage}
                  className="bg-[#006d77] text-white p-2 rounded-r-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}