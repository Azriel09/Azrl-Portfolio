import "./App.css";
import Sidebar from "./components/sidebar";
import Landing from "./pages/landing-page";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
