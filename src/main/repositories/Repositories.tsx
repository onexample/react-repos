import React from "react";
import {Grid} from "@material-ui/core";
import SearchForm from "./SearchForm";
import RepositoriesTable from "./table/RepositoriesTable";
import {useSearchTable} from "./use-search-table";

export default function Repositories() {

	const {rowsPerPage, handleInputChange, handleChangePage, handleChangeRowsPerPage} = useSearchTable()


	return (
		<Grid container direction="column">
			<Grid item xs={12}>
				<Grid container justify="center">
					<SearchForm onChange={handleInputChange}/>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<RepositoriesTable data={[]} rowsPerPage={rowsPerPage} onChangePage={handleChangePage}
								   onChangeRowsPerPage={handleChangeRowsPerPage}/>
			</Grid>
		</Grid>
	)
}
