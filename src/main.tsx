import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Top from "./components/Top/Top.tsx";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Top feature="Flag" firstAction="Ctrl" secondAction="Click">
      Minesweeper
    </Top>
    <ScoreBoard
      time="000"
      levels={["beginner", "intermediate", "expert"]}
      onReset={function (): void {
        throw new Error("Function not implemented.");
      }}
      mines="010"
    />
  </React.StrictMode>,
);
