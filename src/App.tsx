import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar.tsx";
import Header from "./components/Header.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <SideBar />
      </div>
    </>
  );
}

export default App;
