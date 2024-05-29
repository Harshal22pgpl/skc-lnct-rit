import React, { useState, useEffect } from "react";
// Reusable Hook for Auto-Incrementing Counter
const useAutoIncrement = (initialValue, targetValue, speed, text) => {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          return prevCount + 1;
        } else {
          clearInterval(incrementInterval);
          return prevCount;
        }
      });
    }, speed);
    return () => {
      clearInterval(incrementInterval);
    };
  }, [targetValue, speed]);
  return count;
};
// Reusable Counter Widget Component
const CounterWidget = ({
  initialValue = 0,
  targetValue = 10,
  speed = 100,
  text = "",
  textColor = "black",
  bgColor = "white",
  title = "Counter Widget",
  color,

 textsize="3xl"

}) => {
  const count = useAutoIncrement(initialValue, targetValue, speed);
  return (
    <div
      className={`flex-col justify-center items-center rounded-md inline-flex sm:w-full md:w-1/3 lg:w-full   ${color}`}
    >
      <div
        className={`p-12 self-stretch text-white text-2xl font-bold  text-center  text-3xl `}
      >
        +{count}
        <p className={` ${textsize ? textsize : "text-xl"} `}>{text}</p>
      </div>
    </div>
  );
};
export default CounterWidget;
