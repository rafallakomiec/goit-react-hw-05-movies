import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import { Suspense, lazy } from "react";
import css from './App.module.css';

const Home = lazy(() => import('./components/Home/Home'));
const Movies = lazy(() => import('./components/Movie/Movie'));

const App = () => {
  return (
    <SharedLayout>
      <Suspense fallback={<div className={css.fallback}>Loading content...<br/>Please wait.</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
};

export default App;
