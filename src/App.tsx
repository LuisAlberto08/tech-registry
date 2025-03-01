import React from "react";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "calc(100vh - 60px)", textAlign: "center" }}>
        <p>Welcome to the Tech Equipment Registry app!</p>
      </div>
    </div>
  );
};

export default App;
