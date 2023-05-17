import React, { useState } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const DirectChatPage = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <div>
          <input
            className="border-b border-t border-r border-l mt-1 rounded border-black"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-orange-400 hover:bg-orange-500 font-bold rounded mx-2"
            onClick={() => createDirectChat(creds)}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
  return (
    <ChatEngine
      height="100vh"
      userName="debanjan"
      userSecret="12345"
      projectID="
            58e49ac5-d6bc-4d0a-9e75-15d6b5000c0d"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default DirectChatPage;
