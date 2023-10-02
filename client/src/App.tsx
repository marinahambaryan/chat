import { useState } from "react";
import jwt_decode from "jwt-decode";

import ChatRegistration from "./components/ChatRegistration";
import ChatRoom from "./components/chat/ChatRoom";
import { logIn } from "./api/auth";
import { UserState } from "./utils/types";

function App() {
  const [user, setUser] = useState<UserState | null>(null);

  const handleEnterChatRoom = async (username: string) => {
    try {
      const data = await logIn(username);
      if (data.error) {
        console.error(data.error);
      } else {
        const decoded = jwt_decode(data.access_token) as {
          id: string;
          username: string;
        };
        setUser(decoded);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLeaveChat = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-3/4">
        {user ? (
          <ChatRoom user={user} onLeaveChat={handleLeaveChat} />
        ) : (
          <ChatRegistration onRegister={handleEnterChatRoom} />
        )}
      </div>
    </div>
  );
}

export default App;
