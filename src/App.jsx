import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import useHouse from "./partials/houses/useHouse";
import useIntroduction from "./partials/Introduction/useIntroduction";
import useNews from "./partials/news/useNews";
import Spinner from "./features/Spinner";
import SignOn from "./pages/Auth/signon/signOn";
import Customer_panel from "./pages/Customer_panel";
import SignIn from "./pages/Auth/signIn/SignIn";
import RegisterHouse from "./pages/RegisterHouse/RegisterHouse";
import getUser from "./services/Auth/getUser";

import { useDispatch, useSelector } from "react-redux";
import { userData, userRole } from "./pages/Auth/authSlice";
import { useEffect } from "react";
import SuccessfulReg from "./pages/RegisterHouse/SuccessfulReg";
import Houses from "./pages/houses/Houses";

function App() {
  const { isLoading: houseLoading } = useHouse();
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
          <Route element={<Houses />} path="houses" />
        </Route>

        <Route element={<RegisterHouse />} path="register-house" />
        <Route element={<SignOn />} path="signon" />
        <Route element={<SignIn />} path="signIn" />
        <Route element={<Customer_panel />} path="customer-panel" />
        {/* <Route element={<SuccessfulReg />} path="successful-reg" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
