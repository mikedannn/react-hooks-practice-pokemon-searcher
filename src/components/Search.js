import React from "react";

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" placeholder='Search' onChange={(e) => props.setSearchTerm(e)} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
