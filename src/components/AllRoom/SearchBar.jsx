"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (search) {
      params.set("searchTerm", search);
    } else {
      params.delete("searchTerm");
    }
    router.push(`/rooms?${params.toString()}`);
  };

  return (
    <div className="container mx-auto py-4 max-w-2xl">
      <div className="border border-secondary rounded-full  flex items-center gap-2 w-full justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="p-2 focus-none outline-none w-full text-secondary"
          placeholder="Search for rooms (e.g. hall room, library...) "
        />
        <button
          onClick={handleSearch}
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
