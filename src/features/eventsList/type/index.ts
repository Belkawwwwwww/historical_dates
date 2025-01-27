export type Event = {
  year: number;
  description: string;
};

export type Props = {
  events: Event[];
  showEvents?: boolean;
};
