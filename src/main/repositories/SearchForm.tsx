import React, {ChangeEvent, useEffect, useState} from "react";
import {FormControl, InputLabel, Input, InputAdornment} from "@material-ui/core";
import {Search} from '@material-ui/icons'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		margin: "1em"
	}
})

interface SearchFormProps {
	onChange: (value: string) => void
}


export default function SearchForm (props: SearchFormProps) {
	const { onChange } = props;
	const classes = useStyles();
	const [inputValue, setInputValue] = useState<string>("react");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => onChange(inputValue), 300);
		return () => clearTimeout(timeoutId);
	}, [inputValue, onChange])

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
	)
}
