export interface RepositoryItem {
    node: {
        id: string;
        name: string;
        stargazers: {
            totalCount: number;
        };
        forks: {
            totalCount: number;
        };
    };
}

export interface RepositoryPageInfo {
    startCursor: string;
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface RepositoriesData {
    search: {
        edges: RepositoryItem[];
        pageInfo: RepositoryPageInfo;
    };
}

export interface RepositoriesVars {
    target: string;
    first: number;
    before?: string;
    after?: string;
}
