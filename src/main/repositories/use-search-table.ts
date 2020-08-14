import {ChangeEvent, useState} from "react";
import {useQuery} from "@apollo/client";
import {RepositoriesData, RepositoriesVars} from "./types";
import {SEARCH_REPOSITORIES} from "./query";


export function useSearchTable () {

	const [search, setSearch] = useState<string>("")

	const [rowsPerPage, setRowsPerPage] = useState<number>(5);
	const [next, setNext] = useState<string>()
	const [prev, setPrev] = useState<string>()

	const { data, loading, refetch } = useQuery<RepositoriesData, RepositoriesVars>(SEARCH_REPOSITORIES, {
		variables: {
			query: search,
			first: rowsPerPage,
			after: next,
			before: prev,
		}
	})



	const handleInputChange = (value: string) => {
		setSearch(value)
	}


	const handleChangePage = (event: unknown, newPage: number) => {
	};

	const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
	}

	return {
		data,
		loading,
		search,
		rowsPerPage,
		next,
		prev,

		handleInputChange,
		handleChangePage,
		handleChangeRowsPerPage
	}
}
