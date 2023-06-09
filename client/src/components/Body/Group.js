import React, { useState } from "react";
import { nanoid } from "nanoid";
import {FaGripLines} from 'react-icons/fa';

function Group() {
  const [groups, setGroups] = useState([]);
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDescription, setNewGroupDescription] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isOpen, setOpen] = useState(false);

  function createGroup() {
    const newGroup = {
      id: nanoid(),
      name: newGroupName,
      description: newGroupDescription,
      members: [],
    };
    setGroups([...groups, newGroup]);
    setNewGroupName("");
    setNewGroupDescription("");
  }

  function joinGroup(group) {
    if (!group.members.includes("you")) {
      const updatedGroup = { ...group, members: [...group.members, "you"] };
      setJoinedGroups([...joinedGroups, updatedGroup]);
    }
  }

  function deleteGroup(group) {
    setGroups(groups.filter((item) => item.id !== group.id));
    setJoinedGroups(joinedGroups.filter((item) => item.id !== group.id));
  }

  function showMembers(group) {
    setSelectedGroup(group);
  }

  function hideMembers() {
    setSelectedGroup(null);
  }

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const changeSideBar = () => {
    setOpen(!isOpen)
  }

  return (
  <div className="bg-slate-300 h-screen gap-4">
      <FaGripLines onClick={changeSideBar}/> 
      <div className={`w-64 left-1  h-3/4 fixed  bg-gray-100  transition-all duration-300 ${
        isOpen ? "ml-0" : "-ml-64"
      }`}>
        <h2 className="text-lg font-bold mb-2 font-sans">My Groups</h2>
        <div className="flex flex-wrap">
          {joinedGroups.map((group, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 mr-4 mb-4">
              <h3 className="font-bold">{group.name}</h3>
              <p>{group.description}</p>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => deleteGroup(group)}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
                onClick={() => showMembers(group)}
              >
                Members
              </button>
            </div>
          ))}
        </div>
    </div>
       <div className={ `container mx-auto p-4  transition-all duration-300 w-fit ${
        isOpen ?  "ml-64" : "ml-0"
        }`}>
      {/* <h1 className="text-3xl font-bold mb-4 mx-50">Groups</h1> */}

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Create a group</h2>
        <div className="flex mb-4">
          <input
            type="text"
            className="border rounded py-2 px-3 mr-2"
            placeholder="Group name"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
          />
          <input
            type="text"
            className="border rounded py-2 px-3 mr-2"
            placeholder="Group description"
            value={newGroupDescription}
            onChange={(e) => setNewGroupDescription(e.target.value)}
          />
          <button
            className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={createGroup}
          >
            Create
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Join a group</h2>
        <div className="flex mb-4">
          <input
            type="text"
            className="border rounded py-2 px-3 mr-2"
            placeholder="Search for a group"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap">
          {filteredGroups.map((group, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 mr-4 mb-4"
            >
              <h3 className="font-bold">{group.name}</h3>
              <p>{group.description}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={() => joinGroup(group)}
                >
                Join
                </button>
                <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
                onClick={() => showMembers(group)}
                >
                Members
                </button>
                </div>
                ))}
                </div>
                </div>
                {selectedGroup && (
            <div className="mb-4">
              <h2 className="text-lg font-bold mb-2">
                Members of {selectedGroup.name}
              </h2>
              <div className="flex flex-wrap">
                {selectedGroup.members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg p-4 mr-4 mb-4"
                  >
                    <h3 className="font-bold">{member}</h3>
                  </div>
                ))}
              </div>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={hideMembers}
              >
                Hide Members
              </button>
            </div>
          )}

    </div>
  </div>
);
}

export default Group;