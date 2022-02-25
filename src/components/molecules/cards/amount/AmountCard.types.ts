export type CardType = "income" | "expense" | "receive" | "debt";

export type Props = {
  type: CardType;
  title: string;
  amount: number;
};
