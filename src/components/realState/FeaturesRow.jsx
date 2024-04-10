function FeaturesRow({ state, title, src }) {
  return (
    <div className="flex gap-4 ">
      {src}
      <span>
        {title}: {state}
      </span>
    </div>
  );
}

export default FeaturesRow;
