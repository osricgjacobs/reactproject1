import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Card({ title }) {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Functional Component</h2>

      <Card title="Star wars" />
      <Card title="Batman" />
      <Card title="Dragon Ball" />
    </div>
  );
}
export default App;
