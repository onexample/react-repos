import { ChangeEvent, useEffect, useState } from "react";

export function useInput(onChange: (value: string) => void) {
    const [inputValue, setInputValue] = useState<string>("react");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => onChange(inputValue), 300);
        return () => clearTimeout(timeoutId);
    }, [inputValue, onChange]);

    return {
        inputValue,
        handleChange,
    };
}
