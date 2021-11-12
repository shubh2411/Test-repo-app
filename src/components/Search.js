import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import DisplaySearch from "./DisplaySearch";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);
  const [focused, setFocused] = React.useState(false);

  const url =
    "https://api.github.com/search/repositories?q=javascript+language:javascript&sort=stars&order=desc";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setRepos(response.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredData = repos.filter((repo) => {
    if (searchTerm === "") {
      return "";
    } else {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="d-flex search-bar" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Repo here"
          name={searchTerm}
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>

      <DisplaySearch searchedData={filteredData} isFocused={focused} />
    </div>
  );
};

export default Search;
