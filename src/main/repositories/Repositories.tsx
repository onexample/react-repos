import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import SearchForm from "./SearchForm";
import RepositoriesTable from "./RepositoriesTable";
import {useQuery, gql} from "@apollo/client";

const REPOS = gql`
	query SearchRepositories($str: String!, $first: Int!, $after: String, $before: String) {
        search(query: $str, type: REPOSITORY, first: $first, after: $after, before: $before ) {
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

export default function Repositories() {

	const { data } = useQuery(REPOS, {
		variables: {
			str: "react",
			first: 10
		}
	})

	const handleInputChange = (value: string) => {
		console.log(value)
	}


	useEffect(() => {
		console.log(data)
	},[data])


	const rows = [
		{name: "Test", stars: 100, forks: 345},
		{name: "Test 2", stars: 400, forks: 123},
		{name: "Test 3", stars: 34, forks: 12},
	]

	return (
		<Grid container direction="column">
			<Grid item xs={12}>
				<Grid container justify="center">
					<SearchForm onChange={handleInputChange}/>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<RepositoriesTable data={rows}/>
			</Grid>
		</Grid>
	)
}
