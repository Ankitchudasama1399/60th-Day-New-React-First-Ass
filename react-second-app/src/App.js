import React from "react";
import TimerSubscriber from "./TimerSubscriber";
import DocumentEventSubscriber from "./DocumentEventSubscriber";

function App() {
  return (
    <>
      <TimerSubscriber />
      <DocumentEventSubscriber />
    </>
  );
}

export default App;
