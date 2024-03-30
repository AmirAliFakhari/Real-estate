import { useRef, useState } from "react";
import { filter } from "../services/registerHouse/registerHouseAPI";

export default function DropDown({
  name,
  options,
  selectedItems,
  setSelectedItems,
}) {
  const [showDrop, setShowDrop] = useState(false);
  const modalRef = useRef();

  const handleSubmit = (itemName) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [name]: itemName,
    }));
    filter(selectedItems);

    setShowDrop(false);
  };

  return (
    <>
      <div className="flex flex-col" ref={modalRef}>
        <button
          onClick={() => setShowDrop((prev) => !prev)}
          className="flex w-24 items-center justify-center rounded-lg border  py-2.5  text-center text-sm font-medium text-black hover:bg-red-600 hover:text-white focus:outline-none"
          type="button"
        >
          {name}
        </button>
        <div
          className={`mt-1 ${showDrop ? "" : "hidden"} w-24 divide-y divide-gray-100 rounded-lg shadow`}
        >
          <div>
            {options?.map((item, index) => (
              <label
                onClick={() => handleSubmit(item)}
                key={index}
                className="messageCheckbox flex cursor-pointer gap-2 hover:bg-red-500 "
              >
                <input type="button" className="bg-slate-200 text-slate-600" />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
