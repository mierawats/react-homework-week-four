import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="text-center fs-5 mt-5 mb-5">
        <input
          type="search"
          placeholder="Enter a City"
          required
          className="me-3 rounded p-2 ps-3 border-2 bg-light-subtle w-75"
        />
        <input
          type="submit"
          value="Search"
          className="text-center rounded p-2 pe-3 ps-3 border-0 bg-black text-light"
        />
      </form>
    </div>
  );
}
