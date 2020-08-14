import { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { RepositoriesData, RepositoriesVars, RepositoryItem, RepositoryPageInfo } from "./types";
import { SEARCH_REPOSITORIES } from "./query";

export function useSearchTable() {
    const rowsPerPage = useRef(12);
    const [search, setSearch] = useState<string>("");
    const [next, setNext] = useState<string>();
    const [prev, setPrev] = useState<string>();
    const [rows, setRows] = useState<RepositoryItem[]>([]);
    const [pageInfo, setPageInfo] = useState<RepositoryPageInfo>();

    const { data, loading } = useQuery<RepositoriesData, RepositoriesVars>(SEARCH_REPOSITORIES, {
        variables: {
            target: search,
            first: rowsPerPage.current,
            after: next,
            before: prev,
        },
    });

    const handleInputChange = (value: string) => {
        setSearch(value);
    };

    const handleNextPage = () => {
        setNext(pageInfo?.endCursor);
    };
    const handlePrevPage = () => {
        setPrev(pageInfo?.startCursor);
    };

    useEffect(() => {
        if (!loading && data?.search) {
            setRows(data.search.edges);
            setPageInfo(data.search.pageInfo);
        }
    }, [data, loading]);

    return {
        rows,
        pageInfo,
        loading,
        handleInputChange,
        handleNextPage,
        handlePrevPage,
    };
}
