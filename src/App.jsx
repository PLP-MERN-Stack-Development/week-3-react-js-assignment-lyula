import { Routes, Route } from 'react-router-dom';
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/about" element={<h1 className="text-3xl font-bold text-blue-600 text-center pt-10">About</h1>} />
      </Routes>
    </div>
  );
}

export default App;