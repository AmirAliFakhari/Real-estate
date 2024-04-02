function Customer_PanelUser() {
  return (
    <div className="flex h-full items-center justify-start ps-3 ">
      <img className="w-fit" src="src\assets\imgs\profile-circle.svg" alt="" />
      <div className="flex flex-col">
        <span>نام کاربر</span>
        <span className="text-gray-500">نوع فعالیت</span>
      </div>
    </div>
  );
}

export default Customer_PanelUser;
