import { useParams } from "react-router-dom";
import { z } from "zod";

const newDeckSchema = z.object({
  question: z.string().min(3).max(500),
  answer: z.string().min(3).max(500),
});

export const Cards = () => {
  const { deckId } = useParams<{ deckId: string }>();
  const [deleteCard] = useDeLeteCardMutation();

  return <div>Cards</div>;
};
