import { Routes, Route } from 'react-router-dom';
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <div className="w-full">
            <Hero />
            <TaskManager />
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<ApiData />} />
      </Routes>
    </Layout>
  );
}

export default App;