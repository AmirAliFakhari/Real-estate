function Customer_PanelUser() {
  const userFirstName = localStorage.getItem("userFirstname");
  return (
    <div className="flex h-full items-center justify-start ps-3 ">
      <img className="w-fit" src="src\assets\imgs\profile-circle.svg" alt="" />
      <div className="flex flex-col">
        <span>{userFirstName}</span>
        <span className="text-gray-500">کاربر</span>
      </div>
    </div>
  );
}

export default Customer_PanelUser;
