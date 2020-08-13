import React from "react";
import {Grid} from "@material-ui/core";
import SearchForm from "./SearchForm";
import RepositoriesTable from "./RepositoriesTable";

export default function Repositories() {
	const handleInputChange = (value: string) => {
		console.log(value)
	}

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
