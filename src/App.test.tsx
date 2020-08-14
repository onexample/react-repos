import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("should have header", () => {
        const { queryByText } = render(<App />);
        expect(queryByText("React Repositories")).toBeInTheDocument();
    });
});
