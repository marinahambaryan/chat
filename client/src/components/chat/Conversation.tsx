import React, { Fragment, useRef, useEffect } from "react";
import ConversationBubble from "./ConversationBubble";
import { NewMessageInterface } from "../../utils/types";

interface Props {
  conversation: NewMessageInterface[];
  user: { username: string };
}

const Conversation: React.FC<Props> = ({ conversation, user }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (conversation.length) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [conversation.length]);

  return (
    <div className="flex flex-col h-96 overflow-y-scroll bg-white border rounded-lg shadow-md p-4">
      {conversation.map(({ username, message, timestamp, id }) => {
        return (
          <Fragment key={id}>
            <ConversationBubble
              username={username}
              message={message}
              isMe={user.username === username}
              timestamp={timestamp}
            />
          </Fragment>
        );
      })}
      <div ref={ref} />
    </div>
  );
};

export default Conversation;
