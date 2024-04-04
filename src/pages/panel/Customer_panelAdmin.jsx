import { useNavigate } from "react-router-dom";
import Customer_PanelMenu from "../../partials/customerPanel/Customer_PanelMenu";
import Customer_PanelUser from "../../partials/customerPanel/Customer_PanelUser";
import useInsertNews from "../news/useInsertNews";
import InsertNew from "../../partials/news/InsertNew";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import supabase from "../../services/supabase";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userRole } from "../Auth/authSlice";
import EditeUser from "../../partials/customerPanel/EditeUser";

function Customer_panelAdmin() {
  const { data, insertNew } = useInsertNews();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const { error, mutate: handleLogOut } = useMutation({
    mutationFn: () => supabase.auth.signOut(),
    onSuccess: () => {
      toast.success("خارج شدی");
      dispatch(userRole(null));
      localStorage.clear();
      navigate("/");
    },

    onError: (err) => {
      toast.error(err.message);
      console.log(error);
    },
  });

  return (
    <div className="relative left-0 top-[80px]">
      <div className="grid grid-cols-3 p-2">
        <div className="col-span-full p-1 sm:col-span-1">
          <div className="grid h-full grid-rows-2 gap-1 sm:grid-rows-3">
            <div className="row-span-1 rounded-lg border border-gray-400">
              <Customer_PanelUser />
            </div>
            <div className="row-span-1 overflow-x-auto rounded-lg border border-gray-400 sm:row-span-2 sm:overflow-hidden">
              <div className="flex h-full w-[50rem] items-center justify-center gap-8 p-2 sm:flex-col sm:items-start sm:justify-start">
                <Customer_PanelMenu
                  title="اضافه کردن خبر جدید"
                  src="insert"
                  onclick={() => setSelectedMenuItem("insert")}
                />
                <Customer_PanelMenu
                  title="ویرایش مدیر"
                  src="edit"
                  onclick={() => setSelectedMenuItem("edit")}
                />
                <Customer_PanelMenu
                  title="خروج"
                  src="logout"
                  onclick={() => handleLogOut()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full h-fit  p-1 sm:col-span-2 sm:h-full">
          <div className="h-full rounded-lg border border-gray-400 p-1">
            {selectedMenuItem === "insert" && <InsertNew />}
            {selectedMenuItem === "edit" && <EditeUser />}
            {!selectedMenuItem && <InsertNew />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer_panelAdmin;
