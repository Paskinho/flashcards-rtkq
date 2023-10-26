import { useMemo } from "react";

type usePaginationProps = {
  count: number;
  siblings?: number;
  page: number;
  onChange: (pageNumber: number) => void;
};

type PaginationRange = (number | "...")[];

export const usePagination = ({
  count,
  siblings = 1,
  page,
  onChange,
}: usePaginationProps) => {
  const paginationRange = useMemo(() => {});
};
