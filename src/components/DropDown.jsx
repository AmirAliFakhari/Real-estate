import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

function DropDown({ title, items, type }) {
  const [showDrop, setShowDrop] = useState(false);
  const modalRef = useRef();
  useClickOutside(modalRef, () => {
    setShowDrop();
  });

  return (
    <>
      <div className="flex flex-col" ref={modalRef}>
        <button
          onClick={() => setShowDrop((c) => !c)}
          className="flex w-24 items-center justify-center rounded-lg border  py-2.5  text-center text-sm font-medium text-black hover:bg-red-600 hover:text-white focus:outline-none  "
          type="button"
        >
          {title}
          {type === "checkbox" ? (
            <svg
              className="ms-3 h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          ) : (
            ""
          )}
        </button>
        <div
          className={`mt-1 ${showDrop ? "" : "hidden"} w-24 divide-y divide-gray-100 rounded-lg shadow `}
        >
          <div className="flex flex-col text-black ">
            {items?.map((data, index) => (
              <label key={index} className="flex gap-2">
                <input
                  type={type === "range" ? type : "checkbox"}
                  className="bg-slate-200 text-slate-600  "
                />
                {data}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDown;
