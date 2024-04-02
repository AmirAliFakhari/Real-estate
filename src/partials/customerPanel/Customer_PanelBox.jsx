import { useState } from "react";
import Customer_PanelMenu from "./Customer_PanelMenu";
import Customer_PanelUser from "./Customer_PanelUser";
import EditeUser from "./EditeUser";

function Customer_PanelBox() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="grid grid-cols-3 p-2">
      <div className="col-span-full p-1 sm:col-span-1">
        <div className="grid h-full grid-rows-2 gap-1 sm:grid-rows-3">
          <div className="row-span-1 rounded-lg border border-gray-400">
            <Customer_PanelUser />
          </div>
          <div className="row-span-1 overflow-x-auto rounded-lg border border-gray-400 sm:row-span-2 sm:overflow-hidden">
            <div className="flex h-full w-[50rem] items-center justify-center gap-8 p-2 sm:flex-col sm:items-start sm:justify-start">
              <Customer_PanelMenu
                title="ویرایش اطلاعات"
                src="edit"
                onclick={() => handleMenuItemClick("edit")}
              />
              <Customer_PanelMenu
                title="ثبت آگهی جدید"
                src="add-circle"
                onclick={() => handleMenuItemClick("add")}
              />
              <Customer_PanelMenu
                title="آگهی‌های من"
                src="receipt-text"
                onclick={() => handleMenuItemClick("receipt-text")}
              />
              <Customer_PanelMenu
                title="آگهی‌های ذخیره‌شده"
                src="Vector"
                onclick={() => handleMenuItemClick("Vector")}
              />
              <Customer_PanelMenu
                title="خروج"
                src="logout"
                onclick={() => handleMenuItemClick("logout")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full h-fit p-1 sm:col-span-2 sm:h-full">
        <div className="h-full rounded-lg border border-gray-400 p-1">
          {selectedMenuItem === "edit" && <EditeUser />}
          {selectedMenuItem === "add" && "but"}
          {selectedMenuItem === "add" && "but1"}
          {selectedMenuItem === "add" && "but2"}
          {selectedMenuItem === "add" && "but3"}
          {!selectedMenuItem && <EditeUser />}
        </div>
      </div>
    </div>
  );
}

export default Customer_PanelBox;
