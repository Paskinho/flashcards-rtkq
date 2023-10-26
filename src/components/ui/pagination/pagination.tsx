import { FC } from "react";

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

export const Pagination: FC<PaginationProps> = () => {};
