import { useMemo } from "react";


const range = (start: number, end: number) => {
  let length = end - start + 1

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
  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + page + 2*DOTS
    const totalPageNumbers = siblings + 5;

    /*
     Case 1:
     If the number of pages is less than the page numbers we want to show in our
     paginationComponent, we return the range [1..totalPageCount]
   */
    if (totalPageNumbers >= count) {
      return range(1, count);
    }
    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(page - siblings, 1);
    const rightSiblingIndex = Math.min(page + siblings, count);

    /*
     We do not show dots when there is only one page number to be inserted
     between the extremes of siblings and the page limits i.e 1 and totalPageCount.
     Hence, we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
   */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < count - 2;

    const firstPageIndex = 1;
    const lastPageIndex = count;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblings;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, count];
    }
  }, []);
};
