import React from "react";
import {createStyles, IconButton, Theme, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexShrink: 0,
			marginLeft: theme.spacing(2.5),
		},
	}),
);


export interface TablePaginationActionsProps {
	count: number;
	page: number;
	rowsPerPage: number;
	onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export default function PaginationActions(props: TablePaginationActionsProps) {

	const classes = useStyles();
	const theme = useTheme();
	const { count, page, rowsPerPage, onChangePage } = props;

	const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onChangePage(event, page - 1);
	};

	const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onChangePage(event, page + 1);
	};


	return (
		<div className={classes.root}>
			<IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
			</IconButton>
		</div>
	)
}
