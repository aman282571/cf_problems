import React, { useState } from "react";
import Loadproblems from "./Loadproblems";
import "./App.css";

function App() {
  const [user, setuser] = useState(null);
  return (
    <div>
      {user === null ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setuser(e.target.user.value);
          }}
        >
          <p>Enter Codeforces handle</p>
          <input id="user" placeholder="Enter Codeforces handle" />
        </form>
      ) : (
        <Loadproblems User={user} />
      )}
    </div>
  );
}

export default App;
