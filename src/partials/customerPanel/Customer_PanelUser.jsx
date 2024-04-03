import useEditeAvatar from "./useEditeAvatar";

function Customer_PanelUser() {
  const { data, isLoading } = useEditeAvatar();
  const userFirstName = localStorage.getItem("userFirstname");

  if (!isLoading) console.log(data[0]?.avatar);
  return (
    <div className="flex h-full items-center justify-start gap-2 ps-3 ">
      <img
        className="h-20 w-20 rounded-2xl"
        src={!isLoading ? `${data[0]?.avatar}` : ""}
        alt=""
      />
      <div className="flex flex-col">
        <span>{userFirstName}</span>
        <span className="text-gray-500">کاربر</span>
      </div>
    </div>
  );
}

export default Customer_PanelUser;
