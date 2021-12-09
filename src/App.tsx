import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import classes from "./app.module.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { posts } from "./data/data";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    setSocket(io("http://localhost:5000/"));
  }, []);

  useEffect(() => {
    socket.emmit("newUser", user);
  }, [socket, user]);

  return (
    <div className={classes.container}>
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} />
          ))}
        </>
      ) : (
        <div className={classes.login}>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
