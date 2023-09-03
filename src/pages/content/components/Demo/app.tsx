import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded!!");
    console.log("document :", document);
    console.log("window:", window);
  }, []);

  return (
    <div
      className="text-lime-400"
      style={{
        background: "green",
        width: "200px",
        height: "50px",
        position: "fixed",
        top: "50px",
        right: "50px",
        padding: "1rem",
        borderRadius: "1rem",
      }}
    >
      content view
    </div>
  );
}
