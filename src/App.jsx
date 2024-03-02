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
        </Route>
        <Route element={<SignIn />} path="signin" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
