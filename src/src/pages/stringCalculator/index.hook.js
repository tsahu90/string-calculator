/* eslint-disable */
import { useState, useEffect } from "react";

const useCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") {
            setResult(0);
        };
        try {
            setError('');
            const result = stringCalculator(input);
            setResult(result);
        } catch (e) {
            setResult(null);
            setError(e.message);
        }
    };
    
    const stringCalculator = (str) => {
        const regex = /-?\d+(\.\d+)?/g;
        const matches = str.match(regex);
        if (!matches) return 0;
        let sum = 0;
        for (const num of matches) {
            const parsedNumber = parseFloat(num);
            if (parsedNumber < 0) {
                throw new Error(`Negative number found: ${num}`);
            }
            sum += parsedNumber;
        }
        return sum;
    }

    return {
        input,
        result,
        error,
        handleSubmit,
        handleChange
    };
};

export default useCalculator;
