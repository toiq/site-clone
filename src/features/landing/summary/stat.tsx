export interface StatProps {
  amount: number;
  plus?: boolean;
  label: string;
}

export const Stat = ({ amount, plus, label }: StatProps) => {
  return (
    <div className="text-white">
      <p className="text-[40px] font-extrabold leading-[52px]">
        {amount}
        {plus && "+"}
      </p>
      <p className="text-xl leading-9">{label}</p>
    </div>
  );
};
