import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { FaEdit, FaTrash } from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

import { ControlledTextField } from "../../../src/components/controlled/controlled-text-field";
import { Button } from "../../../src/components/ui/button";
import { Modal } from "../../../src/components/ui/modal";
import { Page } from "../../../src/components/ui/page";
import { Column, Sort, Table } from "../../../src/components/ui/table";
import { TextField } from "../../../src/components/ui/text-field";
import { Typography } from "../../../src/components/ui/typography";
import {useGetDeckByIdQuery} from "../../services/decks/decks";
import {useGetDeckCardsQuery} from '../../services/decks/decks'
import {useGetCardsQuery} from "../../services/cards/cards"
import {
  cardsApi,
  useCreateCardMutation,
  useDeleteCardMutation,
} from "../../services/cards/cards";

import s from "./cards.module.scss";
import {LearnCard} from "../../components/card/learnCard";

const newDeckSchema = z.object({
  question: z.string().min(3).max(500),
  answer: z.string().min(3).max(500),
});

type NewCard = z.infer<typeof newDeckSchema>;

export const Cards = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const deleteCard = useDeleteCardMutation;
  //верно вот так  const [deleteCard] = useDeleteCardMutation()
  const [sort, setSort] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>({
    key: "updated",
    direction: "asc",
  });
  const sortString = sort ? `${sort.key}-${sort.direction}` : null;

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const { data: deck } = useGetDeckByIdQuery(deckId || "");
  const { data: cards, isLoading } = useGetDeckCardsQuery({
    deckId: deckId || '',
    orderBy: sortString,
    currentPage: page,
    itemsPerPage: perPage,
  })



  if (!deckId) return <div>DECK NOT FOUND</div>;

  if (isLoading) return <div>LOADING...</div>;

  const columns: Column[] = [
    { key: "question", sortable: true, title: "Question" },
    { key: "answer", sortable: true, title: "Answer" },
    { key: "updated", sortable: true, title: "Updated" },
    { key: "grade", sortable: true, title: "Grade" },
    { key: "actions", sortable: false, title: "" },
  ];

  return (
    <Page className={s.cards}>
      <img
        src={deck?.cover}
        alt={deck?.name} // было без вопроса (обязательный аргумент)
        className={"w-full h-64 object-cover"}
      />
      <div className={"flex items-center mb-6 justify-between"}>
        <Typography variant={"large"}>{deck?.name}</Typography>
        <CreateCardModal deckId={deckId} />
      </div>
      <div>
        <TextField
          placeholder={"Search"}
          value={search}
          onValueChange={setSearch}
        />
      </div>
      <div>
        <Table.Root className={"w-full"}>
          <Table.Header columns={columns} sort={sort} onSort={setSort} />
          <Table.Body>
            {cards?.items?.map((card) => (
              <Table.Row key={card.id}>
                <Table.Cell>{card.question}</Table.Cell>
                <Table.Cell>{card.answer}</Table.Cell>
                <Table.Cell>{dayjs(card.updated).format('DD.MM.YYYY')}</Table.Cell>
                <Table.Cell>{card.grade}</Table.Cell>
                <Table.Cell className={"flex gap-4 items-center"}>
                  <button className={"unset"}>
                    <FaEdit />
                  </button>
                  <button
                    className={"unset"}
                    onClick={() => {
                      deleteCard(card.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Page>
  );
};

const CreateCardModal = ({ deckId }: { deckId: string }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  // const [createCard] = useCreateCardMutation();

  const {control, handleSubmit} = useForm<NewCard>({
    resolver: zodResolver(newDeckSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const handleCardCreated = handleSubmit((args: NewCard) => {
    // createCard({ ...args, deckId })
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Card created successfully");
    //     closeModal();
    //   })
    //   .catch((err) => {
    //     toast.error(err.data.message);
    //   });
  });

  const learnLink = `/decks/${deckId}/learn`

  return (
    <>
      <Button as={Link} to={learnLink}>Learn Card</Button>
      <Button onClick={openModal}>Add New Card</Button>
      <Modal open={showModal} onClose={closeModal} title={"Create Card"}>
        <form onSubmit={handleCardCreated} className={"gap-4 flex flex-column"}>
          <ControlledTextField
            label={"Question"}
            control={control}
            name={"question"}
          />
          <ControlledTextField
            label={"Answer"}
            control={control}
            name={"answer"}
          />
          <div className={"flex items-center justify-between"}>
            <Button onClick={closeModal} variant={"secondary"}>
              Cancel
            </Button>
            <Button type={"submit"}>Create</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};
