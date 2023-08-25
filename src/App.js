import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App bg-gray-800">
      <Outlet />
    </div>
  );
}

export default App;
