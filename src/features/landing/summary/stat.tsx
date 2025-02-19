export interface StatProps {
  amount: number;
  plus?: boolean;
  label: string;
}

export const Stat = ({ amount, plus, label }: StatProps) => {
  return (
    <div className="text-white">
      <p className="text-[32px] font-extrabold lg:text-[40px] lg:leading-[52px]">
        {amount}
        {plus && "+"}
      </p>
      <p className="whitespace-nowrap text-lg lg:text-xl lg:leading-9">
        {label}
      </p>
    </div>
  );
};
