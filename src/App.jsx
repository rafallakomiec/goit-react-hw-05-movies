import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import { Suspense, lazy } from "react";
import css from './App.module.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Movie = lazy(() => import('./pages/Movie/Movie'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <SharedLayout>
      <Suspense fallback={<div className={css.fallback}>Loading content...<br/>Please wait.</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
};

export default App;
