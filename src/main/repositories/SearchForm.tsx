import React from "react";
import { FormControl, InputLabel, Input, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useInput } from "./useInput";

const useStyles = makeStyles({
    root: {
        margin: "1em",
    },
});

interface SearchFormProps {
    onChange: (value: string) => void;
}

export default function SearchForm(props: SearchFormProps) {
    const { onChange } = props;
    const classes = useStyles();
    const { inputValue, handleChange } = useInput(onChange);

    return (
        <FormControl className={classes.root}>
            <InputLabel htmlFor="search-repos">Search</InputLabel>
            <Input
                id="search-repos"
                type="text"
                value={inputValue}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <Search />
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}
