"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "./server.css";


interface ServerProps {}

interface ServerData {
  id: number;
  serverName: string;
  serverCategory: string;
}

const Server: React.FC<ServerProps> = () => {
  const [showForm, setShowForm] = useState(false);
  const [serverName, setServerName] = useState("");
  const [serverCategory, setServerCategory] = useState("");
  const [serverList, setServerList] = useState<ServerData[]>([]);

  const fetchServerList = async () => {
    try {
      const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG55QGdtYWlsLmNvbSIsInN1YiI6MjQsImlhdCI6MTcwMjk4NzIwMiwiZXhwIjoxNzAzMDczNjAyfQ.NBEKQX_53DgOuFfj-NDjCVUvMqVUJJxgpa0vVKVBEpc";
      const response = await axios.get<ServerData[]>("http://localhost:3000/server", {
      headers: {
        Authorization: `Bearer ${jwtToken}`, 
      },
    });
      setServerList(response.data);
    } catch (error) {
      console.error("Error fetching server list:", error as Error);
    }
  };

  useEffect(() => {
    // Call the fetchServerList function when the component mounts
    fetchServerList();
  }, []); 

  const handleCreateServer = () => {
    setShowForm(true);
  };

  const handleSubmit = async () => {
    
    try {
      if (!serverName) {
        throw new Error("Server name is required.");
      }

      const response = await axios.post("http://localhost:3000/server/create-server", {
        serverName,
        serverCategory,
      });

      console.log("Server created:", response.data);
      setShowForm(false);
      fetchServerList();
      
    } catch (error) {
      console.error("Error creating server:", error as Error);
    }
  };

  return (
    <div className="server-body">
      <h1 className="server-list">Server List</h1>
      {!showForm ? (
        <button className="btn-createserver" onClick={handleCreateServer}>
          Create Server
        </button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Server Name"
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Server Category"
            value={serverCategory}
            onChange={(e) => setServerCategory(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      <ul>
        {serverList.map((server) => (
          <li key={server.id}>
           {server.serverName}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Server;