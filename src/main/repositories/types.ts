export interface RepositoryItem {
	node: {
		id: string;
		name: string;
		stargazers: {
			totalCount: number
		},
		forks: {
			totalCount: number
		}
	}
}



export interface RepositoriesData {
	search: {
		edges: RepositoryItem[]
	}
}

export interface RepositoriesVars {
	query: string;
	first: number;
	before?: string;
	after?: string;
}
