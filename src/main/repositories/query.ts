import {gql} from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
    query SearchRepositories($query: String!, $first: Int!, $after: String, $before: String) {
        search(query: $query, type: REPOSITORY, first: $first, after: $after, before: $before ) {
            edges {
                node {
                    ...on Repository {
                        name,
                        stargazers {
                            totalCount
                        },
                        forks {
                            totalCount
                        }
                    }
                }
            }
            pageInfo{
                startCursor
                endCursor,
                hasNextPage
                hasPreviousPage
            }
        }
    }
`
