import React from 'react';
import axios from 'axios';

function Group() {
  const [groupName, setGroupName] = React.useState('');
  const [groupDescription, setGroupDescription] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/groups', {
        name: groupName,
        description: groupDescription
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchGroups = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/groups?search=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleJoinGroup = async (groupId) => {
    try {
      const response = await axios.post(`/api/groups/${groupId}/members`, {
        userId: 'user123' // Replace with actual user ID
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create or Join a Group</h1>

      <form onSubmit={handleCreateGroup}>
        <label htmlFor="groupName" className="block font-bold mb-2">Group Name</label>
        <input type="text" id="groupName" value={groupName} onChange={(e) => setGroupName(e.target.value)} className="border border-gray-400 p-2 mb-4 w-half"/>

        <label htmlFor="groupDescription" className="block font-bold mb-2">Group Description</label>
        <textarea id="groupDescription" value={groupDescription} onChange={(e) => setGroupDescription(e.target.value)} className="border border-gray-400 p-2 mb-4 w-full"/>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Create Group</button>
      </form>

      <hr className="my-8"/>

      <form onSubmit={handleSearchGroups}>
        <label htmlFor="searchTerm" className="block font-bold mb-2">Search Groups</label>
        <input type="text" id="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border border-gray-400 p-2 mb-4 w-half "/>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mx-2">Search</button>
      </form>

      <div className="my-8">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((group) => (
              <li key={group._id}>
                {group.name} - {group.description}
                <button onClick={() => handleJoinGroup(group._id)} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ml-4">Join Group</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No groups found</p>
        )}
      </div>
    </div>
  );
}

export default Group;
