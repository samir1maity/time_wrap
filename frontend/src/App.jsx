/** @format */

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { lazy, Suspense } from "react";
import Loading from "./pages/Loading";

const Home = lazy(() => delayForLoading(import("./pages/Home")));

function delayForLoading(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

// async function delayForLoading() {
//   setTimeout(() => {
//     return true;
//   }, 2000);
// }

function App() {
  return (
    <>
      <Router>
        <div className='h-screen w-full'>
          <Header />
          <div className='flex'>
            <Sidebar />

            <Routes>
              <Route
                path='/'
                element={
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
