import React, {ChangeEvent, FC} from "react";
import {
	createStyles,
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
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
	table: {
		minWidth: 650,
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
}));


export interface RepositoryItem {
	name: string;
	stars: number;
	forks: number;
}

export interface RepositoriesTableProps {
	data: RepositoryItem[];
}


const RepositoriesTable: FC<RepositoriesTableProps> = (props) => {
	const { data } = props;
	const classes = useStyles();


	const handleChangePage = (event: unknown, newPage: number) => {
		debugger
	};

	const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
		debugger
	}


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
						{data.map((row) => (
							<TableRow key={row.name}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell>{row.stars}</TableCell>
								<TableCell>{row.forks}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={data.length}
				rowsPerPage={5}
				page={0}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Paper>
	)
}

export default RepositoriesTable;
