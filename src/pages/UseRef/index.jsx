import NewTextInput from "@/components/NewTextInput";
import TextInput from "@/components/TextInput";
import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  const newInputRef = useRef(null);

  const countNumber = useRef(0);
  const handleCountUp = () => {
    countNumber.current++;
    console.log(countNumber.current);
    if (countNumber.current % 5 === 0 && countNumber.current > 0) {
      console.log(`Click ${countNumber.current} lần!`);
      alert(`Click ${countNumber.current} lần!`);
    }
  };
  console.log("Re-render input");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <button onClick={handleCountUp}>Click me</button>
      </div>
      <div>
        <div>TextInput with Focus, Remove</div>
        <TextInput ref={inputRef} />
        <div>
          <button onClick={() => inputRef?.current.focus()}>Focus</button>
          <button onClick={() => inputRef?.current.remove()}>Remove</button>
        </div>
      </div>

      <div>
        <div>NewTextInput with only Focus</div>
        <NewTextInput ref={newInputRef} />
        <div>
          <button onClick={() => newInputRef.current.focus()}>Focus</button>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
