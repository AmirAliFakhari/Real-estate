function FeaturesRow({ state, title, src }) {
  return (
    <div className="flex gap-4 ">
      <img className="w-fit" src={`src/assets/icons/${src}.svg`} alt="" />
      <span>
        {title}: {state}
      </span>
    </div>
  );
}

export default FeaturesRow;
