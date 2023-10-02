import React, { KeyboardEvent, useRef } from "react";

type Props = {
  onSendMessage: (message: string) => void;
};

const ChatInput = ({ onSendMessage }: Props) => {
  const message = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = () => {
    onSendMessage(message.current?.value || "");
    if (message.current) message.current.value = "";
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") handleSendMessage();
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          ref={message}
          className="flex-grow border rounded-l-md p-2"
          onKeyUp={handleKeyUp}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white rounded-r-md p-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
