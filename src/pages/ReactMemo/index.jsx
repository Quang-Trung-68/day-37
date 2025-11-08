import React, { memo, useCallback, useState } from "react";

const ChildComponent1 = memo(({ value, onIncrease }) => {
  console.log("Child 1");

  return (
    <>
      <div>Child 1 - Count: {value}</div>
      <button onClick={onIncrease}>Tăng Count 1</button>
    </>
  );
});

ChildComponent1.displayName = 'ChildComponent1';

const ChildComponent2 = memo(({ value, onIncrease }) => {
  console.log("Child 2");

  return (
    <>
      <div>Child 2 - Count: {value}</div>
      <button onClick={onIncrease}>Tăng Count 2</button>
    </>
  );
});

ChildComponent2.displayName = 'ChildComponent2'; 

const ReactMemo = () => {
  console.log("Parent");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const onIncrease1 = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);
  const onIncrease2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, []);

  return (
    <div>
      <ChildComponent1 value={count1} onIncrease={onIncrease1} />
      <ChildComponent2 value={count2} onIncrease={onIncrease2} />
    </div>
  );
};

export default ReactMemo;
