import React from 'react';
import useCalculator from "./index.hook"
import "./index.css"

function Calculator() {
  const {
    input,
    result,
    error,
    handleSubmit,
    handleChange
  } = useCalculator();

  return (
    <div className='main_container'>
      <div>
        <h1>String Calculator</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={handleChange}
            placeholder="Enter numbers here"
          />
          <button type="submit">Calculate</button>
        </form>
        {result !== null && <h2>Result: {result}</h2>}
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      </div>
    </div>
  );
}

export default Calculator;
