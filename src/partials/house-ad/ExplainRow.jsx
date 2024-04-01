function ExplainRow({ title, state }) {
  return (
    <div>
      <span className="">{title}:</span>
      <span>{state}</span>
    </div>
  );
}

export default ExplainRow;
