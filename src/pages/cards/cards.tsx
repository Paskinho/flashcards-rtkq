import { useState } from "react";

import { useParams } from "react-router-dom";
import { Page } from "src/components/ui/page";
import { z } from "zod";

import { Sort } from "../../../src/components/ui/table";
import { useDeleteCardMutation } from "../../../src/services/cards/cards";

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

  const { data: deck } = useGetDeckByIdQuery(deckId || "");

  return (
    <Page>
      <img src={} />
    </Page>
  );
};
