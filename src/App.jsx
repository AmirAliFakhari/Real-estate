import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import RegisterHome from "./partials/RegisterHouse/RegisterHouse";
import SignIn from "./partials/Auth/SignIn";
import useHouse from "./partials/houses/useHouse";
import useIntroduction from "./partials/Introduction/useIntroduction";
import useNews from "./partials/news/useNews";
import Spinner from "./features/Spinner";

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
        <Route element={<RegisterHome />} path="register" />
        <Route element={<SignIn />} path="signIn" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
