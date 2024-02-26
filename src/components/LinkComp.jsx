import { Link } from "react-router-dom";

function LinkComp({ src, title, to }) {
  return (
    <Link
      to={to}
      className="flex gap-3 py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 "
    >
      <img
        className="w-fit md:hidden"
        src={`src/assets/icons/${src}.svg`}
        alt={title}
      />
      {title}
    </Link>
  );
}

export default LinkComp;
