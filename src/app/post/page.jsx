"use client";
import { Parents } from "@/component/Parents";
import { useState } from "react";
const createPost = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputTextValue, setInputTextValue] = useState("");
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState(false);

  const click = () => {
    if (inputValue === "") {
      setValid(true);
    } else {
      setValid(false);
    }
    if (inputTextValue === "") {
      setValue(true);
    } else {
      setValue(false);
    }
  };
  return (
    <Parents>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="createPostPage">
          <input
            placeholder="text"
            className="input"
            name="text"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {valid ? <div className="alert">alert</div> : null}
          <input
            placeholder="text"
            className="input"
            name="text"
            type="text"
            value={inputTextValue}
            onChange={(e) => setInputTextValue(e.target.value)}
          />
          {value ? <div className="alert">alert</div> : null}
          <button onClick={() => click()} className="submit">
            submit
          </button>
        </div>
      </div>
    </Parents>
  );
};

export default createPost;
