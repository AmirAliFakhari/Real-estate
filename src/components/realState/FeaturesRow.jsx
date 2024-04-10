function FeaturesRow({ state, title, src, icon }) {
  return (
    <div className="flex gap-4 ">
      {icon}
      <span>
        {title}: {state}
      </span>
    </div>
  );
}

export default FeaturesRow;
