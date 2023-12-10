import { User } from "src/services/auth/types";

export type GetDecksParams = {
  authorId?: string;
  name?: string;
  minCardsCount?: number;
  maxCardsCount?: number;
};

export type Decks = Deck[];

export type DeckAuthor = Pick<User, "id" | "name">; // { id: string, name: string }

export type Deck = {
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  shots: number;
  cover?: any;
  rating: number;
  isDeleted?: any;
  isBlocked?: any;
  created: string;
  updated: string;
  author: DeckAuthor;
  cardsCount: number;
};
