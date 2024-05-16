import React, { useEffect } from "react";

const DocumentEventSubscriber = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Document scrolled");
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div>Component subscribing to a document event</div>;
};

export default DocumentEventSubscriber;
