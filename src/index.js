import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Feature, Loading, Preview, Search, Title } from "./components";

const App = () => {
  const [searchResults, setSearchResults] = useState({ info: {}, records: [] });
  const [featuredResult, setFeaturedResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="app">
      <Title />
      <Search setSearchResults={setSearchResults} setIsLoading={setIsLoading} />
      <Preview
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
        setFeaturedResult={setFeaturedResult}
      />
      {/* <Feature /> needs props for featuredResult, as well as setIsLoading and setSearchResults (clicking on searchable properties) */}
      <Feature
        featuredResult={featuredResult}
        setIsLoading={setIsLoading}
        setSearchResults={setSearchResults}
      />
      {isLoading ? <Loading /> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
