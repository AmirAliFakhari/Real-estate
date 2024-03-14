import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import useHouse from "./partials/houses/useHouse";
import useIntroduction from "./partials/Introduction/useIntroduction";
import useNews from "./partials/news/useNews";
import Spinner from "./features/Spinner";
import RegisterHouse from "./pages/RegisterHouse/RegisterHouse";
import SignIn from "./pages/Auth/signIn/SignIn";
import SignOn from "./pages/Auth/signon/signOn";

function App() {
  const { isLoading: houseLoading } = useHouse();
  const { isLoading: introLoading } = useIntroduction();
  const { isLoading: newsLoading } = useNews();

  if (houseLoading || introLoading || newsLoading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <Spinner />
        <span className="text-sm font-light">امیرعلی فخاری زواره</span>
      </div>
    );
  }
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Layout />} path="/" />
        </Route>
        <Route element={<RegisterHouse />} path="register-house" />
        <Route element={<SignOn />} path="signon" />
        <Route element={<SignIn />} path="signIn" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
