import { Route, Routes, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap4-toggle/css/bootstrap4-toggle.min.css"
import "./App.css";
import Home from "./components/Home";



import Upload from "./components/Upload";
import Navbar from "./components/Navbar";
import Score from "./components/Score";




function App() {
  return (
    <BrowserRouter>

      {/* <div className="d-flex">
        <div className="col-auto">
          <Sidebar />
        </div> */}
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/score" element={<Score/>}/>
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
