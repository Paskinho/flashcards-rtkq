import {useSearchParams} from "react-router-dom";
import {useQueryParam} from "../../hooks";


const useDeckSearchParams = () => {
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

}