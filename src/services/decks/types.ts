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
