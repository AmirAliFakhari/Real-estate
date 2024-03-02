import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Layout />} path="/" />
          <Route element={<SignIn />} path="signin" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
