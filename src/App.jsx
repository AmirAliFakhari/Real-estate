import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import RegisterHome from "./partials/RegisterHouse/RegisterHouse";
import SignIn from "./partials/Auth/SignIn";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Layout />} path="/" />
        </Route>
        <Route element={<RegisterHome />} path="register" />
        <Route element={<SignIn />} path="signIn" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
