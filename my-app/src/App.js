import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
