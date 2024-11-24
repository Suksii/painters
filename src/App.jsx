import "./App.css";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Painters from "./pages/Painters";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  DjokajDjeljos,
  GjokajAgron,
  KapllaniEdin,
  NimanbeguHasanagaVahida,
  PrelvukajZake,
  RijavecMasanovicRenata,
  KoljaBerisaj,
} from "./constants/painters";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="container mx-auto px-8">
        <Header />
        <hr className="pb-8" />
        <Routes>
          <Route path="/" element={<MainPage />} gridCols={"grid-cols-4"} />
          <Route
            path="/djokaj_djeljos"
            element={<Painters data={DjokajDjeljos} gridCols={"grid-cols-4"} />}
          />
          <Route
            path="/gjokaj_agron"
            element={<Painters data={GjokajAgron} gridCols={"grid-cols-3"} />}
          />
          <Route
            path="/kapllani_edin"
            element={<Painters data={KapllaniEdin} gridCols={"grid-cols-3"} />}
          />
          <Route
            path="/nimanbegu_hasanaga_vahida"
            element={
              <Painters
                data={NimanbeguHasanagaVahida}
                gridCols={"grid-cols-3"}
              />
            }
          />
          <Route
            path="/prelvukaj_zake"
            element={<Painters data={PrelvukajZake} gridCols={"grid-cols-3"} />}
          />
          <Route
            path="/rijevac_masanovic_renata"
            element={
              <Painters
                data={RijavecMasanovicRenata}
                gridCols={"grid-cols-3"}
              />
            }
          />
          <Route
            path="/kolja_berisaj"
            element={<Painters data={KoljaBerisaj} gridCols={"grid-cols-3"} />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
