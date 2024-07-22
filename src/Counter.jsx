import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isStart, setStart] = useState(false);

  useEffect(() => {
    let timer;

    if (isStart) {
      timer = setInterval(() => {
        setCount((a) => {
          a + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isStart]);

  const startCounter = () => {
    setStart(true);
  };

  const stop = () => {
    setStart(false);
  };

  return (
    <div>
      <h1>Couunter:{count}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};
