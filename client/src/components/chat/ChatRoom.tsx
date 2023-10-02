import React, { useState, useEffect } from "react";
import { socket } from "../../socket";
import Conversation from "./Conversation";
import ChatInput from "./ChatInput";
import ToolBar from "./ToolBar";
import { getAllMessages } from "../../api/messages";
import { NewMessageInterface, UserState } from "../../utils/types";

interface Props {
  user: UserState;
  onLeaveChat: () => void;
}

const ChatRoom: React.FC<Props> = ({ user, onLeaveChat }) => {
  const [messages, setMessages] = useState<NewMessageInterface[]>([]);

  useEffect(() => {
    handleRetrieveMessages();
  }, []);

  useEffect(() => {
    socket.on("recieveMessage", (message: NewMessageInterface) => {
      handleRetrieveMessages();
    });

    return () => {
      socket.off("recieveMessage");
    };
  }, [messages]);

  const handleRetrieveMessages = async () => {
    try {
      const data = await getAllMessages();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = (message: string) => {
    if (message.trim() !== "") {
      socket.emit(
        "sendMessage",
        { userId: user.id, message },
        (response: NewMessageInterface) => {
          setMessages((prevState) => [...prevState, response]);
        }
      );
    }
  };

  const handleOnLeaveChat = () => {
    onLeaveChat();
    socket.disconnect();
  };

  return (
    <div className="flex flex-col">
      <ToolBar onLeaveChat={handleOnLeaveChat} />
      <Conversation conversation={messages} user={user} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;
