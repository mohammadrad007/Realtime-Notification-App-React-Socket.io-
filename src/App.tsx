import { useState } from "react";
import classes from "./app.module.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { posts } from "./data/data";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<string>("");
  console.log(user);

  return (
    <div className={classes.container}>
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Card key={post.id} post={post} />
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
