import {useSearchParams} from "react-router-dom";
import {useQueryParam} from "../../hooks";
import {useState} from "react";
import {Sort} from "../../components/ui/table";



export const useDeckSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useQueryParam<number>(
        searchParams,
        setSearchParams,
        'page',
        1
    )

    const [minCardsCount, setMinCards] = useQueryParam<number>(
        searchParams,
        setSearchParams,
        'minCards',
        0
    )

    const [maxCardsCount, setMaxCards] = useQueryParam<number>(
        searchParams,
        setSearchParams,
        'maxCards'
    )

    const [search, setSearch] = useQueryParam<string>(
        searchParams,
        setSearchParams,
        'search'
    )

    const [currentTab, setCurrentTab] = useQueryParam<string>(
        searchParams,
        setSearchParams,
        'currentTab',
        'all'
    )

    const [rangeValue, setRangeValue] = useState([minCardsCount, maxCardsCount])
    const [sortKey, setSortKey] = useQueryParam<string>(
        searchParams,
        setSearchParams,
        'sortKey'
    )

    const [sortDirection, setSortDirection] = useQueryParam<'asc' | 'desc'>(
        searchParams,
        setSearchParams,
        'sortDirection'
    )

    const setSort = (sort: { key: string;
        direction: "asc" | "desc"; }) => {
        if (!sort) {
            setSortKey(null)
            setSortDirection(null)

            return
        }
        setSortKey(sort.key)
        setSortDirection(sort.direction)
    }

    const sort: null | { key: string; direction: "asc" | "desc" } =
        sortDirection === null || sortKey === null
            ? null
            : {
                direction: sortDirection,
                key: sortKey,
            }


    return {
        currentPage,
        currentTab,
        maxCardsCount,
        minCardsCount,
        rangeValue,
        search,
        setCurrentPage,
        setCurrentTab,
        setMaxCards,
        setMinCards,
        setRangeValue,
        setSearch,
        setSort,
        sort
    }

}