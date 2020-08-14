import React from "react";
import { Grid } from "@material-ui/core";
import SearchForm from "./SearchForm";
import RepositoriesTable from "./RepositoriesTable";
import { useSearchTable } from "./useSearchTable";

export default function Repositories() {
    const { rows, pageInfo, loading, handleInputChange, handleNextPage, handlePrevPage } = useSearchTable();

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Grid container justify="center">
                    <SearchForm onChange={handleInputChange} />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <RepositoriesTable
                    data={rows}
                    pageInfo={pageInfo}
                    isLoading={loading}
                    onNextPage={handleNextPage}
                    onPrevPage={handlePrevPage}
                />
            </Grid>
        </Grid>
    );
}
