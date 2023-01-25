import { Routes, Route, Navigate } from "react-router-dom";

import AppRoutes from "./routes/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {AppRoutes.map((route) => {
          const { path, component: Component } = route;

          return <Route key={path} path={path} element={<Component />} />;
        })}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
