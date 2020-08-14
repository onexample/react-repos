import { act, renderHook } from "@testing-library/react-hooks";
import { useInput } from "./useInput";
import { ChangeEvent } from "react";

describe("useInput", () => {
    it("should have default value", () => {
        const onChange = jest.fn();
        const { result } = renderHook(() => useInput(onChange));
        expect(result.current.inputValue).toEqual("react");
    });

    it("should handle input change", () => {
        const onChange = jest.fn();
        const { result } = renderHook(() => useInput(onChange));

        act(() => {
            result.current.handleChange({ target: { value: "new value" } } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.inputValue).toEqual("new value");
    });
});
