import { CSSProperties, useEffect } from "react";
import styled from "@emotion/styled";

export default function App() {
  useEffect(() => {
    console.log("content view loaded!!");
  }, []);

  return <Wrapper style={containerStyle}>정신 차려 이새끼야</Wrapper>;
}

const Wrapper = styled.div<any>``;

const containerStyle: CSSProperties = {
  width: "200px",
  position: "fixed",
  top: "50px",
  right: "50px",
  zIndex: 9999,
  background: "#ffffff",
  color: "#000",
  padding: "1rem",
  borderRadius: "0.5rem",
  fontWeight: 500,
  boxShadow:
    "2px 2px 6px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0px rgba(0, 0, 0, 0.50)",
};
