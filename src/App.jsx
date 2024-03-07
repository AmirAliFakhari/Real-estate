import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import RegisterHome from "./partials/RegisterHome/RegisterHome";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Layout />} path="/" />
        </Route>
        <Route element={<RegisterHome />} path="register" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
