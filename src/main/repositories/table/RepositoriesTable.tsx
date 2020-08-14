import React, {ChangeEvent} from "react";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Theme
} from "@material-ui/core";
import PaginationActions from "./PaginationActions";
import {RepositoryItem} from "../types";


export interface RepositoriesTableProps {
	data: RepositoryItem[];
	rowsPerPage: number;
	onChangePage: (event: unknown, newPage: number) => void;
	onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
}


export default function RepositoriesTable(props: RepositoriesTableProps) {
	const {data, rowsPerPage, onChangePage, onChangeRowsPerPage} = props;


	return (
		<Paper>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Repository</TableCell>
							<TableCell>Stars</TableCell>
							<TableCell>Forks</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row, index) => (
							<TableRow key={index}>
								<TableCell component="th" scope="row">
									{row.node.name}
								</TableCell>
								<TableCell>{row.node.stargazers.totalCount}</TableCell>
								<TableCell>{row.node.forks.totalCount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={0}
				onChangePage={onChangePage}
				onChangeRowsPerPage={onChangeRowsPerPage}
				ActionsComponent={PaginationActions}
			/>
		</Paper>
	)
}
