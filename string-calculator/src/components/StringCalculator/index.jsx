import React, { useState } from "react";
import { add } from "../../utils/stringCalculator";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(`Sum: ${sum}`);
      setError("");
    } catch (err) {
      setResult("");
      setError(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>String Calculator</h1>
      <p>
        Enter comma-separated numbers or use custom delimiters (e.g.,{" "}
        <code>//;\n1;2</code>)
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleCalculate}
        style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}
      >
        Calculate
      </button>
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: error ? "red" : "black",
        }}
      >
        {error || result}
      </p>
    </div>
  );
};

export default StringCalculator;
