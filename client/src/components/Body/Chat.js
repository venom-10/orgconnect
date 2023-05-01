import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

    function renderChatForm(creds) {
		return (
			<div>
				<input className="border-b border-t border-r border-l mt-1 rounded border-black"
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button className="bg-cyan-400 rounded mx-2" onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}
    return (
		<ChatEngine
			height='100vh'
			userName='debanjan'
			userSecret='12345'
			projectID='
            0dd38022-12ab-4047-a654-b8a6401f6b66'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;