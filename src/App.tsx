import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/Pages/About/About";
import ProjectPage from "./components/Pages/ProjectPage/ProjectPage";
import ScrollToStart from './components/ScrollToStart'

export default function App() {
  return (
    <BrowserRouter>
     <ScrollToStart/>
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/:projectId" element={<ProjectPage/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  );

}

