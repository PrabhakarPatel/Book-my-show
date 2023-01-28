import "./App.css";
import axios from "axios";

// Routing
import { Routes, Route } from "react-router-dom";
// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"] = "5e84017dcfad1f673601468a1883161e";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
