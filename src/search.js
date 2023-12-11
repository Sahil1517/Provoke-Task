import React, { useState } from "react";

const Search = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");

  const update = (e) => {
    setSearch(e.currentTarget.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(search);
  };

  return (
    <div className="searchGrid">
      <form onSubmit={handleFormSubmit}>
        {/* Pass the handleSubmit prop to the input element */}
        <input
          className="searchbox"
          type="text"
          value={search}
          placeholder="Search"
          onChange={update}
        />
      </form>
    </div>
  );
};

export default Search;
