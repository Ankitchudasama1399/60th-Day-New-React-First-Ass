import React, { useEffect } from "react";

const TitleUpdater = () => {
  useEffect(() => {
    document.title = "Dynamic Title";

    return () => {
      document.title = "React App"; // Reset title when component unmounts
    };
  }, []);

  return <div>Component for updating document title</div>;
};

export default TitleUpdater;
