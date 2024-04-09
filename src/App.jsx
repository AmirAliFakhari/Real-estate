import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData, userRole } from "./pages/Auth/authSlice";

import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import Spinner from "./features/Spinner";
import SignOn from "./pages/Auth/signon/signOn";
import Customer_panel from "./pages/panel/Customer_panel";
import SignIn from "./pages/Auth/signIn/SignIn";
import RegisterHouse from "./pages/RegisterHouse/RegisterHouse";
import getUser from "./services/Auth/getUser";
import RealStates from "./pages/realState/RealStates";
import Houses from "./pages/houses/Houses";
import useRegisterHouse from "./pages/RegisterHouse/useRegisterHouse";
import ShowHouse from "./pages/showHouse/ShowHouse";
import NotFound from "./pages/NotFound";
import UserRealtor from "./pages/realState/UserRealtor";
import AboutUs from "./pages/aboutUs/AboutUs";
import News from "./pages/news/News";
import Customer_panelAdmin from "./pages/panel/Customer_panelAdmin";
import New from "./partials/news/New";
import EachNew from "./pages/news/EachNew";

function App() {
  const { lastRegLoading } = useRegisterHouse();

  const dispatch = useDispatch();
  useEffect(() => {
    async function someFunction() {
      try {
        const user = await getUser();
        dispatch(userRole(user?.role));
        dispatch(userData(user));
      } catch (error) {
        console.error("Not Authenticated", error);
      }
    }
    someFunction();
  }, [dispatch]);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  ScrollToTop();

  const userR = useSelector((state) => state.auth.userRole);
  const userD = useSelector((state) => state.auth.userData);
  if (lastRegLoading) {
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
        <Route element={<ShowHouse />} path="houses/:image_id" />
        {userR && userD?.user_metadata?.newRole !== "admin" ? (
          <>
            <Route element={<Customer_panel />} path="customer-panel" />
            <Route path="user/:userID" element={<UserRealtor />} />
            <Route path="new" element={<News />} />
            <Route path="new/:idNews" element={<New />} />
          </>
        ) : (
          <>
            {userD && (
              <>
                <Route
                  element={<Customer_panelAdmin />}
                  path="customer-panel-admin"
                />
              </>
            )}
          </>
        )}
        <Route path="user/:userID" element={<UserRealtor />} />
        <Route path="new" element={<News />} />
        <Route path="new/:idNews" element={<EachNew />} />
        <Route element={<AboutUs />} path="about" />
        <Route element={<RealStates />} path="realStates" />
        <Route path="*" element={<NotFound />} />
      </Route>
      {userR ? <Route element={<RegisterHouse />} path="register-house" /> : ""}
      <Route element={<SignOn />} path="signon" />
      <Route element={<SignIn />} path="signIn" />
    </Routes>
  );
}

export default App;
