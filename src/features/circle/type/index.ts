export type Props = {
  totalPeriod: number;
  activePeriod: number;
  onPeriodChange: (index: number) => void;
  setShowEvents: React.Dispatch<React.SetStateAction<boolean>>;
};
