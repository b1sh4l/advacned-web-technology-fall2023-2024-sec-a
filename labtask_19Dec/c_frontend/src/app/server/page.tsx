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

  const handleCreateServer = async () => {
    try {
      if (!serverName) {
        throw new Error("Server name is required.");
      }

      const response = await axios.post("http://localhost:3000/server/create-server", {
        serverName,
        serverCategory,
      });

      console.log("Server created:", response.data);

    
      fetchServerList();
    } catch (error) {
      console.error("Error creating server:", error as Error);
    }
  };

  return (
    <div>
      <h1>Server List</h1>
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