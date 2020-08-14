import React from "react";
import { render } from "@testing-library/react";
import RepositoriesTable from "./RepositoriesTable";
import { RepositoryItem } from "./types";

describe("RepositoriesTable", () => {
    it("should render data", () => {
        const data: RepositoryItem[] = [
            {
                node: {
                    id: "123",
                    name: "test",
                    stargazers: { totalCount: 21 },
                    forks: { totalCount: 1314 },
                },
            },
        ];
        const { queryByText } = render(
            <RepositoriesTable data={data} isLoading={false} onNextPage={jest.fn()} onPrevPage={jest.fn()} />
        );

        expect(queryByText(data[0].node.name)).toBeInTheDocument();
    });

    it("should display spinner", () => {
        const { getByRole } = render(
            <RepositoriesTable data={[]} isLoading={true} onNextPage={jest.fn()} onPrevPage={jest.fn()} />
        );
        expect(getByRole("progressbar")).toBeInTheDocument();
    });
});
