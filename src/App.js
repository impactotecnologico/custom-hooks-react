import React, { useState, useEffect } from "react";
import { getObject } from "./helpers";
import AddLink from "./components/AddLink";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const localStorageLinks = getObject("links");
    if (localStorageLinks !== undefined) setLinks(localStorageLinks);
  }, []);

  return (
    <div className="App">
      <h2>
        Links: {links && links.length}
        {!links && 0}
      </h2>

      <AddLink links={links} />
    </div>
  );
}

export default App;
