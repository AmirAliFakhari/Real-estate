import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userData, userRole } from "./pages/Auth/authSlice";

import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import useIntroduction from "./partials/Introduction/useIntroduction";
import useNews from "./partials/news/useNews";
import Spinner from "./features/Spinner";
import SignOn from "./pages/Auth/signon/signOn";
import Customer_panel from "./pages/Customer_panel";
import SignIn from "./pages/Auth/signIn/SignIn";
import RegisterHouse from "./pages/RegisterHouse/RegisterHouse";
import getUser from "./services/Auth/getUser";
// import SuccessfulReg from "./pages/RegisterHouse/SuccessfulReg";
import Houses from "./pages/houses/Houses";
import useRegisterHouse from "./pages/RegisterHouse/useRegisterHouse";

function App() {
  const { lastRegLoading } = useRegisterHouse();
  const { isLoading: introLoading } = useIntroduction();
  const { isLoading: newsLoading } = useNews();
  const dispatch = useDispatch();
  useEffect(() => {
    async function someFunction() {
      try {
        const user = await getUser();
        dispatch(userRole(user.role));
        dispatch(userData(user));
      } catch (error) {
        console.error("Not Authenticated", error);
      }
    }
    someFunction();
  }, [dispatch]);

  if (introLoading || newsLoading || lastRegLoading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
        <Spinner />
        <span className="text-sm font-light">امیرعلی فخاری زواره</span>
      </div>
    );
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<Layout />} path="/" />
        <Route element={<Houses />} path="houses" />
      </Route>
      <Route element={<RegisterHouse />} path="register-house" />

      <Route element={<SignOn />} path="signon" />
      <Route element={<SignIn />} path="signIn" />
      <Route element={<Customer_panel />} path="customer-panel" />
      {/* <Route element={<SuccessfulReg />} path="successful-reg" /> */}
    </Routes>
  );
}

export default App;
