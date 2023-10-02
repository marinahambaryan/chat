interface Props {
  username: string;
  message: string;
  isMe: boolean;
  timestamp: string;
}

const ConversationBubble = ({ username, message, isMe, timestamp }: Props) => {
  const date = new Date(timestamp).toLocaleTimeString();

  return (
    <div
      className={`${
        isMe
          ? "ml-auto bg-blue-500 text-white"
          : "mr-auto bg-white text-gray-800"
      } my-2 max-w-sm px-4 py-2 rounded-lg shadow-md`}
    >
      <span className="font-semibold">{username}: </span>
      {message}
      <div
        className={`text-xs ${isMe ? "text-white-500" : "text-gray-500"} mt-1`}
      >
        {date}
      </div>
    </div>
  );
};

export default ConversationBubble;
