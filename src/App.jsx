import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layout/HomePage";
import MapsPage from "./pages/MapsPage";
import PortsPage from "./pages/PortsPage";
import VesselsPage from "./pages/VesselsPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<HomePage />}>
            <Route path="/" element={<GalleryPage />}/>
            <Route path="/maps" element={<MapsPage />} />
            <Route path="/ports" element={<PortsPage />}/>
            <Route path="/vessels" element={<VesselsPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
