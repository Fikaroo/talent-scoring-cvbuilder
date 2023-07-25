import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <div className="w-full min-h-screen text-gray-900 bg-qss-background">
      <Routes>
        <Route path="/" index element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;
