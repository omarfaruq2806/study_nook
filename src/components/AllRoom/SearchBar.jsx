"use client";

import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container mx-auto py-4 max-w-2xl">
      <div className="border border-secondary rounded-full  flex items-center gap-2 w-full justify-between">
        <input
          onChange={handleSearch}
          type="text"
          className="p-2 focus-none outline-none w-full"
          placeholder="Search for rooms (e.g. hall room, library...) "
        />
        <button
          type="submit"
          className="btn rounded-full bg-secondary text-white "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
