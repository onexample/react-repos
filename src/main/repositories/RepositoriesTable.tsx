import React, { MouseEvent } from "react";
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    CircularProgress,
    createStyles,
    Theme,
    TableFooter,
} from "@material-ui/core";
import { RepositoryItem, RepositoryPageInfo } from "./types";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            "& > * + *": {
                marginTop: theme.spacing(2),
            },
        },
        footer: {
            display: "flex",
        },
    })
);

export interface RepositoriesTableProps {
    data: RepositoryItem[];
    pageInfo?: RepositoryPageInfo;
    isLoading: boolean;
    onNextPage: (event: MouseEvent<HTMLButtonElement>) => void;
    onPrevPage: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function RepositoriesTable(props: RepositoriesTableProps) {
    const classes = useStyles();
    const { data, isLoading, onNextPage, onPrevPage, pageInfo } = props;
    return (
        <Paper>
            {isLoading || data.length === 0 ? (
                <div className={classes.root}>
                    <CircularProgress />
                </div>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
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
                                    <TableCell>{row.node.name}</TableCell>
                                    <TableCell>{row.node.stargazers.totalCount}</TableCell>
                                    <TableCell>{row.node.forks.totalCount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow className={classes.footer}>
                                <TableCell>
                                    <IconButton onClick={onPrevPage} disabled={!pageInfo?.hasPreviousPage}>
                                        <KeyboardArrowLeft />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={onNextPage} disabled={!pageInfo?.hasNextPage}>
                                        <KeyboardArrowRight />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            )}
        </Paper>
    );
}
