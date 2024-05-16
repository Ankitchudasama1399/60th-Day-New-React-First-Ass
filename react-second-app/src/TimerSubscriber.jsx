import React, { useEffect } from "react";

const TimerSubscriber = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>Component subscribing to a timer</div>;
};

export default TimerSubscriber;
