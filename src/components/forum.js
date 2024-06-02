import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/forum.css";
import NavBar2 from "./NavBar2";

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [newReply, setNewReply] = useState({ content: "" });
  const [replies, setReplies] = useState({});
  const [showReplies, setShowReplies] = useState({});
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5003/profile2/${username}`
        );
        setUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, [username]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get("http://localhost:5003/threads");
        setThreads(response.data);
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };

    fetchThreads();
  }, []);

  const fetchReplies = async (threadId) => {
    try {
      const response = await axios.get(
        `http://localhost:5003/threads/${threadId}/replies`
      );
      setReplies((prevReplies) => ({
        ...prevReplies,
        [threadId]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  const handleInputChange = (e, setFunction) => {
    const { name, value } = e.target;
    setFunction((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitThread = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5003/threads",
        newThread
      );
      console.log(response.data);
      setNewThread({ title: "", content: "", author: "" });
      const fetchUpdatedThreads = await axios.get(
        "http://localhost:5003/threads"
      );
      setThreads(fetchUpdatedThreads.data);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  const handleSubmitReply = async (e, threadId) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5003/threads/${threadId}/replies`,
        {
          ...newReply,
          author: username,
        }
      );
      console.log(response.data);
      setNewReply({ content: "" });
      fetchReplies(threadId);
    } catch (error) {
      console.error("Error creating reply:", error);
    }
  };

  const toggleReplies = async (threadId) => {
    if (!showReplies[threadId]) {
      await fetchReplies(threadId);
    }
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [threadId]: !prevShowReplies[threadId],
    }));
  };

  return (
    <div className="forum">
      <NavBar2 />
      <h2>Forum</h2>
      <form onSubmit={handleSubmitThread}>
        <input
          type="text"
          name="title"
          value={newThread.title}
          onChange={(e) => handleInputChange(e, setNewThread)}
          placeholder="Title"
          required
        />
        <textarea
          name="content"
          value={newThread.content}
          onChange={(e) => handleInputChange(e, setNewThread)}
          placeholder="Content"
          required
        />
        <button type="submit">Create Thread</button>
      </form>
      <div className="threads">
        {threads.map((thread) => (
          <div key={thread.id} className="thread">
            <h3>{thread.title}</h3>
            <p>{thread.content}</p>
            <p>
              <strong>Author:</strong> {thread.author}
            </p>
            <p>
              <strong>Posted on:</strong>{" "}
              {new Date(thread.createdAt).toLocaleString()}
            </p>
            <button onClick={() => toggleReplies(thread.id)}>
              {showReplies[thread.id] ? "Hide Replies" : "View Replies"}
            </button>
            {showReplies[thread.id] && (
              <div className="replies">
                {replies[thread.id] &&
                  replies[thread.id].map((reply) => (
                    <div key={reply.id} className="reply">
                      <p>{reply.content}</p>
                      <p>
                        <strong>Author:</strong> {reply.author}
                      </p>
                      <p>
                        <strong>Posted on:</strong>{" "}
                        {new Date(reply.createdAt).toLocaleString()}
                      </p>
                    </div>
                  ))}
                <form onSubmit={(e) => handleSubmitReply(e, thread.id)}>
                  <textarea
                    name="content"
                    value={newReply.content}
                    onChange={(e) => handleInputChange(e, setNewReply)}
                    placeholder="Add a reply"
                    required
                  />
                  <button type="submit">Reply</button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
