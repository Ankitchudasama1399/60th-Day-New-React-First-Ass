import React from "react";
import DataFetcher from "./DataFetcher";
import EventSubscriber from "./EventSubscriber";
import TitleUpdater from "./TitleUpdater";

function App() {
  return (
    <>
      <DataFetcher />
      <EventSubscriber />
      <TitleUpdater />
    </>
  );
}

export default App;
