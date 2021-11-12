import axios from "axios";
import React, { useState, useEffect } from "react";

const Display = () => {
  const [repos, setRepos] = useState([]);

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

  return (
    <div>
      <h1>List of trending repositories</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Repo Name</th>
            <th scope="col">Stars</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{repo.name.toUpperCase()}</td>
                <td>{repo.stargazers_count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
