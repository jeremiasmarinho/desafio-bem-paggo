import { useState } from "react";

export default function Checkbox(props) {
  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked(!checked);
  }

  const checkedClass = checked ? "checked" : "";
  const containerClass = `checkbox ${checkedClass}`.trim();
  return (
    <div className="flex ml-5">
      <div>
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-semibold">Quais adesivos:</h1>
        </div>

        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-2 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            React
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Vue
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckChecked"
          >
            Angular
          </label>
        </div>
      </div>
    </div>
  );
}
