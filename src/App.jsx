
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>

      <div className="bg-black py-4 mb-5">
        <h1 className="font-poppins font-bold text-white text-center  text-2xl uppercase tracking-widest">Movies Search App</h1>
    </div>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
    </Routes>
    </>
  );
}

export default App;
