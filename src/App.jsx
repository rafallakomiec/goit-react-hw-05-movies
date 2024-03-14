import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Movie = lazy(() => import('./pages/Movie/Movie'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <SharedLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID/*" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </SharedLayout>
  );
};

export default App;
