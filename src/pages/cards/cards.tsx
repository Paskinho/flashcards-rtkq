import { useState } from "react";

import { useParams } from "react-router-dom";
import { Button } from "src/components/ui/button";
import { z } from "zod";

import { Page } from "../../../src/components/ui/page";
import { Sort } from "../../../src/components/ui/table";
import { Typography } from "../../../src/components/ui/typography";
import {
  useDeleteCardMutation,
  useGetCardsQuery,
} from "../../../src/services/cards/cards";
import { useGetDeckByIdQuery } from "../../../src/services/decks/decks";

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

  if (!deckId) return <div>DECK NOT FOUND</div>;

  if (isLoading) return <div>LOADING...</div>;

  return (
    <Page>
      <img
        src={deck?.cover}
        alt={deck.name}
        className={"w-full h-64 object-cover"}
      />
      <div className={"flex items-center mb-6 justify-between"}>
        <Typography variant={"large"}>{deck?.name}</Typography>
        <CreateCardModal deckId={deckId} />
      </div>
    </Page>
  );
};

const CreateCardModal = ({ deckId }: { deckId: string }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <>
      <Button onClick={openModal}>Add New Card</Button>
    </>
  );
};
