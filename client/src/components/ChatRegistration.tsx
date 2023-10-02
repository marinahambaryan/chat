import React, { useRef } from "react";

interface Props {
  onRegister: (name: string) => void;
}

const ChatRoom: React.FC<Props> = ({ onRegister }) => {
  const name = useRef<HTMLInputElement | null>(null);

  const handleEnterChat = () => {
    onRegister(name.current?.value || "");
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Enter Your Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          ref={name}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <button
        onClick={handleEnterChat}
        className="bg-blue-500 text-white rounded-md p-2 w-full"
      >
        Enter Chat
      </button>
    </div>
  );
};

export default ChatRoom;
