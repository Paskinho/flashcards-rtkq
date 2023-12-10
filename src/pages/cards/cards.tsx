import { useState } from "react";

import { useParams } from "react-router-dom";
import { Page } from "src/components/ui/page";
import { useGetDeckByIdQuery } from "src/services/decks/decks";
import { z } from "zod";

import { Sort } from "../../../src/components/ui/table";
import {
  useDeleteCardMutation,
  useGetCardsQuery,
} from "../../../src/services/cards/cards";

const newDeckSchema = z.object({
  question: z.string().min(3).max(500),
  answer: z.string().min(3).max(500),
});

export const Cards = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const [deleteCard] = useDeleteCardMutation();
  const [sort, setSort] = useState<Sort>({
    key: "updated",
    direction: "asc",
  });
  const sortString = sort ? `${sort.key}-${sort.direction}` : null;

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const { data: deck } = useGetDeckByIdQuery(deckId || "");
  const { data: cards, isLoading } = useGetCardsQuery({
    deckId: deckId || "",
    orderBy: sortString,
    currentPage: page,
    itemsPerPage: perPage,
  });

  return (
    <Page>
      <img src={} />
    </Page>
  );
};
