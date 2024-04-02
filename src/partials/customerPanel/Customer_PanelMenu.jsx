function Customer_PanelMenu({ title, src, onclick }) {
  return (
    <div
      onClick={onclick}
      className="flex w-40 cursor-pointer items-center justify-start gap-2 hover:text-red-500"
    >
      <img src={`src/assets/icons/${src}.svg`} alt="" />
      <span>{title}</span>
    </div>
  );
}

export default Customer_PanelMenu;
