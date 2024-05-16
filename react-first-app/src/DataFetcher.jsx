import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
};

export default DataFetcher;
