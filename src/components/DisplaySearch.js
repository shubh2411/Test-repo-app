import React from "react";

const DisplaySearch = ({ searchedData, isFocused }) => {
  return (
    <div>
      {isFocused && (
        <>
          <h1>Search result here {searchedData.length}</h1>
          {searchedData.map((data, index) => {
            return (
              <ul key={index}>
                <li>{data.name}</li>
              </ul>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplaySearch;
