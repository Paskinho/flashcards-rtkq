import { FC } from "react";

import { usePagination } from "src/components/ui/pagination/usePagination";

type PaginationConditionals =
  | {
      perPage?: null;
      perPageOptions?: never;
      onPerPageChange?: never;
    }
  | {
      perPage: number;
      perPageOptions: number[];
      onPerPageChange: (itemPerPage: number) => void;
    };

export type PaginationProps = {
  count: number;
  page: number;
  onChange: (page: number) => void;
  siblings?: number;
  perPage?: number;
  perPageOptions?: number[];
  onPerPageChange?: (itemPerPage: number) => void;
} & PaginationConditionals;

export const Pagination: FC<PaginationProps> = ({
  count,
  page,
  onChange,
  siblings,
  perPage = null,
  perPageOptions,
  onPerPageChange,
}) => {
  const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    page,
    count,
    onChange,
    siblings,
  });
};
