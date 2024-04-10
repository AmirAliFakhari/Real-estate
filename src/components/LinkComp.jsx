import { Link } from "react-router-dom";

function LinkComp({ src, title, to }) {
  return (
    <Link
      to={to}
      className="flex gap-3 rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-red-700 "
    >
      <div className="md:hidden">{src}</div>
      {title}
    </Link>
  );
}

export default LinkComp;
