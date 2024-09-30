import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [activeItem, setActiveItem] = useState("Calendar");

  return (
    <>
      <Router>
        <div className="app-layout">
          <Header />
          <div className="main-content">
            <Sidebar />
            <div className="content-area">
              <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route path="/about" element={<AboutContent />} />
                <Route path="/contact" element={<ContactContent />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
