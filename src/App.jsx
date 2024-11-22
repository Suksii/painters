import "./App.css";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/djokaj_djeljos" />
          <Route path="/gjokaj_agron" />
          <Route path="/kapllani_edin" />
          <Route path="/prelvukaj_zake" />
          <Route path="/rijevac_masanovic_renata" />
          <Route path="/kolja_berisaj" />
        </Routes>
    </div>
  );
}

export default App;
